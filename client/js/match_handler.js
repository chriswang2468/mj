var matchInfo=JSON.parse(sessionStorage.getItem("matchInfo"));
var game_data=JSON.parse(sessionStorage.getItem("game_data"));
const init_data=matchInfo.log[2].output.display.hand;
var play_speed=1000;
var change=false;
var intervalId;
var counter=1;
var timeOutId;
var color_code=["white","#75ffa3","#ffb8b9","#eb5e34"];
var voice_trigger=false;

$(document).ready(function() {
    // console.log(matchInfo.log);
    console.log("dasdasd");
    console.log(game_data);
    set_profile_pic();
    initial_draw(game_data[0]);
    
    timeOutId=setTimeout(() => {
        startInterval(1.6*play_speed);
    }, play_speed*(Math.max(init_data[0].length,init_data[1].length,init_data[2].length,init_data[3].length)));
}());

function initial_draw(data){
    var ini_list=data.init_data;
    // set player 0 
    for (let i = 0; i < ini_list[0].length; i++) {
        timeOutId=setTimeout(function(){
            const tile = ini_list[0][i];
            set_player_tile(0,tile,i,true,0);
        }, 
        play_speed*i);  
    }
    timeOutId=setTimeout(() => {
        rearrange_tiles(data.player_tile[0].current,0);
    }, play_speed*(ini_list[0].length+1));

    // set player 1
    for (let i = 0; i < ini_list[1].length; i++) {
        timeOutId=setTimeout(function(){
            const tile = ini_list[1][i];
            set_player_tile(1,tile,i,true,0);
        }, 
        play_speed*i);  
    }
    timeOutId=setTimeout(() => {
        rearrange_tiles(data.player_tile[1].current,1);
    }, play_speed*(ini_list[1].length+1));
    
    // set player 2
    for (let i = 0; i < ini_list[2].length; i++) {
        timeOutId=setTimeout(function(){
            const tile = ini_list[2][i];
            set_player_tile(2,tile,i,true,0);
        }, 
        play_speed*i);  
    }
    timeOutId=setTimeout(() => {
        rearrange_tiles(data.player_tile[2].current,2);
    }, play_speed*(ini_list[2].length+1));

    // set player 3
    for (let i = 0; i < ini_list[3].length; i++) {
        timeOutId=setTimeout(function(){
            const tile = ini_list[3][i];
            set_player_tile(3,tile,i,true,0);
        }, 
        play_speed*i);  
    }
    timeOutId=setTimeout(() => {
        rearrange_tiles(data.player_tile[3].current,3);
    }, play_speed*(ini_list[3].length+1));
}
// store in a function so we can call it again
function startInterval(_interval) {
    // Store the id of the interval so we can clear it later
    intervalId = setInterval(function() {
      game_play(game_data,counter);
      counter++;
      clearInterval(intervalId);
      if (change==false&&counter<game_data.length) {
          startInterval(game_data[counter].runTime*play_speed)
      }
    }, _interval);
  }
function game_play(all_data,step){
    if(step!=all_data.length){
        var data=all_data[step]
    }
    var action=data.action;
    var player=data.player;
    var player_tile=data.player_tile[player];
    var tile=data.tile;
    var numTiles=data.numTiles;
    
    update_step(step);
    setTimeout(() => {
        $("#myComment_"+player).append('<h5>'+data.comments+'</h5>');
        $("#myComment_"+player).append('<br>');
        var element = document.getElementById("myComment_"+player);
        element.scrollTop = element.scrollHeight;
        
    }, (data.runTime)*play_speed);
    if(action=="DRAW"){
        set_player_tile(player,tile,numTiles[player]-1,true,0);
        if(voice_trigger){
            responsiveVoice.speak(data.comments, "Chinese Taiwan Female", {rate: 1.0});
        }
    }else if(action=="PLAY"){
        var movedTileID=data.movedTileID;
        action_play(player,tile,player_tile,numTiles[player],movedTileID);
        if(voice_trigger){
            timeOutId=setTimeout(() => {
                responsiveVoice.speak(data.comments, "Chinese Taiwan Female", {rate: 1.0});
            }, 1*play_speed);
        }
    }else if(action=="BUHUA"){
        set_player_tile(player,tile,numTiles[player]-1,true,0);
        if(voice_trigger){
            responsiveVoice.speak(data.comments, "Chinese Taiwan Female", {rate: 1.0});
        }
        timeOutId=setTimeout(() => {
            rearrange_tiles(player_tile.current,player);
        }, 1.5*play_speed);
        
    }else if(action=="PENG"){
        console.log(action)
        const lastTile=data.lastTile;
        const movedTileID=data.movedTileID;
        const lastPlayer=data.lastPlayer;
        action_peng(player,player_tile,movedTileID,numTiles[player]-4,lastTile,tile,lastPlayer)
        if(voice_trigger){
            timeOutId=setTimeout(() => {
                responsiveVoice.speak(data.comments, "Chinese Taiwan Female", {rate: 1.0});
            }, 3*play_speed);
        }
    }else if(action=="CHI"){
        console.log(action)
        const tileCHI=data.tileCHI;
        const lastTile=data.lastTile;
        const movedTileID=data.movedTileID;
        const lastPlayer=data.lastPlayer;
        action_chi(player,player_tile,movedTileID,numTiles[player]-4,tileCHI,lastTile,tile,lastPlayer);
        if(voice_trigger){
            timeOutId=setTimeout(() => {
                responsiveVoice.speak(data.comments, "Chinese Taiwan Female", {rate: 1.0});
            }, 3*play_speed);
        }
    }else if(action=="GANG"){
        console.log(action)
        const movedTileID=data.movedTileID;
        const lastPlayer=data.lastPlayer;
        action_gang(player,player_tile,movedTileID,numTiles[player]-5,tile,lastPlayer);
        if(voice_trigger){
            timeOutId=setTimeout(() => {
                responsiveVoice.speak(data.comments, "Chinese Taiwan Female", {rate: 1.0});
            }, 3*play_speed);
        }
    }else if(action=="BUGANG"){
        timeOutId=setTimeout(() => {
            rearrange_tiles(player_tile.current,player);
        }, 1.5*play_speed);
        if(voice_trigger){
            responsiveVoice.speak(data.comments, "Chinese Taiwan Female", {rate: 1.0});
        }
        
    }
    else if(action=="HU"){
        console.log(action);
        const played_id=data.movedTileID.played;
        const move_id=data.movedTileID.current;
        const tileHu=data.tileHu
        if(voice_trigger){
            timeOutId=setTimeout(() => {
                responsiveVoice.speak(data.comments, "Chinese Taiwan Female", {rate: 0.8});
            }, 3*play_speed);
        }
        
        setTimeout(() => {
            move_previous_tile(player,played_id,0,numTiles[player]/2,tileHu);
        }, 1*play_speed);
        setTimeout(() => {
            d3.selectAll("rect[id='temp_tile']").remove();
            d3.selectAll("image[id='temp_tile_i']").remove();
        }, 3.5*play_speed);
        setTimeout(() => {
            rearrange_tiles(player_tile.current,player);
            d3.selectAll("rect[id='rect_" +move_id+ "']").style("fill",color_code[3]);
        }, 4*play_speed);
        
        
    }
    
}
function set_player_tile(player,tile,i,init,color){
    if(player==0){
        set_player0(tile,i,init,color);
    }else if(player==1){
        set_player1(tile,i,init,color)
    }else if(player==2){
        set_player2(tile,i,init,color)
    }else if(player==3){
        set_player3(tile,i,init,color)
    }

}

function set_profile_pic(){
    var svgDoc = d3.select("#animation");
    svgDoc.append("svg:image")
    .attr("id","profile_pic_0")
    .attr('width', 40)
    .attr('height', 40)
    .attr('x', 80)
    .attr('y',800)
    .attr("xlink:href",function(d){return "/img/profile_pic/0.png"}).
    attr("transform", "rotate(270,550,400)");

    svgDoc.append("svg:image")
    .attr("id","profile_pic_1")
    .attr('width', 40)
    .attr('height', 40)
    .attr('x', 910)
    .attr('y', 112)
    .attr("xlink:href",function(d){return "/img/profile_pic/1.png"});

    svgDoc.append("svg:image")
    .attr("id","profile_pic_2")
    .attr('width', 40)
    .attr('height', 40)
    .attr('x', 260)
    .attr('y',775)
    .attr("transform", "rotate(90,550,400)")
    .attr("xlink:href",function(d){return "/img/profile_pic/2.png"});
    
    svgDoc.append("svg:image")
    .attr("id","profile_pic_3")
    .attr('width', 40)
    .attr('height', 40)
    .attr('x', 195)
    .attr('y',820)
    .attr("xlink:href",function(d){return "/img/profile_pic/3.png"});
}

function set_player0(tile,i,init,color){
    d3.selectAll("rect[id='rect_" +(parseInt(100)+i)+ "']").remove();
    d3.selectAll("image[id='image_" +(parseInt(100)+i)+ "']").remove();
    
    var svgDoc = d3.select("#animation");
    var rect=svgDoc.append("svg:rect").
    attr("y", 880-55*i).
    attr("id","rect_"+(parseInt(100)+i)).
    attr("height", 50).
    attr("rx",10).
    style("stroke", "black").
    style("stroke-width", "2px").
    attr("width", 63).
    style("fill",color_code[color]);
    if(init==true){
        rect.attr("x", 1100).
        transition().
        delay(0.5*play_speed).
        duration(play_speed).
        attr('x',1000);
        svgDoc.append("svg:image")
        .attr("id","image_"+(parseInt(100)+i))
        .attr('x', 25+55*i)
        .attr('y', 958.9)
        .attr('width', 40)
        .attr('height', 40)
        .attr("xlink:href",function(d){return "/Mahjong-GB/images/"+tile+".svg"}).
        attr("transform", "rotate(270,550,400)").
        transition().
        delay(0.5*play_speed).
        duration(play_speed).
        attr('y',860);
    }else{
        rect.attr('x',1000);
        svgDoc.append("svg:image")
        .attr("id","image_"+(parseInt(100)+i))
        .attr('x', 25+55*i)
        .attr('y',860)
        .attr('width', 40)
        .attr('height', 40)
        .attr("xlink:href",function(d){return "/Mahjong-GB/images/"+tile+".svg"}).
        attr("transform", "rotate(270,550,400)");
    }  
}
function set_player1(tile,i,init,color){
    d3.selectAll("rect[id='rect_" +(parseInt(200)+i)+ "']").remove();
    d3.selectAll("image[id='image_" +(parseInt(200)+i)+ "']").remove();
    var svgDoc = d3.select("#animation");
    var rec=svgDoc.append("svg:rect").
    attr("x", 960-55*i).
    attr("height", 63).
    attr("rx",10).
    style("stroke", "black").
    style("stroke-width", "2px").
    attr("width", 50).
    attr("id","rect_"+(parseInt(200)+i)).
    style("fill",color_code[color]);
    if(init==true){
        rec.attr("y", 0).
        transition().
        delay(0.5*play_speed).
        duration(play_speed).
        attr('y',35);
        svgDoc.append("svg:image")
        .attr("id","image_"+(parseInt(200)+i))
        .attr('x', 965-55*i)
        .attr('y', 8.9)
        .attr('width', 40)
        .attr('height', 40)
        .attr("xlink:href",function(d){return "/Mahjong-GB/images/"+tile+".svg"}).
        transition().
        delay(0.5*play_speed).
        duration(play_speed).
        attr('y',43.9);
    }else{
        rec.attr('y',35);
        svgDoc.append("svg:image")
        .attr("id","image_"+(parseInt(200)+i))
        .attr('x', 965-55*i)
        .attr('y',43.9)
        .attr('width', 40)
        .attr('height', 40)
        .attr("xlink:href",function(d){return "/Mahjong-GB/images/"+tile+".svg"});
    }
    
}
function set_player2(tile,i,init,color){
    d3.selectAll("rect[id='rect_" +(parseInt(300)+i)+ "']").remove();
    d3.selectAll("image[id='image_" +(parseInt(300)+i)+ "']").remove();
    var svgDoc = d3.select("#animation");
    var rect=svgDoc.append("svg:rect").
    attr("y", 50+55*i).
    attr("height", 50).
    attr("rx",10).
    style("stroke", "black").
    style("stroke-width", "2px").
    attr("width", 63).
    attr("id","rect_"+(parseInt(300)+i)).
    style("fill",color_code[color]);
    if(init==true){
        rect.attr("x", -62).
        transition().
        delay(0.5*play_speed).
        duration(play_speed).
        attr('x',50);
        svgDoc.append("svg:image")
        .attr("id","image_"+(parseInt(300)+i))
        .attr('x', 205+55*i)
        .attr('y', 958.9)
        .attr('width', 40)
        .attr('height', 40)
        .attr("xlink:href",function(d){return "/Mahjong-GB/images/"+tile+".svg"}).
        attr("transform", "rotate(90,550,400)").
        transition().
        delay(0.5*play_speed).
        duration(play_speed).
        attr('y',850);
    }else{
        rect.attr('x',50);
        svgDoc.append("svg:image")
        .attr("id","image_"+(parseInt(300)+i))
        .attr('x', 205+55*i)
        .attr('y',850)
        .attr('width', 40)
        .attr('height', 40)
        .attr("xlink:href",function(d){return "/Mahjong-GB/images/"+tile+".svg"}).
        attr("transform", "rotate(90,550,400)");
    }
}
function set_player3(tile,i,init,color){
    d3.selectAll("rect[id='rect_" +(parseInt(400)+i)+ "']").remove();
    d3.selectAll("image[id='image_" +(parseInt(400)+i)+ "']").remove();
    var svgDoc = d3.select("#animation");
    var rec=svgDoc.append("svg:rect").
    attr("x", 130+55*i).
    attr("height", 63).
    attr("rx",10).
    style("stroke", "black").
    style("stroke-width", "2px").
    attr("width", 50).
    attr("id","rect_"+(parseInt(400)+i)).
    style("fill",color_code[color]);
    if(init==true){
        rec.attr("y", 950).
        transition().
        delay(0.5*play_speed).
        duration(play_speed).
        attr('y',875);
        svgDoc.append("svg:image")
        .attr("id","image_"+(parseInt(400)+i))
        .attr('x', 135+55*i)
        .attr('y', 958.9)
        .attr('width', 40)
        .attr('height', 40)
        .attr("xlink:href",function(d){return "/Mahjong-GB/images/"+tile+".svg"}).
        transition().
        delay(0.5*play_speed).
        duration(play_speed).
        attr('y',883.9);
    }else{
        rec.attr('y',875);
        svgDoc.append("svg:image")
        .attr("id","image_"+(parseInt(400)+i))
        .attr('x', 135+55*i)
        .attr('y',883.9)
        .attr('width', 40)
        .attr('height', 40)
        .attr("xlink:href",function(d){return "/Mahjong-GB/images/"+tile+".svg"});
    }
    
}

function rearrange_tiles(palyers_tiles,playernum){
    var num_tile=0;
    var color=0;
    for (let i = 0; i < palyers_tiles.length; i++) {
        const tile_list = palyers_tiles[i];
        for (let j = 0; j < tile_list.length; j++) {
            const tile = tile_list[j];
            if(i==0){
                color=1
            }else if(i==1){
                color=0
            }else{
                color=2
            }
            if(playernum==0){
                set_player_tile(0,tile,num_tile+j,false,color);
            }else if(playernum==1){
                set_player_tile(1,tile,num_tile+j,false,color);
            }else if(playernum==2){
                set_player_tile(2,tile,num_tile+j,false,color);
            }else{
                set_player_tile(3,tile,num_tile+j,false,color);
            }
            
        }
        num_tile+=tile_list.length;
    }  
}

function action_play(n,tile,player_tile,tile_num,id){
    var rect = d3.selectAll("rect[id='rect_" + id + "']");
    var image = d3.selectAll("image[id='image_" + id + "']");
    remove_tile(n,rect,image,player_tile.played.length-1,tile);
    timeOutId=setTimeout(() => {
        rearrange_tiles(player_tile.current,n); 
        const temp=(n+1)*100+tile_num;
        d3.selectAll("rect[id='rect_" +temp + "']").remove();
        d3.selectAll("image[id='image_" +temp + "']").remove();
    }, 2*play_speed);
}

function action_chi(n,player_tile,movedTileID,numTiles,tileCHI,lastTile,next_tile,lastPlayer){
    var played_id=movedTileID.played;
    
    var check=check_tile(tileCHI,lastTile);
    for (let i = 0; i < movedTileID.current.length; i++) {
        var id=movedTileID.current[i]
        var rect = d3.selectAll("rect[id='rect_" + id + "']");
        var image = d3.selectAll("image[id='image_" + id + "']"); 
        move_tile_up(i,n,rect,image,numTiles,check);
        
    }
    timeOutId=setTimeout(() => {
                move_previous_tile(n,played_id,check,numTiles,lastTile)
            }, 1.5*play_speed);
        timeOutId=setTimeout(() => {
                    // player,tile,player_tile,numTiles[player],movedTileID
        action_play(n,next_tile,player_tile,numTiles+4,movedTileID.play_id);  
        timeOutId=setTimeout(() => {
            d3.selectAll("rect[id='temp_tile']").remove();
            d3.selectAll("image[id='temp_tile_i']").remove();
        }, 2*play_speed);
        timeOutId=setTimeout(() => {
            rearrange_tiles(player_tile.current,n); 
        }, 2.9*play_speed);
    }, 3*play_speed);  
}
function action_peng(n,player_tile,movedTileID,numTiles,lastTile,next_tile,lastPlayer){
    var played_id=movedTileID.played;
    for (let i = 0; i < movedTileID.current.length; i++) {
        var id=movedTileID.current[i]
        var rect = d3.selectAll("rect[id='rect_" + id + "']");
        var image = d3.selectAll("image[id='image_" + id + "']"); 
        move_tile_up(i,n,rect,image,numTiles,0);
        
    }
    timeOutId=setTimeout(() => {
                move_previous_tile(n,played_id,0,numTiles,lastTile)
            }, 1.5*play_speed);
        timeOutId=setTimeout(() => {
                    // player,tile,player_tile,numTiles[player],movedTileID
        action_play(n,next_tile,player_tile,numTiles+4,movedTileID.play_id);  
        timeOutId=setTimeout(() => {
            d3.selectAll("rect[id='temp_tile']").remove();
            d3.selectAll("image[id='temp_tile_i']").remove();
        }, 2*play_speed);
        timeOutId=setTimeout(() => {
            rearrange_tiles(player_tile.current,n); 
        }, 2.9*play_speed);
    }, 3*play_speed);  
}

function action_gang(n,player_tile,movedTileID,numTiles,lastTile,lastPlayer){
    var played_id=movedTileID.played;
    for (let i = 0; i < movedTileID.current.length; i++) {
        var id=movedTileID.current[i]
        var rect = d3.selectAll("rect[id='rect_" + id + "']");
        var image = d3.selectAll("image[id='image_" + id + "']"); 
        move_tile_up(i,n,rect,image,numTiles,0);
        
    }
    timeOutId=setTimeout(() => {
        move_previous_tile(n,played_id,0,numTiles+1,lastTile)
    }, 1.5*play_speed);
    timeOutId=setTimeout(() => {
        d3.selectAll("rect[id='temp_tile']").remove();
        d3.selectAll("image[id='temp_tile_i']").remove();
    }, 3.5*play_speed);
    timeOutId=setTimeout(() => {
        rearrange_tiles(player_tile.current,n); 
    }, 3.6*play_speed);
      
}

function move_tile_up(i,n,rect,image,num_tile,check){
    if(check==1){
        i++;
    }else if(check==-1){
        if(i==1){
            i++;
        }
    }
    if(n==0){
        rect.transition().
        delay(0.5*play_speed).
        duration(play_speed).
        attr("id","temp_tile").
        attr("y", 880-55*(num_tile+i)).
        attr('x',937);
        image.transition().
        delay(0.5*play_speed).
        duration(play_speed).
        attr("id","temp_tile_i").
        attr('x', 25+55*(num_tile+i)).
        attr('y',797);
    }else if(n==1){
        rect.transition().
        delay(0.5*play_speed).
        duration(play_speed).
        attr("id","temp_tile").
        attr("y",98).
        attr('x',940-55*(num_tile+i));
        image.transition().
        delay(0.5*play_speed).
        duration(play_speed).
        attr("id","temp_tile_i").
        attr('x', 945-55*(num_tile+i)).
        attr('y',106.9);
    }else if(n==2){
        rect.transition().
        delay(0.5*play_speed).
        duration(play_speed).
        attr("id","temp_tile").
        attr("y", 50+55*(num_tile+i)).
        attr('x',113);
        image.transition().
        delay(0.5*play_speed).
        duration(play_speed).
        attr("id","temp_tile_i").
        attr('x', 205+55*(num_tile+i)).
        attr('y',787);
    }else if(n==3){
        rect.transition().
        delay(0.5*play_speed).
        duration(play_speed).
        attr("id","temp_tile").
        attr("y",812).
        attr('x',130+55*(num_tile+i));
        image.transition().
        delay(0.5*play_speed).
        duration(play_speed).
        attr("id","temp_tile_i").
        attr('x', 135+55*(num_tile+i)).
        attr('y',820.9);
    }
}

function move_to_0(rect,image,num_tile,last_tile,i){
    rect.transition().
    delay(play_speed).
    duration(0.5*play_speed).
    attr("id","temp_tile").
    attr("height", 50).
    attr("width", 63).
    attr("y", 880-55*(num_tile+i)).
    attr('x',937);
    timeOutId=setTimeout(() => {
        image.remove();
    }, play_speed);
    timeOutId=setTimeout(() => {
        var svgDoc = d3.select("#animation");
        svgDoc.append("svg:image").
        attr("id","temp_tile_i").
        attr('x', 25+55*(num_tile+i)).
        attr('y',797)
        .attr('width', 40)
        .attr('height', 40)
        .attr("xlink:href",function(d){return "/Mahjong-GB/images/"+last_tile+".svg"}).
        attr("transform", "rotate(270,550,400)");
    }, 1.5*play_speed);
}
function move_to_1(rect,image,num_tile,last_tile,i){
    rect.transition().
        delay(play_speed).
        duration(0.5*play_speed).
        attr("id","temp_tile").
        attr("height", 63).
        attr("width", 50).
        attr("y", 98).
        attr('x',940-55*(num_tile+i));
        timeOutId=setTimeout(() => {
            image.remove();
        }, play_speed);
        timeOutId=setTimeout(() => {
            var svgDoc = d3.select("#animation");
            svgDoc.append("svg:image").
            attr("id","temp_tile_i").
            attr('x', 945-55*(num_tile+i)).
            attr('y',106.9)
            .attr('width', 40)
            .attr('height', 40)
            .attr("xlink:href",function(d){return "/Mahjong-GB/images/"+last_tile+".svg"});
        }, 1.5*play_speed); 
}function move_to_2(rect,image,num_tile,last_tile,i){
    rect.transition().
        delay(play_speed).
        duration(0.5*play_speed).
        attr("id","temp_tile").
        attr("height", 50).
        attr("width", 63).
        attr("y", 50+55*(num_tile+i)).
        attr('x',113);
        timeOutId=setTimeout(() => {
            image.remove();
        }, play_speed);
        timeOutId=setTimeout(() => {
            var svgDoc = d3.select("#animation");
            svgDoc.append("svg:image").
            attr("id","temp_tile_i").
            attr('x', 205+55*(num_tile+i)).
            attr('y',787)
            .attr('width', 40)
            .attr('height', 40)
            .attr("xlink:href",function(d){return "/Mahjong-GB/images/"+last_tile+".svg"}).
            attr("transform", "rotate(90,550,400)");
        }, 1.5*play_speed);    
}function move_to_3(rect,image,num_tile,last_tile,i){
    rect.transition().
        delay(play_speed).
        duration(0.5*play_speed).
        attr("id","temp_tile").
        attr("height", 63).
        attr("width", 50).
        attr("y", 812).
        attr('x',130+55*(num_tile+i));
        timeOutId=setTimeout(() => {
            image.remove();
        }, play_speed);
        timeOutId=setTimeout(() => {
            var svgDoc = d3.select("#animation");
            svgDoc.append("svg:image").
            attr("id","temp_tile_i").
            attr('x', 135+55*(num_tile+i)).
            attr('y',820.9)
            .attr('width', 40)
            .attr('height', 40)
            .attr("xlink:href",function(d){return "/Mahjong-GB/images/"+last_tile+".svg"});
        }, 1.5*play_speed); 
}
function move_previous_tile(player,played_id,check,num_tile,last_tile){
    var rect = d3.selectAll("rect[id='played_rect_" + played_id + "']");
    var image = d3.selectAll("image[id='played_image_" + played_id + "']");
    var i;
    if(check==1){
        i=0;
    }else if(check==-1){
        i=1;
    }else{
        i=2;
    }
    if(player==0){
        move_to_0(rect,image,num_tile,last_tile,i);
    }else if(player==1){
        move_to_1(rect,image,num_tile,last_tile,i);
    }else if(player==2){
        move_to_2(rect,image,num_tile,last_tile,i);
    }else if(player==3){
        move_to_3(rect,image,num_tile,last_tile,i);
    }
}

function remove_tile(player,rect,image,num,tile){
    const new_rect=rect;
    const new_image=image;
    // const num=player1_played_tiles.length;
    const row=Math.floor(num/8);
    const colum=num-(row*8);
    if(player==0){
        new_rect.transition().
        delay(1.5*play_speed).
        duration(play_speed).
        attr('x',790+70*row).
        attr("y", 760-55*colum).
        attr("id","played_rect_"+(parseInt(100)+num));
        new_image.transition().
        delay(1.5*play_speed).
        duration(play_speed).
        attr("id","played_image_"+(parseInt(100)+num)).
        attr('x', 145+55*colum).
        attr('y', 648.9+70*row);
    }else if(player==1){
        new_rect.transition().
        delay(1.5*play_speed).
        duration(play_speed).
        attr('x',775-55*colum).
        attr("y", 265-70*row).
        attr("id","played_rect_"+(parseInt(200)+num));
        new_image.transition().
        delay(1.5*play_speed).
        duration(play_speed).
        attr("id","played_image_"+(parseInt(200)+num)).
        attr('x', 780-55*colum).
        attr('y', 273.9-70*row);
    }else if(player==2){
        new_rect.transition().
        delay(1.5*play_speed).
        duration(play_speed).
        attr('x',260-70*row).
        attr("y", 195+55*colum).
        attr("id","played_rect_"+(parseInt(300)+num));
        new_image.transition().
        delay(1.5*play_speed).
        duration(play_speed).
        attr("id","played_image_"+(parseInt(300)+num)).
        attr('x', 350+55*colum).
        attr('y', 638.9+70*row);
    }else if(player==3){
        new_rect.transition().
        delay(1.5*play_speed).
        duration(play_speed).
        attr('x',290+55*colum).
        attr("y", 665+70*row).
        attr("id","played_rect_"+(parseInt(400)+num));
        new_image.transition().
        delay(1.5*play_speed).
        duration(play_speed).
        attr("id","played_image_"+(parseInt(400)+num)).
        attr('x', 295+55*colum).
        attr('y', 673.9+70*row);
    }
}
function set_time(i,log_data){
    
    var total_time=0;
    
    for (let j = 4; j <=i; j++) {
        if(j%2==0&&i!=4){
            var action=log_data[j-2].output.display.action;
            if(action=="DRAW"){
                total_time+=1*play_speed;
            }else if(action=="PLAY"){
                total_time+=2.5*play_speed;
            }else if(action=="BUHUA"){
                total_time+=2*play_speed;
            }else{
                total_time+=4.5*play_speed;
            }
        } 
    }
    return total_time;
    
}
function check_tile(tileCHI,lastTile){
    if (tileCHI==lastTile) {
        return -1;
    }else if(tileCHI>lastTile){
        return 1;
    }else if(tileCHI<lastTile){
        return 0;
    }
}
function num_tiles(tile_list){
    var num=0
    for (let i = 0; i < 2; i++) {
        num+=tile_list[i].length;
    }
    return num-3;
}
function update_step(step){
    var slider = document.getElementById("myRange");
    var output = document.getElementById("demo");
    slider.value=step;
    output.innerHTML = step;
    slider.oninput = function() {
    output.innerHTML = this.value;
    }
}
// function add_tiles(playerlist,tile){
    // }
function updateSpeed(value){
    if(value>0){
        play_speed=play_speed/(value+1);
    }else if(value<0){
        play_speed=play_speed*(value+1)
    }else if(value==0){
        play_speed=1000;
    }
    $("#speed_bar").hide();
}
function dragSteps(value){
    change=true;
    play_speed=1000;
    clearInterval(intervalId);
    clearTimeout(timeOutId);
    d3.selectAll("rect").remove();
    d3.selectAll("image").remove();
    $("#pausebutton").hide();
    $("#playbutton").show();
    set_profile_pic();
    set_current_status();
    // if(value==0){
    //     ini_all();
    // }else{

    // }
}

function set_current_status(){
    counter=$("#myRange").val();
    rearrange_tiles(game_data[counter].player_tile[0].current,0);
    rearrange_tiles(game_data[counter].player_tile[1].current,1);
    rearrange_tiles(game_data[counter].player_tile[2].current,2);
    rearrange_tiles(game_data[counter].player_tile[3].current,3);
    set_current_played_tile();
    // game_data[counter]
    // rearrange_tiles(game_data[counter].player_tile[3].current,3);
}
function set_current_played_tile(){
    var data=game_data[counter].player_tile;
    for (let i = 0; i < data.length; i++) {
        const played_list = data[i].played;
        for (let j = 0; j < played_list.length; j++) {
            const tile = played_list[j];
            var svgDoc = d3.select("#animation");
            var rec=svgDoc.append("svg:rect");
            var image=svgDoc.append("svg:image");
            const num=played_list.length;
            const row=Math.floor(j/8);
            const colum=j-(row*8);
            if(i==0){
                rec.attr('x',790+70*row).
                attr("y", 760-55*colum).
                attr("id","played_rect_"+(parseInt(100)+j)).
                attr("height", 50).
                attr("rx",10).
                style("stroke", "black").
                style("stroke-width", "2px").
                attr("width", 63).
                style("fill","white");
                image.attr("id","played_image_"+(parseInt(100)+j)).
                attr('x', 145+55*colum).
                attr('y', 648.9+70*row).
                attr('width', 40)
                .attr('height', 40)
                .attr("xlink:href",function(d){return "/Mahjong-GB/images/"+tile+".svg"}).
                attr("transform", "rotate(270,550,400)");
            }else if(i==1){
                rec.attr('x',775-55*colum).
                attr("y", 265-70*row).
                attr("id","played_rect_"+(parseInt(200)+j)).
                attr("height", 63).
                attr("rx",10).
                style("stroke", "black").
                style("stroke-width", "2px").
                attr("width", 50).
                style("fill","white");
                image.attr("id","played_image_"+(parseInt(200)+j)).
                attr('x', 780-55*colum).
                attr('y', 273.9-70*row).
                attr('width', 40)
                .attr('height', 40)
                .attr("xlink:href",function(d){return "/Mahjong-GB/images/"+tile+".svg"});
            }else if(i==2){
                rec.attr('x',260-70*row).
                attr("y", 195+55*colum).
                attr("id","played_rect_"+(parseInt(300)+j)).
                attr("height", 50).
                attr("rx",10).
                style("stroke", "black").
                style("stroke-width", "2px").
                attr("width", 63).
                style("fill","white");
                image.attr("id","played_image_"+(parseInt(300)+j)).
                attr('x', 350+55*colum).
                attr('y', 638.9+70*row)
                .attr('width', 40)
                .attr('height', 40)
                .attr("xlink:href",function(d){return "/Mahjong-GB/images/"+tile+".svg"}).
                attr("transform", "rotate(90,550,400)");
            }else if(i==3){
                rec.attr('x',290+55*colum).
                attr("y", 665+70*row).
                attr("id","played_rect_"+(parseInt(400)+j)).
                attr("height", 63).
                attr("rx",10).
                style("stroke", "black").
                style("stroke-width", "2px").
                attr("width", 50).
                style("fill","white");
                image.attr("id","played_image_"+(parseInt(400)+j)).
                attr('x', 295+55*colum).
                attr('y', 673.9+70*row)
                .attr('width', 40)
                .attr('height', 40)
                .attr("xlink:href",function(d){return "/Mahjong-GB/images/"+tile+".svg"});
            }
        }
        
    }
}