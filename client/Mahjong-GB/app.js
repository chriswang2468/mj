var tl; //TimelineMax对象
var tlDuration = 0.3; //动画持续时长
var playerData = []; //所有数据
var interactArea; //交互框
var currPlayerID, lastPlayerID; //当前玩家ID，上一次操作的玩家ID
var lastCode; //上次出牌的code
var animationStage = 0;
var intervalWidth = 10; //明牌与暗牌的间隔大小
var canHu; //jugde提供的能否和牌的信息
var quan; //当前圈风

$.fn.extend({
  toMiddle: function() {
    $(this).css({
      marginTop: ($(this).width() - $(this).height()) / 4,
      marginBottom: ($(this).width() - $(this).height()) / 4,
      marginLeft: ($(this).height() - $(this).width()) / 4,
      marginRight: ($(this).height() - $(this).width()) / 4,
      top: ($('#gameBoard').height() * 2 - $(this).height() - $(this).width()) / 4,
      left: ($('#gameBoard').width() * 2 - $(this).height() - $(this).width()) / 4
    });
    return $(this);
  }
})

//保证人机对战时自己是最下方玩家
//该函数可以双向转换
function transPlayerID(playerID) {
  if (currPlayerID == -1)
    return (7 - playerID) % 4;
  return (currPlayerID - playerID + 4) % 4;
}

//t=-2 -1 0 表示第一张牌为code+t
function chowTileList(code, t) {
  var re = [];
  var l = parseInt(code.charAt(1));
  for(var i = 0; i < 3; i++) {
    re.push(code.charAt(0) + (l + i + t));
  }
  return re;
}

//创建一个牌的div，可用于gameboard或request时的展示
function tileDiv(code) {
  var div = $('<div>')
    .css({
      zIndex: 1,
      width: 36,
      height: 52,
      borderColor: '#000000',
      borderStyle: 'solid',
      borderWidth: 2,
      borderRadius: 5,
      boxSizing: 'border-box',
      backgroundColor: (code == 'HIDDEN' ? '#00990000' : '#FFFFFF00')
    })
    .toMiddle();
  if(code != 'HIDDEN') {
    var img = $('<img>').attr('src', 'Mahjong-GB/images/' + code + '.svg')
      .attr('height', 39.39)
      .attr('width', 30.18)
      .css({
        marginTop: (52 - 6 - 39.39) / 2,
        marginBottom: (52 - 6 - 39.39) / 2,
        marginLeft: (36 - 6 - 30.18) / 2,
        marginRight: (36 - 6 - 30.18) / 2
      })
      .appendTo(div);
  }
  var mouseArea = $('<div>')
    .css({
      zIndex: 1,
      width: 36 - 3,
      height: 52 - 3,
      opacity: 0,
      backgroundColor: 'red',
      position: 'absolute',
      top: 0,
      left: 0
    }).appendTo(div);
  return div;
}
//构造Tile
function Tile(playerID, code, hidden, x, y) {
  this.playerID = playerID;
  this.code = code;
  this.hidden = hidden;
  this.x = x;
  this.y = y;
  this.noPlay = false; //禁止该牌被打出

  this.div = tileDiv(hidden ? 'HIDDEN' : code);
  this.div.css({
    opacity: 0,
    transform: 'rotate(' + (playerID * 90) + 'deg)' +
      'translate(' + x + 'px,' + y + 'px)'
  }).addClass('tile')
    .appendTo($('#gameBoard'));

  //在tlPosition时间移动到x,y
  this.to = function(playerID, x, y, tlPosition) {
    this.playerID = playerID;
    this.x = x;
    this.y = y;
    tl.to(this.div, tlDuration, {
      opacity: 1,
      transform: 'rotate(' + (playerID * 90) + 'deg)' +
        'translate(' + x + 'px,' + y + 'px)'
    }, tlPosition);
  }

  //在tlPosition变为明牌
  this.show = function(tlPosition) {
    if (!this.hidden)
      return;
    var newDiv = tileDiv(this.code)
      .css({
        zIndex: 0,
        opacity: 0,
        transform: 'rotate(' + (this.playerID * 90) + 'deg)' +
          'translate(' + this.x + 'px,' + this.y + 'px)'
      }).addClass('tile')
        .appendTo($('#gameBoard'));
    tl.set(newDiv, {
        opacity: 1
      }, tlPosition)
      .to(this.div, tlDuration, {
        opacity: 0
      }, tlPosition)
      .set(newDiv, {
        zIndex: 1
      }, tlPosition + tlDuration);
    this.div = newDiv;
  }
}

//构造playerData
function PlayerData(playerID, playerName) {
  this.playerID = playerID;

  this.x = -300;
  //明牌区域开始位置
  this.pubX = this.x;
  this.pubY = playerID % 2 ? 410 : 310;
  //明牌区域结束位置

  this.handX = this.x;
  this.handY = playerID % 2 ? 410 : 310;
  //暗牌区域结束位置

  this.discardWidth = 38; //棋盘不够时会压缩弃牌
  this.discardX = this.x;
  this.discardY = (transPlayerID(playerID) * 1.2 - 3) * 54;
  //弃牌区结束位置

  this.pubData = [];
  this.handData = [];
  this.discardData = [];
  this.playerName = playerName;
  this.hidden = currPlayerID == -1 || playerID == 0 ? false : true;

  //用于request
  this.tileCnt = {};
  this.pongCnt = {};

  this.isHu = false;

  this.playerInfoDiv = $('<div>').addClass('playerInfo')
    .css({
      opacity: 0,
      width: 250,
      height: 48,
      transform: 'rotate(' + (playerID * 90) + 'deg) ' +
        'translate(' + (this.pubX + 100) + 'px,' + (this.pubY - 60) + 'px)'
    })
    .addClass('ui-corner-all')
    .toMiddle()
    .appendTo($('#gameBoard'));
  this.playerDirectionDiv = $('<div>')
    .css({
      width: 40,
      height: 40,
      display: 'inline-block',
      verticalAlign: 'top',
      marginTop: 4
    })
    .appendTo(this.playerInfoDiv)
    .append($('<div>').css({
      position: 'absolute',
      left: 10,
      bottom: 4
    }).append($('<b>' + (['东', '南', '西', '北'])[transPlayerID(playerID)] + '</b>').css({
      fontSize: 20
    })));
  this.playerIconDiv = $('<img>')
    .css({
      width: 40,
      height: 40,
      display: 'inline-block',
      verticalAlign: 'top',
      marginTop: 4
    })
    .addClass('ui-corner-all')
    .attr('src', playerName.imgid + '?rand=' + Math.random())
    .appendTo(this.playerInfoDiv);
  this.playerNameDiv = $('<div>')
    .css({
      width: 250 - 40 - 40,
      height: 40,
      display: 'inline-block',
      verticalAlign: 'bottom',
    })
    .append($('<div>').css({
      position: 'absolute',
      left: 84,
      bottom: 4
    }).append($('<b>' + playerName.name + '</b>')))
    .appendTo(this.playerInfoDiv);
  this.playerScoreDiv = $('<div>').addClass('debugArea')
    .css({
      width: 100,
      height: 40,
      opacity: 0,
      fontSize: 50,
      transform: 'rotate(' + (playerID * 90) + 'deg) ' +
        'translate(' + (this.x + 300) + 'px,' + (this.pubY - 100) + 'px)'
    })
    .toMiddle()
    .append($('<b>分</b>'))
    .appendTo($('#gameBoard'));
  this.playerHuDiv = $('<div>').addClass('debugArea')
    .css({
      width: 200,
      height: 40,
      opacity: 0,
      fontSize: 50,
      transform: 'rotate(' + (playerID * 90) + 'deg) ' +
        'translate(' + (this.x + 450) + 'px,' + (this.pubY - 100) + 'px)'
    })
    .toMiddle()
    .append($('<b>和了</b>'))
    .appendTo($('#gameBoard'));
  var debugHand = $('<div>').addClass('debugArea')
    .css({
      transform: 'rotate(' + (playerID * 90) + 'deg) ' +
        'translate(' + (this.pubX + 38 * 7.5) + 'px,' + this.pubY + 'px)',
      height: 54,
      width: 38 * 16
    })
    .toMiddle()
    .appendTo($('#gameBoard'));
  var debugDiscard = $('<div>').addClass('debugArea')
    .css({
      transform: 'translate(' + (this.discardX + 38 * 7.5) + 'px,' + this.discardY + 'px)',
      height: 54,
      width: 38 * 16
    })
    .toMiddle()
    .appendTo($('#gameBoard'));

  //整理手牌
  this.orderTile = function(tlPosition) {
    //排序，若hidden， 则仅交换code， 否则交换code和div
    function sortTile(data, hidden) {
      if (hidden) {
        var codeList = [];
        for (var i = 0; i < data.length; i++)
          codeList[i] = data[i].code;
        codeList.sort();
        for (var i = 0; i < data.length; i++)
          data[i].code = codeList[i];
      } else {
        data.sort(function(a, b) {
          if (a.code != b.code)
            return a.code < b.code ? -1 : 1;
          if (a.x != b.x)
            return a.x < b.x ? -1 : 1;
          if (a.y != b.y)
            return a.y < b.y ? -1 : 1;
          return 0;
        });
      }
    }

    //整理明牌
    this.pubX = this.x;
    var pubWidth = (this.pubData.length + this.handData.length > 16) ?
      (38 - 38 * (this.pubData.length + this.handData.length - 16) / this.pubData.length)
      : 38;
    //console.log(this.pubData.length + this.handData.length, pubWidth);
    for (var i = 0; i < this.pubData.length; i++) {
      this.pubData[i].to(playerID, this.pubX, this.pubY, tlPosition);
      this.pubX += pubWidth;
    }

    //整理手牌
    if (this.pubData.length) this.handX = this.pubX + intervalWidth;
    else this.handX = this.pubX;
    sortTile(this.handData, this.hidden);
    for (var i = 0; i < this.handData.length; i++) {
      this.handData[i].to(playerID, this.handX, this.handY, tlPosition);
      this.handX += 38;
    }
  }

  //发牌
  this.dealTile = function(codeList) {
    for (var i = 0; i < codeList.length; i++) {
      var cTile = new Tile(this.playerID, codeList[i], this.hidden,
        this.handX, this.handY - 26);
      cTile.to(this.playerID, this.handX, this.handY,
        (i + 1) * tlDuration);
      if(codeList[i].charAt(0) == 'H') {
        this.pubData.push(cTile);
        cTile.show((codeList.length + 1) * tlDuration);
      } else {
        this.handData.push(cTile);
        if(this.tileCnt[codeList[i]] == undefined) {
          this.tileCnt[codeList[i]] = 0;
        }
        this.tileCnt[codeList[i]]++;
      }
      this.handX += 38;
    }
    this.orderTile((codeList.length + 2) * tlDuration);
  }
  //摸牌
  this.drawTile = function(code) {
    var drawData = new Tile(this.playerID, code, this.hidden,
      this.handX + intervalWidth, this.handY - 26);
    drawData.to(this.playerID, this.handX + intervalWidth, this.handY,
      animationStage * tlDuration);
    this.handData.push(drawData);
    if(this.tileCnt[code] == undefined) {
      this.tileCnt[code] = 0;
    }
    this.tileCnt[code]++;
    this.handX += 38;
  }
  //打牌
  this.playTile = function(code) {
    var i;
    for (i = 0; i < this.handData.length && this.handData[i].code != code; i++);
    if (i == this.handData.length)
      console.error('Error: playTile', code);
    if (this.hidden) {
      this.handData[i].code = this.handData[this.handData.length - 1].code;
      this.handData[this.handData.length - 1].code = code;
      i = this.handData.length - 1;
    }
    this.handData[i].show(animationStage * tlDuration);
    animationStage++;
    this.discardData.push(this.handData.splice(i, 1)[0]);
    this.tileCnt[code]--;
    this.discardWidth = this.discardData.length <= 16 ? 38 :
      38 * 16 / this.discardData.length;
    this.discardX = this.x + this.discardWidth * this.discardData.length;
    for (var i = 0; i < this.discardData.length; i++) {
      tl.set(this.discardData[i].div, {
        zIndex: i + 1
      }, animationStage * tlDuration);
      this.discardData[i].to(0, this.discardWidth * i + this.x, this.discardY,
        animationStage * tlDuration);
    }
    animationStage++;
    this.orderTile(animationStage * tlDuration);
  }
  //补花
  this.flowerTile = function() {
    var i;
    var cTile = this.handData.pop();
    cTile.show(animationStage * tlDuration);
    animationStage++;
    for (i = 0; i < this.pubData.length && this.pubData[i].code.charAt(0) == 'H'; i++);
    this.pubData.splice(i, 0, cTile);
    animationStage++;
    this.orderTile(animationStage * tlDuration);
  }
  //碰牌/扛牌 碰牌：need=3 扛牌：need=4
  this.pongKongTile = function(code, need) {
    var pubAddData = [];
    var i;
    var pong = need == 3;
    if (lastPlayerID != playerID) {
      pubAddData.push(playerData[lastPlayerID].discardData.pop());
      playerData[lastPlayerID].discardX -= playerData[lastPlayerID].discardWidth;
      need--;
    }
    this.tileCnt[code] -= need;
    for (i = 0; i < this.handData.length && need; i++) {
      if (this.handData[i].code == code) {
        need--;
        //暗杠
        if (this.hidden && (lastPlayerID != playerID || this.pongCnt[code])) {
          var swapData = this.handData[i].code;
          this.handData[i].code = this.handData[0].code;
          this.handData[0].code = swapData;
          this.handData[0].show(animationStage * tlDuration);
          pubAddData.push(this.handData.shift());
        } else {
          pubAddData.push(this.handData.splice(i, 1)[0]);
        }
        i--;
      }
    }
    animationStage++;
    i = 1;
    while (i < this.pubData.length &&
      (this.pubData[i].code != code || this.pubData[i - 1].code != code)) i++;
    while (i < this.pubData.length && this.pubData[i].code == code) i++;
    for (var j = 0; j < pubAddData.length; j++) {
      this.pubData.splice(i, 0, pubAddData[j]);
      i++;
    }
    this.orderTile(animationStage * tlDuration);
    this.pongCnt[code] = pong;
  }
  this.pongTile = function(code) {
    this.pongKongTile(code, 3);
  }
  this.kongTile = function(code) {
    this.pongKongTile(code, 4);
  }
  ////吃牌，code为吃牌时中间的那张
  this.chowTile = function(code) {
    var discardTile = playerData[lastPlayerID].discardData.pop();
    playerData[lastPlayerID].discardX -= playerData[lastPlayerID].discardWidth;
    var need = chowTileList(code, -1);
    for(var i = 0; i < 3; i++) {
      if(need[i] == discardTile.code) {
        this.pubData.push(discardTile);
      } else {
        this.tileCnt[need[i]]--;
        var j;
        for(j = 0; j < this.handData.length && this.handData[j].code != need[i]; j++);
        if(j == this.handData.length) {
          console.error('Error: chowTile', need[i]);
        }
        if (this.hidden) {
          var swapData = this.handData[j].code;
          this.handData[j].code = this.handData[0].code;
          this.handData[0].code = swapData;
          this.handData[0].show(animationStage * tlDuration);
          this.pubData.push(this.handData.shift());
        } else {
          this.pubData.push(this.handData.splice(j, 1)[0]);
        }
      }
    }
    animationStage++;
    this.orderTile(animationStage * tlDuration);
  }
  //和牌
  this.huTile = function(code) {
    if (lastPlayerID != playerID) {
      this.handData.push(playerData[lastPlayerID].discardData.pop());
      playerData[lastPlayerID].discardX -= playerData[lastPlayerID].discardWidth;
    }
    for (var j = 0; j < this.pubData.length; j++) {
      this.pubData[j].show(animationStage * tlDuration);
    }
    for (var j = 0; j < this.handData.length; j++) {
      this.handData[j].show(animationStage * tlDuration);
    }
    this.hidden = false;
    animationStage++;
    this.orderTile(animationStage * tlDuration);
    animationStage++;
    this.playerHuDiv.children().text('和了');
    tl.to(this.playerHuDiv, tlDuration, {
      opacity: 1,
      fontSize: 20,
      transform: 'rotate(' + (playerID * 90) + 'deg) ' +
        'translate(' + (this.x + 450) + 'px,' + (this.pubY - 60) + 'px)'
    }, animationStage * tlDuration);
    this.isHu = true;
  }
  //终局
  this.over = function(score) {
    this.playerScoreDiv.children().text(score + '分');
    tl.to(this.playerScoreDiv, tlDuration, {
      opacity: 1,
      fontSize: 20,
      transform: 'rotate(' + (playerID * 90) + 'deg) ' +
        'translate(' + (this.x + 300) + 'px,' + (this.pubY - 60) + 'px)'
    }, (animationStage + 1) * tlDuration);
    for (var j = 0; j < this.pubData.length; j++) {
      this.pubData[j].show(animationStage * tlDuration);
    }
    for (var j = 0; j < this.handData.length; j++) {
      this.handData[j].show(animationStage * tlDuration);
    }
    this.hidden = false;
  }
  //Bot错误
  this.botError = function(action) {
    if(action == 'NJ') {
      this.playerHuDiv.children().text('非法JSON');
    } else if(action == 'WA') {
      this.playerHuDiv.children().text('非法操作');
    } else if(action == 'WH') {
      this.playerHuDiv.children().text('和牌未达到8番');
    } else if(action == 'MLE') {
      this.playerHuDiv.children().text('内存超过限制');
    } else if(action == 'TLE') {
      this.playerHuDiv.children().text('决策超时');
    } else {
      this.playerHuDiv.children().text('未知错误');
    }
    tl.to(this.playerHuDiv, tlDuration, {
      opacity: 1,
      fontSize: 20,
      transform: 'rotate(' + (playerID * 90) + 'deg) ' +
        'translate(' + (this.x + 450) + 'px,' + (this.pubY - 60) + 'px)'
    }, animationStage * tlDuration);
  }
}

var huInfo = $('<div>').addClass('debugArea')
  .css({
    opacity: 0,
    width: 500,
    height: 100,
    fontSize: 20,
    transform: 'translate(' + 0 + 'px,' + 150 + 'px)'
  })
  .addClass('ui-corner-all')
  .toMiddle()
  .appendTo($('#gameBoard'));
var otherInfo = $('<b>')
  .appendTo(
  $('<div>').addClass('debugArea')
    .css({
      width: 500,
      height: 40,
      fontSize: 20,
      transform: 'translate(' + 0 + 'px,' + 220 + 'px)'
    })
    .addClass('ui-corner-all')
    .toMiddle()
    .appendTo($('#gameBoard'))
  );
  //显示和牌牌型信息
function showHuInfo(fan) {
  /*for(var i = 0; i < 4; i++) {
    for (var j = 0; j < playerData[i].discardData.length; j++) {
      tl.to(playerData[i].discardData[j].div, tlDuration, {
        opacity: 0
      }, animationStage * tlDuration);
    }
  }
  animationStage++;*/
  var totFan = 0;
  for (var i = 0; i < fan.length; i++) {
    totFan += fan[i].cnt * fan[i].value;
    if(i != 0) {
      huInfo.append($('<b>').append(' + '));
    }
    if(fan[i].cnt > 1) {
      huInfo.append($('<b>').append(fan[i].name + '(' + fan[i].value + '番)' + '×' + fan[i].cnt));
    } else {
      huInfo.append($('<b>').append(fan[i].name + '(' + fan[i].value + '番)'));
    }
  }
  huInfo.append($('<br>'));
  huInfo.append($('<b>').append('总计：' + totFan + '番'));
  tl.to(huInfo, tlDuration, {
    opacity: 1
  }, animationStage * tlDuration);
}

function displayCallback(data) {
  //console.log(playerData[0].tileCnt);
  //console.log('Display ', data);
  tl = new infoProvider.v2.TimelineMax();
  if (!data.action || data.action == '')
    return tl;
  animationStage = 1;
  canHu = data.canHu;
  if (data.action == 'INIT') {
    quan = data.quan;
    tl.to(otherInfo, tlDuration, {
      text: (['东', '南', '西', '北'])[quan] + '风圈'
    }, animationStage * tlDuration);
  } else if (data.action == 'DEAL') {
    for (var i = 0; i < 4; i++) {
      tl.to(playerData[transPlayerID(i)].playerInfoDiv, tlDuration, {
        opacity: 1
      }, animationStage * tlDuration);
      var codeList = data.hand[i];
      playerData[transPlayerID(i)].dealTile(codeList);
    }
    animationStage++;
    tl.to(otherInfo, tlDuration, {
      text: (['东', '南', '西', '北'])[quan] + '风圈,牌墙剩余' + data.tileCnt + '张'
    }, animationStage * tlDuration);
  } else if (data.action == 'DRAW') {
    playerData[transPlayerID(data.player)].drawTile(data.tile);
    lastCode = data.tile;
    animationStage++;
    tl.to(otherInfo, tlDuration, {
      text: (['东', '南', '西', '北'])[quan] + '风圈,牌墙剩余' + data.tileCnt + '张'
    }, animationStage * tlDuration);
  } else if (data.action == 'BUHUA') {
    playerData[transPlayerID(data.player)].drawTile(data.tile);
    animationStage++;
    playerData[transPlayerID(data.player)].flowerTile();
  } else if (data.action == 'PLAY') {
    playerData[transPlayerID(data.player)].playTile(data.tile);
    lastCode = data.tile;
  } else if (data.action == 'PENG') {
    playerData[transPlayerID(data.player)].pongTile(lastCode);
    animationStage++;
    playerData[transPlayerID(data.player)].playTile(data.tile);
    lastCode = data.tile;
  } else if (data.action == 'CHI') {
    playerData[transPlayerID(data.player)].chowTile(data.tileCHI);
    animationStage++;
    playerData[transPlayerID(data.player)].playTile(data.tile);
    lastCode = data.tile;
  } else if (data.action == 'GANG') {
    playerData[transPlayerID(data.player)].kongTile(lastCode);
  } else if (data.action == 'BUGANG') {
    playerData[transPlayerID(data.player)].tileCnt[lastCode] += 3;
    playerData[transPlayerID(data.player)].kongTile(lastCode);
  } else if (data.action == 'HU') {
    playerData[transPlayerID(data.player)].huTile(lastCode);
    animationStage++;
    for (var i = 0; i < 4; i++) {
      playerData[i].over(data.score[transPlayerID(i)]);
    }
    animationStage++;
    showHuInfo(data.fan);
  } else if (data.action == 'HUANG') {
    for (var i = 0; i < 4; i++) {
      playerData[i].over(0);
    }
  } else {
    if(data.action == 'WH') {
      showHuInfo(data.fan);
    }
    playerData[transPlayerID(data.player)].botError(data.action);
    animationStage++;
    for (var i = 0; i < 4; i++) {
      playerData[i].over(data.score[transPlayerID(i)]);
    }
  }
  lastPlayerID = transPlayerID(data.player);
  return tl;
}

function gameOverCallback(scores) {
  tl = new infoProvider.v2.TimelineMax();
  //console.log('Scores', scores);
  return tl;
}

function playerMove(data) {
  //console.log('Move', data);
  infoProvider.notifyPlayerMove(data);
}

//构造交互区域
function InteractArea() {
  confirmDialog = $('<div>').appendTo($('body'));
  confirmDialog.dialog({
    dialogClass: "no-close",
    autoOpen: false,
    width: 300,
    height: 300,
    show: {
      effect: 'fadeIn',
      duration: tlDuration * 1000
    },
    hide: {
      effect: 'fadeOut',
      duration: tlDuration * 1000
    }
  });
  //检查能否胡牌
  this.chkHu = function() {
    if (canHu[currPlayerID] >= 0) {
      confirmDialog.append($('<p>').append('和牌：' + canHu[currPlayerID] + '番'));
      var buttons = confirmDialog.dialog('option', 'buttons');
      buttons.push({
        text: (canHu[currPlayerID] < 8 ? '错和' : '和牌'),
        //disabled: canHu[currPlayerID] < 8,
        click: function() {
          $(this).dialog('close');
          playerMove('HU');
        }
      });
      confirmDialog.dialog('option', 'buttons', buttons);
    }
  }
  this.movePong = function() {
    for (var i = 0; i < playerData[0].handData.length; i++)
      if (playerData[0].handData[i].code == this.lastTile)
        playerData[0].handData[i].noPlay = true;
    this.movePlay(function(code) {
      playerMove('PENG ' + code);
    });
  }

  this.moveChow = function(t) {
    var tileCHI = this.lastTile;
    var need = chowTileList(tileCHI, t);
    for(var i = 0; i < 3; i++){
      if(i + t == 0) {
        continue;
      }
      var j = 0;
      while(j < playerData[0].handData.length && playerData[0].handData[j].code != need[i]) j++;
      if(j == playerData[0].handData.length) {
        console.error('ERROR: moveChow', need[j]);
      }
      playerData[0].handData[j].noPlay = true;
    }
    this.movePlay(function(code) {
      playerMove('CHI ' + need[1] + ' ' + code);
    });
  }
  this.moveKong = function() {
    if (lastPlayerID == 0) playerMove('GANG ' + this.lastTile);
    else playerMove('GANG');
  }

  //检查能否碰牌，若能且确认，直接playerMove，否则执行callback
  this.chkPong = function() {
    var buttons = confirmDialog.dialog('option', 'buttons');
    if(playerData[0].tileCnt[this.lastTile] >= 2) {
      var cInfo = $('<p>').append('碰牌：');
      for(var j = 0; j < 3; j++) {
        cInfo.append(tileDiv(this.lastTile).addClass('inlineDiv'));
      }
      confirmDialog.append(cInfo);
      buttons.push({
        text: '碰牌',
        click: function() {
          $(this).dialog('close');
          interactArea.movePong();
        }
      });
    }
    confirmDialog.dialog('option', 'buttons', buttons);
  }
  //检查能否扛牌
  this.chkKong = function() {
    var buttons = confirmDialog.dialog('option', 'buttons');
    if (lastPlayerID == 0) {
      if(playerData[0].pongCnt[this.lastTile] == 1) {
        var cInfo = $('<p>').append('补杠：');
        for(var j = 0; j < 4; j++) {
          cInfo.append(tileDiv(this.lastTile).addClass('inlineDiv'));
        }
        confirmDialog.append(cInfo);
        buttons.push({
          text: '补杠',
          click: function() {
            $(this).dialog('close');
            playerMove('BUGANG');
          }
        });
      }
    }
    if(playerData[0].tileCnt[this.lastTile] + (lastPlayerID != 0) >= 4) {
      var cInfo = $('<p>').append('杠牌：');
      for(var j = 0; j < 4; j++) {
        cInfo.append(tileDiv(this.lastTile).addClass('inlineDiv'));
      }
      confirmDialog.append(cInfo);
      buttons.push({
        text: '杠牌',
        click: function() {
          $(this).dialog('close');
          interactArea.moveKong();
        }
      });
    }
    confirmDialog.dialog('option', 'buttons', buttons);
  }
  //检查能否吃牌
  this.chkChow = function() {
    var buttons = confirmDialog.dialog('option', 'buttons');
    var code = this.lastTile;
    if (lastPlayerID == 1 &&
      (code.charAt(0) == 'W' || code.charAt(0) == 'B' || code.charAt(0) == 'T')) {
      for(var t = -2; t <= 0; t++) {
        var need = chowTileList(this.lastTile, t);
        var i;
        var cInfo = $('<p>').append('吃牌：');
        for(i = 0; i < 3; i++) {
          if(i + t != 0 && !playerData[0].tileCnt[need[i]]) {
            break;
          }
          cInfo.append(tileDiv(need[i]).addClass('inlineDiv'));
        }
        if(i == 3) {
          confirmDialog.append(cInfo);
          buttons.push({
            text: '吃牌',
            click: function(t) {
              return function() {
                confirmDialog.dialog('close');
                interactArea.moveChow(t);
              }
            }(t)
          });
        }
      }
    }
    confirmDialog.dialog('option', 'buttons', buttons);
  }

  //要求玩家打出一张牌,回调callback(code)
  this.movePlay = function(callback) {
    confirmDialog.empty();
    confirmDialog.append('<p>请打出一张牌</p>');
    confirmDialog.dialog('option', 'buttons', {});
    confirmDialog.dialog('open');
    var handData = playerData[0].handData;
    tl = new TimelineMax();
    for (var i = 0; i < handData.length; i++) {
      if (handData[i].noPlay) {
        continue;
      } else {
        tl.to(handData[i].div, tlDuration, {
          boxShadow: '0px 0px 20px #0066FF'
        }, 0);
      }
      (function() {
        var curr = i;
        handData[curr].div.on('click', function() {
          tl = new TimelineMax();
          for (var j = 0; j < handData.length; j++) {
            handData[j].div.off('click');
            handData[j].noPlay = false;
            tl.to(handData[j].div, tlDuration, {
              boxShadow: ''
            }, 0);
          }
          var swapData = handData[curr];
          handData[curr] = handData[0];
          handData[0] = swapData;
          confirmDialog.dialog('close');
          callback(swapData.code);
        });
      })();
    }
  }
}

function requestCallback(data) {
  //console.log('Request ', data);
  data = data.split(' ');
  //等待Display命令到达。
  setTimeout(function() {
    //等待动画完成
    var chkCnt = 0;
    var chkTl = setInterval(function() {
      if (chkCnt++ > 50) {
        console.error('Error: Request Timeout');
        clearInterval(chkTl);
      }
      if (!tl.isActive()) {
        clearInterval(chkTl);
        animationStage = 1;
        tl = new TimelineMax();
        confirmDialog.empty();
        if (data[0] <= 1) {
          playerMove('PASS');
        } else if (data[0] == 2) {
          interactArea.lastTile = data[1];
          confirmDialog.dialog('option', 'buttons', [{
            text: '打牌',
            click: function() {
              confirmDialog.dialog('close');
              interactArea.movePlay(function(code) {
                playerMove('PLAY ' + code);
              });
            }
          }]);
          interactArea.chkHu();
          interactArea.chkKong();
          if(confirmDialog.dialog('option', 'buttons').length > 1) {
            confirmDialog.dialog('open');
          } else {
            interactArea.movePlay(function(code) {
              playerMove('PLAY ' + code);
            });
          }
        } else if (data[0] == 3) {
          if(data[1] == currPlayerID || data[2] == 'DRAW' ||
            data[2] == 'BUGANG' || data[2] == 'BUHUA' || data[2] == 'GANG') {
            playerMove('PASS');
            return;
          }
          interactArea.lastTile = data[3];
          if(data[2] == 'CHI') {
            interactArea.lastTile = data[4];
          }
          confirmDialog.dialog('option', 'buttons', [{
            text: '过',
            click: function() {
              confirmDialog.dialog('close');
              playerMove('PASS');
            }
          }]);
          interactArea.chkHu();
          interactArea.chkPong();
          interactArea.chkKong();
          interactArea.chkChow();
          if (confirmDialog.dialog('option', 'buttons').length > 1) {
            confirmDialog.dialog('open');
          } else {
            playerMove('PASS');
          }
        } else {
          playerMove('PASS');
        }
      }
    }, 100);
  }, 500);
}

$(document).ready(function() {
  //禁用右键菜单和选择
  $(document).bind("contextmenu", function() {
    return false;
  });
  $(document).bind("selectstart", function() {
    return false;
  });

  currPlayerID = infoProvider.getPlayerID();
  //currPlayerID = 2;
  for (var i = 0; i < 4; i++) {
    playerData[i] = new PlayerData(i,
      infoProvider.getPlayerNames()[transPlayerID(i)]);
  }
  interactArea = new InteractArea();

  infoProvider.v2.setDisplayCallback(displayCallback);
  infoProvider.v2.setRequestCallback(requestCallback);
  infoProvider.v2.setGameOverCallback(gameOverCallback);
  infoProvider.v2.setMinSize(920, 720);

  infoProvider.v2.notifyInitComplete();
});
