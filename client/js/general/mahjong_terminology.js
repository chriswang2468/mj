var number=["一","二","三","四","五","六","七","八","九"];
var character=["筒","条","万"];
var feng=["东","南","西","北"];
var jian=["中","发","白"];
var hua=["春","夏","秋","冬","梅","兰","竹","菊"];
var excellent=["非常好。","手气很好。","非常漂亮。","有如神助。"];
var good=["手气还是不错。","还是不错。","还是可以的。","可圈可点。"];
var poor=["很一般。","不太理想。","差点意思。","不尽如人意。"]
var hu_type=[{
    id:0,
    text:"大三元",
    tile_list:[["J1","J1","J1","J2","J2","J2","J3","J3","J3"]],
    fan:88,
    require_tile:9
    },
    {
    id:1,
    text:"大四喜",
    tile_list:[["F1","F1","F1","F2","F2","F2","F3","F3","F3","F4","F4","F4"]],
    fan:88,
    require_tile:12
    },
    {
    id:2,
    text:"九莲宝灯",
    tile_list:[["B1","B1","B1","B2","B3","B4","B5","B6","B7","B8","B9","B9","B9"],
               ["T1","T1","T1","T2","T3","T4","T5","T6","T7","T8","T9","T9","T9"],
               ["W1","W1","W1","W2","W3","W4","W5","W6","W7","W8","W9","W9","W9"]],
    fan:88,
    require_tile:13
    },
    {
    id:3,
    text:"连七对",
    tile_list:[["B1","B1","B2","B2","B3","B3","B4","B4","B5","B5","B6","B6","B7","B7"],
               ["B2","B2","B3","B3","B4","B4","B5","B5","B6","B6","B7","B7","B8","B8"],
               ["B3","B3","B4","B4","B5","B5","B6","B6","B7","B7","B8","B8","B9","B9"],
               ["T1","T1","T2","T2","T3","T3","T4","T4","T5","T5","T6","T6","T7","T7"],
               ["T2","T2","T3","T3","T4","T4","T5","T5","T6","T6","T7","T7","T8","T8"],
               ["T3","T3","T4","T4","T5","T5","T6","T6","T7","T7","T8","T8","T9","T9"],
               ["W1","W1","W2","W2","W3","W3","W4","W4","W5","W5","W6","W6","W7","W7"],
               ["W2","W2","W3","W3","W4","W4","W5","W5","W6","W6","W7","W7","W8","W8"],
               ["W3","W3","W4","W4","W5","W5","W6","W6","W7","W7","W8","W8","W9","W9"]],
    fan:88,
    require_tile:14
    },
    {
    id:4,
    text:"绿一色",
    tile_list:[["T2","T3","T4","T6","T8","J2"]],
    fan:88,
    require_tile:14
    },
    {
    id:5,
    text:"十三幺",
    tile_list:[["B1","B9","T1","T9","W1","W9","F1","F2","F3","F4","J1","J2","J3"]],
    fan:88,
    require_tile:14
    },
    {
    id:6,
    text:"清幺九",
    tile_list:[],
    fan:64,
    require_tile:14
    },
    {
    id:7,
    text:"小三元",
    tile_list:[["J1","J1","J1","J2","J2","J2","J3","J3"],
                ["J1","J1","J1","J3","J3","J3","J2","J2"],
                ["J2","J2","J2","J3","J3","J3","J1","J1"]],
    fan:64,
    require_tile:8
    },
    {
    id:8,
    text:"小四喜",
    tile_list:[["F1","F1","F1","F2","F2","F2","F3","F3","F3","F4","F4"],
                ["F1","F1","F1","F2","F2","F2","F4","F4","F4","F3","F3"],
                ["F1","F1","F1","F3","F3","F3","F4","F4","F4","F2","F2"],
                ["F2","F2","F2","F3","F3","F3","F4","F4","F4","F1","F1"]],
    fan:64,
    require_tile:11
    },
    {
    id:9,
    text:"字一色",
    tile_list:[["F1","F2","F3","F4","J1","J2","J3"]
               ["F1","F1","F1","F2","F2","F2","F3","F3","F3","F4","F4","F4","J1","J1"],
               ["F1","F1","F1","F2","F2","F2","F3","F3","F3","F4","F4","F4","J2","J2"],
               ["F1","F1","F1","F2","F2","F2","F3","F3","F3","F4","F4","F4","J3","J3"],
               ["F2","F2","F2","F3","F3","F3","F4","F4","F4","J1","J1","J1","J2","J2"],
               ["F2","F2","F2","F3","F3","F3","F4","F4","F4","J1","J1","J1","J3","J3"],
               ["F2","F2","F2","F3","F3","F3","F4","F4","F4","J1","J1","J1","F1","F1"],
               ["F3","F3","F3","F4","F4","F4","J1","J1","J1","J2","J2","J2","J3","J3"],
               ["F3","F3","F3","F4","F4","F4","J1","J1","J1","J2","J2","J2","F1","F1"],
               ["F3","F3","F3","F4","F4","F4","J1","J1","J1","J2","J2","J2","F2","F2"],
               ["F4","F4","F4","J1","J1","J1","J2","J2","J2","J3","J3","J3","F1","F1"],
               ["F4","F4","F4","J1","J1","J1","J2","J2","J2","J3","J3","J3","F2","F2"],
               ["F4","F4","F4","J1","J1","J1","J2","J2","J2","J3","J3","J3","F3","F3"],
               ["J1","J1","J1","J2","J2","J2","J3","J3","J3","F1","F1","F1","F2","F2"],
               ["J1","J1","J1","J2","J2","J2","J3","J3","J3","F1","F1","F1","F3","F3"],
               ["J1","J1","J1","J2","J2","J2","J3","J3","J3","F1","F1","F1","F4","F4"]
               ["J2","J2","J2","J3","J3","J3","F1","F1","F1","F2","F2","F2","J1","J1"],
               ["J2","J2","J2","J3","J3","J3","F1","F1","F1","F2","F2","F2","F3","F3"],
               ["J2","J2","J2","J3","J3","J3","F1","F1","F1","F2","F2","F2","F4","F4"],
               ["J3","J3","J3","F1","F1","F1","F2","F2","F2","J1","J1","J1","J2","J2"],
               ["J3","J3","J3","F1","F1","F1","F2","F2","F2","J1","J1","J1","F3","F3"],
               ["J3","J3","J3","F1","F1","F1","F2","F2","F2","J1","J1","J1","F4","F4"],
               ["F1","F1","F1","F2","F2","F2","J1","J1","J1","J2","J2","J2","J3","J3"],
               ["F1","F1","F1","F2","F2","F2","J1","J1","J1","J2","J2","J2","F3","F3"],
               ["F1","F1","F1","F2","F2","F2","J1","J1","J1","J2","J2","J2","F4","F4"],
               ["F2","F2","F2","J1","J1","J1","J2","J2","J2","J3","J3","J3","F1","F1"],
               ["F2","F2","F2","J1","J1","J1","J2","J2","J2","J3","J3","J3","F3","F3"],
               ["F2","F2","F2","J1","J1","J1","J2","J2","J2","J3","J3","J3","F4","F4"],
               ["J1","J1","J1","J2","J2","J2","J3","J3","J3","F3","F3","F3","F1","F1"],
               ["J1","J1","J1","J2","J2","J2","J3","J3","J3","F3","F3","F3","F2","F2"],
               ["J1","J1","J1","J2","J2","J2","J3","J3","J3","F3","F3","F3","F4","F4"]],
    fan:64,
    require_tile:14
    },
    {
    id:10,
    text:"一色双龙会",
    tile_list:[["B1","B2","B3","B1","B2","B3","B7","B8","B9","B7","B8","B9","B5","B5"],
               ["T1","T2","T3","T1","T2","T3","T7","T8","T9","T7","T8","T9","T5","T5"],
               ["W1","W2","W3","W1","W2","W3","W7","W8","W9","W7","W8","W9","W5","W5"],],
    fan:64,
    require_tile:14
    },
    {
    id:11,
    text:"一色四同顺",
    tile_list:[[0,1,2,0,1,2,0,1,2,0,1,2]],
    fan:48,
    require_tile:12
    },
    {
    id:12,
    text:"一色四节高",
    tile_list:[[0,0,0,1,1,1,2,2,2,3,3,3]],
    fan:48,
    require_tile:12
    },
    {
    id:13,
    text:"一色四步高",
    tile_list:[[0,1,2,1,2,3,2,3,4,3,4,5]],
    fan:32,
    require_tile:12
    },
    {
    id:14,
    text:"混幺九",
    tile_list:[[1,1,1,9,9,9,1,1,1,9,9,9,"F","F","J","J"]],
    fan:32,
    require_tile:14
    },
    {
    id:15,
    text:"七对",
    tile_list:[],
    fan:24,
    require_tile:14
    },
    {
    id:16,
    text:"七星不靠或全不靠",
    tile_list:[],
    fan:24,
    require_tile:14
    },
    {
    id:17,
    text:"全双刻",
    tile_list:[],
    fan:24,
    require_tile:14
    },
    {
    id:18,
    text:"清一色",
    tile_list:[],
    fan:24,
    require_tile:14
    },
    {
    id:19,
    text:"一色三同顺或一色三节高",
    tile_list:[],
    fan:24,
    require_tile:9
    },
    {
    id:20,
    text:"全大",
    tile_list:[],
    fan:24,
    require_tile:14
    },{
    id:21,
    text:"全中",
    tile_list:[],
    fan:24,
    require_tile:14
    },
    {
    id:22,
    text:"全小",
    tile_list:[],
    fan:24,
    require_tile:14
    },
    {
    id:23,
    text:"清龙",
    tile_list:[],
    fan:16,
    require_tile:9
    },
    {
    id:24,
    text:"三色双龙会",
    tile_list:[],
    fan:16,
    require_tile:14
    },
    {
    id:25,
    text:"一色三步高",
    tile_list:[],
    fan:16,
    require_tile:9
    },
    {
    id:26,
    text:"全带五",
    tile_list:[],
    fan:16,
    require_tile:14
    },
    {
    id:27,
    text:"三同刻",
    tile_list:[],
    fan:16,
    require_tile:9
    },
    {
    id:28,
    text:"三暗刻",
    tile_list:[],
    fan:16,
    require_tile:9
    },
    {
    id:29,
    text:"组合龙",
    tile_list:[],
    fan:12,
    require_tile:9
    },
    {
    id:30,
    text:"大于五",
    tile_list:[],
    fan:12,
    require_tile:14
    },
    {
    id:31,
    text:"小于五",
    tile_list:[],
    fan:12,
    require_tile:14
    },
    {
    id:32,
    text:"三风刻",
    tile_list:[],
    fan:12,
    require_tile:9
    },
    {
    id:33,
    text:"花龙",
    tile_list:[],
    fan:8,
    require_tile:9
    },
    {
    id:34,
    text:"三色三同顺",
    tile_list:[],
    fan:8,
    require_tile:9
    },
    {
    id:35,
    text:"三色三节高",
    tile_list:[],
    fan:8,
    require_tile:9
    },
    {
    id:36,
    text:"混一色",
    tile_list:[],
    fan:6,
    require_tile:9
    },
    {
    id:37,
    text:"三色三步高",
    tile_list:[],
    fan:6,
    require_tile:9
    },

]
function calculate_probability(tile_list,i,remaining_tile,tileCnt,actual_list){
    var hu_format=get_hu_type()[i];;
    // var require_tile=hu_format.require_tile;
    var temp_prob=1;
    if(i==0){
        temp_prob=prob_tile(3,counter(tile_list,"J1"),remaining_tile.J1,tileCnt);
        tileCnt-=(3-counter(tile_list,"J1"));
        temp_prob*=prob_tile(3,counter(tile_list,"J2"),remaining_tile.J2,tileCnt);
        tileCnt-=(3-counter(tile_list,"J2"));
        temp_prob*=prob_tile(3,counter(tile_list,"J3"),remaining_tile.J3,tileCnt);
        console.log(temp_prob);
        
    }else if(i==1){
        temp_prob=prob_tile(3,counter(tile_list,"F1"),remaining_tile.F1,tileCnt);
        tileCnt-=(3-counter(tile_list,"F1"));
        temp_prob*=prob_tile(3,counter(tile_list,"F2"),remaining_tile.F2,tileCnt);
        tileCnt-=(3-counter(tile_list,"F2"));
        temp_prob*=prob_tile(3,counter(tile_list,"F3"),remaining_tile.F3,tileCnt);
        tileCnt-=(3-counter(tile_list,"F3"));
        temp_prob*=prob_tile(3,counter(tile_list,"F4"),remaining_tile.F4,tileCnt);
        console.log(temp_prob);
    }else if(i==222){
        if(tile_list==[]){
            temp_prob=0;
        }else{
            var tile_type=tile_list[0][0];
            temp_prob=prob_tile(3,counter(tile_list,tile_type+"1"),remaining_tile[tile_type+"1"],tileCnt);
            tileCnt-=(3-counter(tile_list,tile_type+"1"));
            temp_prob*=prob_tile(1,counter(tile_list,tile_type+"2"),remaining_tile[tile_type+"2"],tileCnt);
            tileCnt-=(1-counter(tile_list,tile_type+"2"));
            temp_prob*=prob_tile(1,counter(tile_list,tile_type+"3"),remaining_tile[tile_type+"3"],tileCnt);
            tileCnt-=(1-counter(tile_list,tile_type+"3"));
            temp_prob*=prob_tile(1,counter(tile_list,tile_type+"4"),remaining_tile[tile_type+"4"],tileCnt);
            tileCnt-=(1-counter(tile_list,tile_type+"4"));
            temp_prob*=prob_tile(1,counter(tile_list,tile_type+"5"),remaining_tile[tile_type+"5"],tileCnt);
            tileCnt-=(1-counter(tile_list,tile_type+"5"));
            temp_prob*=prob_tile(1,counter(tile_list,tile_type+"6"),remaining_tile[tile_type+"6"],tileCnt);
            tileCnt-=(1-counter(tile_list,tile_type+"6"));
            temp_prob*=prob_tile(1,counter(tile_list,tile_type+"7"),remaining_tile[tile_type+"7"],tileCnt);
            tileCnt-=(1-counter(tile_list,tile_type+"7"));
            temp_prob*=prob_tile(1,counter(tile_list,tile_type+"8"),remaining_tile[tile_type+"8"],tileCnt);
            tileCnt-=(1-counter(tile_list,tile_type+"8"));
            temp_prob*=prob_tile(3,counter(tile_list,tile_type+"9"),remaining_tile[tile_type+"9"],tileCnt);
            console.log(temp_prob);
        }
        
    }else if(i==333){
        if(tile_list==[]){
            temp_prob=0;
        }else{
            var tile_type=tile_list[0][0];
            var temp_count=1;
            var temp_prob_list=[];
            var temp_tileCnt=tileCnt;
            while(temp_count<8){
                temp_prob*=prob_tile(2,counter(tile_list,tile_type+temp_count),remaining_tile[tile_type+temp_count],tileCnt);
                tileCnt-=(2-counter(tile_list,tile_type+temp_count));
                temp_count++;
            }
            tileCnt=temp_tileCnt;
            temp_prob_list.push(temp_prob);
            temp_prob=1;
            temp_count=2;
            while(temp_count<9){
                temp_prob*=prob_tile(2,counter(tile_list,tile_type+temp_count),remaining_tile[tile_type+temp_count],tileCnt);
                tileCnt-=(2-counter(tile_list,tile_type+temp_count));
                temp_count++;
            }
            tileCnt=temp_tileCnt;
            temp_prob_list.push(temp_prob);
            temp_prob=1;
            temp_count=3;
            while(temp_count<10){
                temp_prob*=prob_tile(2,counter(tile_list,tile_type+temp_count),remaining_tile[tile_type+temp_count],tileCnt);
                tileCnt-=(2-counter(tile_list,tile_type+temp_count));
                temp_count++;
            }
            temp_prob_list.push(temp_prob);
            temp_prob=Math.max(...temp_prob_list);
            
        }
        console.log(temp_prob);
    }else if(i==4){
        var temp_prob_list=[];
        var temp_tileCnt=tileCnt;
        var green_tile=[["T2","T3","T4","T6","T8"],
                        ["T2","T3","T4","T6","J2"],
                        ["T2","T3","T4","T8","J2"],
                        ["T2","T3","T6","T8","J2"],
                        ["T2","T4","T6","T8","J2"],
                        ["T3","T4","T6","T8","J2"]];
        green_tile.forEach(green_list => {
            var check_last_tile=1;
            green_list.forEach(tile => {
                if(check_last_tile!=5){
                    temp_prob*=prob_tile(3,counter(tile_list,tile),remaining_tile[tile],tileCnt);
                    tileCnt-=(3-counter(tile_list,tile));
                }else{
                    temp_prob*=prob_tile(2,counter(tile_list,tile),remaining_tile[tile],tileCnt);
                }
                check_last_tile++;
            });
            temp_prob_list.push(temp_prob);
            tileCnt=temp_tileCnt;
            temp_prob=1;
        });
        tileCnt=temp_tileCnt;
        temp_prob=1;
        var temp_i=0;
        while (temp_i<3) {
            if(temp_i==0){
                temp_prob*=prob_tile(3,counter(tile_list,"T2"),remaining_tile["T2"],tileCnt);
                tileCnt-=(3-counter(tile_list,"T2"));
                temp_prob*=prob_tile(1,counter(tile_list,"T3"),remaining_tile["T3"],tileCnt);
                tileCnt-=(1-counter(tile_list,"T3"));
                temp_prob*=prob_tile(1,counter(tile_list,"T4"),remaining_tile["T4"],tileCnt);
                tileCnt-=(1-counter(tile_list,"T4"));
            }else if(temp_i==1){
                temp_prob*=prob_tile(1,counter(tile_list,"T2"),remaining_tile["T2"],tileCnt);
                tileCnt-=(1-counter(tile_list,"T2"));
                temp_prob*=prob_tile(3,counter(tile_list,"T3"),remaining_tile["T3"],tileCnt);
                tileCnt-=(3-counter(tile_list,"T3"));
                temp_prob*=prob_tile(1,counter(tile_list,"T4"),remaining_tile["T4"],tileCnt);
                tileCnt-=(1-counter(tile_list,"T4"));
            }else if(temp_i==2){
                temp_prob*=prob_tile(1,counter(tile_list,"T2"),remaining_tile["T2"],tileCnt);
                tileCnt-=(1-counter(tile_list,"T2"));
                temp_prob*=prob_tile(1,counter(tile_list,"T3"),remaining_tile["T3"],tileCnt);
                tileCnt-=(1-counter(tile_list,"T3"));
                temp_prob*=prob_tile(3,counter(tile_list,"T4"),remaining_tile["T4"],tileCnt);
                tileCnt-=(3-counter(tile_list,"T4"));
            }
            temp_prob*=prob_tile(3,counter(tile_list,"T6"),remaining_tile["T6"],tileCnt);
            tileCnt-=(3-counter(tile_list,"T6"));
            temp_prob*=prob_tile(3,counter(tile_list,"T8"),remaining_tile["T8"],tileCnt);
            tileCnt-=(3-counter(tile_list,"T8"));
            temp_prob*=prob_tile(3,counter(tile_list,"J2"),remaining_tile["J2"],tileCnt);
            tileCnt-=(3-counter(tile_list,"J2"));
            temp_prob_list.push(temp_prob);
            tileCnt=temp_tileCnt;
            temp_prob=1;
            temp_i++;
        }
        tileCnt=temp_tileCnt;
        temp_prob=1;
        temp_i=0;
        while (temp_i<3) {
            temp_prob*=prob_tile(2,counter(tile_list,"T2"),remaining_tile["T2"],tileCnt);
            tileCnt-=(2-counter(tile_list,"T2"));
            temp_prob*=prob_tile(2,counter(tile_list,"T3"),remaining_tile["T3"],tileCnt);
            tileCnt-=(2-counter(tile_list,"T3"));
            temp_prob*=prob_tile(2,counter(tile_list,"T4"),remaining_tile["T4"],tileCnt);
            tileCnt-=(2-counter(tile_list,"T4"));
            if(temp_i==0){
                temp_prob*=prob_tile(3,counter(tile_list,"T6"),remaining_tile["T6"],tileCnt);
                tileCnt-=(3-counter(tile_list,"T6"));
                temp_prob*=prob_tile(3,counter(tile_list,"T8"),remaining_tile["T8"],tileCnt);
                tileCnt-=(3-counter(tile_list,"T8"));
                temp_prob*=prob_tile(2,counter(tile_list,"J2"),remaining_tile["J2"],tileCnt);
                tileCnt-=(2-counter(tile_list,"J2"));
            }else if(temp_i==1){
                temp_prob*=prob_tile(3,counter(tile_list,"T6"),remaining_tile["T6"],tileCnt);
                tileCnt-=(3-counter(tile_list,"T6"));
                temp_prob*=prob_tile(2,counter(tile_list,"T8"),remaining_tile["T8"],tileCnt);
                tileCnt-=(2-counter(tile_list,"T8"));
                temp_prob*=prob_tile(3,counter(tile_list,"J2"),remaining_tile["J2"],tileCnt);
                tileCnt-=(3-counter(tile_list,"J2"));
            }else if(temp_i==2){
                temp_prob*=prob_tile(2,counter(tile_list,"T6"),remaining_tile["T6"],tileCnt);
                tileCnt-=(2-counter(tile_list,"T6"));
                temp_prob*=prob_tile(3,counter(tile_list,"T8"),remaining_tile["T8"],tileCnt);
                tileCnt-=(3-counter(tile_list,"T8"));
                temp_prob*=prob_tile(3,counter(tile_list,"J2"),remaining_tile["J2"],tileCnt);
                tileCnt-=(3-counter(tile_list,"J2"));
            }
            temp_prob_list.push(temp_prob);
            tileCnt=temp_tileCnt;
            temp_prob=1;
            temp_i++;
        }
        temp_prob=Math.max(...temp_prob_list);
        console.log(temp_prob);
    }else if(i==5){
        var temp_i=0;
        var temp_prob_list=[];
        var temp_tileCnt=tileCnt;
        var thirteen=["B1","B9","T1","T9","W1","W9","F1","F2","F3","F4","J1","J2","J3"];
        thirteen.forEach(tile => {
            thirteen.forEach(tile2 => {
                if(tile==tile2){
                    temp_prob*=prob_tile(2,counter(tile_list,tile2),remaining_tile[tile2],tileCnt);
                    tileCnt-=(2-counter(tile_list,tile2));
                }else{
                    temp_prob*=prob_tile(1,counter(tile_list,tile2),remaining_tile[tile2],tileCnt);
                    tileCnt-=(1-counter(tile_list,tile2));
                }
            });
            temp_prob_list.push(temp_prob);
            temp_prob=1;
            tileCnt=temp_tileCnt;
        });
        temp_prob=Math.max(...temp_prob_list);
        console.log(temp_prob);
    }else if(i==6){
        var temp_prob_list=[];
        var temp_tileCnt=tileCnt;
        var one_9=[["B1","B9","T1","T9","W1"],
                    ["B1","B9","T1","T9","W9"],
                    ["B1","B9","T1","W1","W9"],
                    ["B1","B9","T9","W1","W9"],
                    ["B1","T1","T9","W1","W9"],
                    ["B9","T1","T9","W1","W9"]];
        one_9.forEach(one_9_list => {
            var check_last_tile=1;
            one_9_list.forEach(tile => {
                if(check_last_tile!=5){
                    temp_prob*=prob_tile(3,counter(tile_list,tile),remaining_tile[tile],tileCnt);
                    tileCnt-=(3-counter(tile_list,tile));
                }else{
                    temp_prob*=prob_tile(2,counter(tile_list,tile),remaining_tile[tile],tileCnt);
                }
                check_last_tile++;
            });
            temp_prob_list.push(temp_prob);
            tileCnt=temp_tileCnt;
            temp_prob=1;
        });
        temp_prob=Math.max(...temp_prob_list);
        console.log(temp_prob);
    }else if(i==7){
        var temp_prob_list=[];
        var temp_tileCnt=tileCnt;
        var s_three_yuan=["J1","J2","J3"];
        s_three_yuan.forEach(tile => {
            s_three_yuan.forEach(tile2 => {
                if(tile==tile2){
                    temp_prob*=prob_tile(2,counter(tile_list,tile2),remaining_tile[tile2],tileCnt);
                    tileCnt-=(2-counter(tile_list,tile2));
                }else{
                    temp_prob*=prob_tile(3,counter(tile_list,tile2),remaining_tile[tile2],tileCnt);
                    tileCnt-=(3-counter(tile_list,tile2));
                }
            });
            temp_prob_list.push(temp_prob);
            tileCnt=temp_tileCnt;
            temp_prob=1;
        });
        temp_prob=Math.max(...temp_prob_list);
        console.log(temp_prob);
    }else if(i==8){
        var temp_prob_list=[];
        var temp_tileCnt=tileCnt;
        var s_four_xi=["F1","F2","F3","F4"];
        s_four_xi.forEach(tile => {
            s_four_xi.forEach(tile2 => {
                if(tile==tile2){
                    temp_prob*=prob_tile(2,counter(tile_list,tile2),remaining_tile[tile2],tileCnt);
                    tileCnt-=(2-counter(tile_list,tile2));
                }else{
                    temp_prob*=prob_tile(3,counter(tile_list,tile2),remaining_tile[tile2],tileCnt);
                    tileCnt-=(3-counter(tile_list,tile2));
                }
            });
            temp_prob_list.push(temp_prob);
            tileCnt=temp_tileCnt;
            temp_prob=1;
        });
        temp_prob=Math.max(...temp_prob_list);
        console.log(temp_prob);
    }else if(i==9){
        var temp_prob_list=[];
        var temp_tileCnt=tileCnt;
        var straight_character=k_combinations(["F1","F2","F3","F4","J1","J2","J3"], 4);
        straight_character.forEach(straight_list => {
            var check_last_tile=1;
            var temp_form=["F1","F2","F3","F4","J1","J2","J3"];
            straight_list.forEach(tile => {
                if(check_last_tile!=4){
                    temp_prob*=prob_tile(3,counter(tile_list,tile),remaining_tile[tile],tileCnt);
                    tileCnt-=(3-counter(tile_list,tile));
                    temp_form.splice(temp_form.indexOf(tile), 1);
                }else{
                    temp_form.forEach(tile1 => {
                        var tile_prob=temp_prob*prob_tile(2,counter(tile_list,tile1),remaining_tile[tile],tileCnt);
                        temp_prob_list.push(tile_prob);
                    });
                }
                check_last_tile++;
            });
            tileCnt=temp_tileCnt;
            temp_prob=1;
        });
        temp_prob=Math.max(...temp_prob_list);
        console.log(temp_prob);
    }else if(i==10){
        if(tile_list==[]){
            temp_prob=0;
        }else{
            var tile_type=tile_list[0][0];
            temp_prob*=prob_tile(2,counter(tile_list,tile_type+"1"),remaining_tile[tile_type+"1"],tileCnt);
            tileCnt-=(2-counter(tile_list,tile_type+"1"));
            temp_prob*=prob_tile(2,counter(tile_list,tile_type+"2"),remaining_tile[tile_type+"2"],tileCnt);
            tileCnt-=(2-counter(tile_list,tile_type+"2"));
            temp_prob*=prob_tile(2,counter(tile_list,tile_type+"3"),remaining_tile[tile_type+"3"],tileCnt);
            tileCnt-=(2-counter(tile_list,tile_type+"3"));
            temp_prob*=prob_tile(2,counter(tile_list,tile_type+"5"),remaining_tile[tile_type+"5"],tileCnt);
            tileCnt-=(2-counter(tile_list,tile_type+"5"));
            temp_prob*=prob_tile(2,counter(tile_list,tile_type+"7"),remaining_tile[tile_type+"7"],tileCnt);
            tileCnt-=(2-counter(tile_list,tile_type+"7"));
            temp_prob*=prob_tile(2,counter(tile_list,tile_type+"8"),remaining_tile[tile_type+"8"],tileCnt);
            tileCnt-=(2-counter(tile_list,tile_type+"8"));
            temp_prob*=prob_tile(2,counter(tile_list,tile_type+"9"),remaining_tile[tile_type+"9"],tileCnt);
            console.log(temp_prob);
        }
    }else if(i==11){
        var start_i=1;
        var tile_type=tile_list[0][0];
        var temp_prob_list=[];
        var temp_tileCnt=tileCnt;
        while (start_i<=7) {
            temp_prob*=prob_tile(4,counter(tile_list,tile_type+start_i),remaining_tile[tile_type+start_i],tileCnt);
            tileCnt-=(4-counter(tile_list,tile_type+start_i));
            temp_prob*=prob_tile(4,counter(tile_list,tile_type+(start_i+1)),remaining_tile[tile_type+(start_i+1)],tileCnt);
            tileCnt-=(4-counter(tile_list,tile_type+(start_i+1)));
            temp_prob*=prob_tile(4,counter(tile_list,tile_type+(start_i+2)),remaining_tile[tile_type+(start_i+2)],tileCnt);
            temp_prob_list.push(temp_prob);
            tileCnt=temp_tileCnt;
            temp_prob=1;
            start_i++;
        }
        temp_prob=Math.max(...temp_prob_list);
        console.log(temp_prob);
    }else if(i==12){
        var start_i=1;
        var tile_type=tile_list[0][0];
        var temp_prob_list=[];
        var temp_tileCnt=tileCnt;
        while (start_i<=6) {
            temp_prob*=prob_tile(3,counter(tile_list,tile_type+start_i),remaining_tile[tile_type+start_i],tileCnt);
            tileCnt-=(3-counter(tile_list,tile_type+start_i));
            temp_prob*=prob_tile(3,counter(tile_list,tile_type+(start_i+1)),remaining_tile[tile_type+(start_i+1)],tileCnt);
            tileCnt-=(3-counter(tile_list,tile_type+(start_i+1)));
            temp_prob*=prob_tile(3,counter(tile_list,tile_type+(start_i+2)),remaining_tile[tile_type+(start_i+2)],tileCnt);
            tileCnt-=(3-counter(tile_list,tile_type+(start_i+2)));
            temp_prob*=prob_tile(3,counter(tile_list,tile_type+(start_i+3)),remaining_tile[tile_type+(start_i+3)],tileCnt);
            temp_prob_list.push(temp_prob);
            tileCnt=temp_tileCnt;
            temp_prob=1;
            start_i++;
        }
        temp_prob=Math.max(...temp_prob_list);
        console.log(temp_prob);
    }else if(i==13){
        var start_i=1;
        var tile_type=tile_list[0][0];
        var temp_prob_list=[];
        var temp_tileCnt=tileCnt;
        while (start_i<=4) {
            temp_prob*=prob_tile(1,counter(tile_list,tile_type+start_i),remaining_tile[tile_type+start_i],tileCnt);
            tileCnt-=(1-counter(tile_list,tile_type+start_i));
            temp_prob*=prob_tile(2,counter(tile_list,tile_type+(start_i+1)),remaining_tile[tile_type+(start_i+1)],tileCnt);
            tileCnt-=(2-counter(tile_list,tile_type+(start_i+1)));
            temp_prob*=prob_tile(3,counter(tile_list,tile_type+(start_i+2)),remaining_tile[tile_type+(start_i+2)],tileCnt);
            tileCnt-=(3-counter(tile_list,tile_type+(start_i+2)));
            temp_prob*=prob_tile(3,counter(tile_list,tile_type+(start_i+3)),remaining_tile[tile_type+(start_i+3)],tileCnt);
            tileCnt-=(3-counter(tile_list,tile_type+(start_i+3)));
            temp_prob*=prob_tile(2,counter(tile_list,tile_type+(start_i+4)),remaining_tile[tile_type+(start_i+4)],tileCnt);
            tileCnt-=(2-counter(tile_list,tile_type+(start_i+4)));
            temp_prob*=prob_tile(1,counter(tile_list,tile_type+(start_i+5)),remaining_tile[tile_type+(start_i+5)],tileCnt);
            temp_prob_list.push(temp_prob);
            tileCnt=temp_tileCnt;
            temp_prob=1;
            start_i++;
        }
        temp_prob=Math.max(...temp_prob_list);
        console.log(temp_prob);
    }else if(i==14){
        // tile_list=["B1","B1","B1","B9","B9","B9","T1","T1","T1","T9","T9","T9","W1"]
        var temp_prob_list=[];
        var temp_tileCnt=tileCnt;
        var form_list=k_combinations(["B1","B9","T1","T9","W1","W9","F1","F2","F3","F4","J1","J2","J3"], 4);
        form_list.forEach(straight_list => {
            var check_last_tile=1;
            var temp_form=["B1","B9","T1","T9","W1","W9","F1","F2","F3","F4","J1","J2","J3"];
            straight_list.forEach(tile => {
                if(check_last_tile!=4){
                    temp_prob*=prob_tile(3,counter(tile_list,tile),remaining_tile[tile],tileCnt);
                    tileCnt-=(3-counter(tile_list,tile));
                    temp_form.splice(temp_form.indexOf(tile), 1);
                }else{
                    temp_form.forEach(tile1 => {
                        var tile_prob=temp_prob*prob_tile(2,counter(tile_list,tile1),remaining_tile[tile],tileCnt);
                        temp_prob_list.push(tile_prob);
                    });
                }
                check_last_tile++;
            });
            tileCnt=temp_tileCnt;
            temp_prob=1;
        });
        temp_prob=Math.max(...temp_prob_list);
        console.log(temp_prob);
    }else if(i==15){
        var temp_prob_list=[];
        var temp_tileCnt=tileCnt;
        var form_list=k_combinations(actual_list, 7);
        form_list.forEach(alist => {
            alist.forEach(tile => {
                temp_prob*=prob_tile(2,counter(tile_list,tile),remaining_tile[tile],tileCnt);
                tileCnt-=(2-counter(tile_list,tile));
            });
            temp_prob_list.push(temp_prob);
            tileCnt=temp_tileCnt;
            temp_prob=1;
        });
        temp_prob=Math.max(...temp_prob_list);
        console.log(temp_prob);
    }else if(i==16){
        var temp_prob_list=[];
        var temp_tileCnt=tileCnt;
        var temp_xu_tile=[["B1","B4","B7","T2","T5","T8","W3","W6","W9"],
                      ["B1","B4","B7","W2","W5","W8","T3","T6","T9"],
                      ["T1","T4","T7","B2","B5","B8","W3","W6","W9"],
                      ["T1","T4","T7","W2","W5","W8","B3","B6","B9"],
                      ["W1","W4","W7","B2","B5","B8","T3","T6","T9"],
                      ["W1","W4","W7","T2","T5","T8","B3","B6","B9"]];

        temp_xu_tile.forEach(atile_list => {
            var sub_tile_list=k_combinations(atile_list, 7);
            sub_tile_list.forEach(btile_list => {
                btile_list.forEach(tile => {
                    temp_prob*=prob_tile(1,counter(tile_list,tile),remaining_tile[tile],tileCnt);
                    tileCnt-=(1-counter(tile_list,tile));
                });
                temp_prob*=prob_tile(1,counter(tile_list,"F1"),remaining_tile.F1,tileCnt);
                tileCnt-=(1-counter(tile_list,"F1"));
                temp_prob*=prob_tile(1,counter(tile_list,"F2"),remaining_tile.F1,tileCnt);
                tileCnt-=(1-counter(tile_list,"F2"));
                temp_prob*=prob_tile(1,counter(tile_list,"F3"),remaining_tile.F1,tileCnt);
                tileCnt-=(1-counter(tile_list,"F3"));
                temp_prob*=prob_tile(1,counter(tile_list,"F4"),remaining_tile.F1,tileCnt);
                tileCnt-=(1-counter(tile_list,"F4"));
                temp_prob*=prob_tile(1,counter(tile_list,"J1"),remaining_tile.F1,tileCnt);
                tileCnt-=(1-counter(tile_list,"J1"));
                temp_prob*=prob_tile(1,counter(tile_list,"J2"),remaining_tile.F1,tileCnt);
                tileCnt-=(1-counter(tile_list,"J2"));
                temp_prob*=prob_tile(1,counter(tile_list,"J3"),remaining_tile.F1,tileCnt);
                temp_prob_list.push(temp_prob);
                tileCnt=temp_tileCnt;
                temp_prob=1;
            });
        });  
        temp_prob=Math.max(...temp_prob_list);
        console.log(temp_prob);
    }else if(i==17){
        var temp_prob_list=[];
        var temp_tileCnt=tileCnt;
        var form_list=k_combinations(["B2","B4","B6","B8","T2","T4","T6","T8","W2","W4","W6","W8"], 4);
        form_list.forEach(straight_list => {
            var check_last_tile=1;
            var temp_form=["B2","B4","B6","B8","T2","T4","T6","T8","W2","W4","W6","W8"];
            straight_list.forEach(tile => {
                if(check_last_tile!=4){
                    temp_prob*=prob_tile(3,counter(tile_list,tile),remaining_tile[tile],tileCnt);
                    tileCnt-=(3-counter(tile_list,tile));
                    temp_form.splice(temp_form.indexOf(tile), 1);
                }else{
                    temp_form.forEach(tile1 => {
                        var tile_prob=temp_prob*prob_tile(2,counter(tile_list,tile1),remaining_tile[tile],tileCnt);
                        temp_prob_list.push(tile_prob);
                    });
                }
                check_last_tile++;
            });
            tileCnt=temp_tileCnt;
            temp_prob=1;
        });
        
    }else if(i==18){
        
    }else if(i==19){
        
    }else if(i==20){
        
    }else if(i==21){
        
    }else if(i==22){
        
    }else if(i==23){
        
    }else if(i==24){
        
    }else if(i==25){
        
    }else if(i==26){
        
    }else if(i==27){
        
    }else if(i==28){
        
    }else if(i==29){
        
    }else if(i==30){
        
    }else if(i==31){
        
    }else if(i==32){
        
    }else if(i==33){
        
    }else if(i==34){
        
    }else if(i==35){
        
    }else if(i==36){
        
    }else if(i==37){
        
    }else if(i==38){
        
    }

}
function init_overall_comment(tripple,straight,qbk,double,wait){
    var temp_rank=3*(tripple+straight+0.5*qbk)+2*double+wait;
    if((temp_rank)>5){
        return excellent[Math.floor(Math.random()*excellent.length)];
    }else if(temp_rank<=5&&temp_rank>3){
        return good[Math.floor(Math.random()*good.length)];
    }else{
        return poor[Math.floor(Math.random()*poor.length)];
    }
}
function get_hu_type(){
    return hu_type;
}
function to_character(num){
    if(num=="B"){
        return character[0];
    }else if(num=="T"){
        return character[1];
    }else if(num=="W"){
        return character[2];
    }else if(num=="F"){
        return "风";
    }else if(num=="J"){
        return "箭";
    }else{
        return number[num-1];
    }
    
}

function prob_tile(need,current,remain,total){
    var temp_count=0;
    var temp_prob=1;
    // console.log(need);
    // console.log(current);
    // console.log(remain);
    // console.log(total);
    while (need-current>temp_count) {
        if(remain==0){
           return 0;
        }
        temp_prob*=remain/total;
        remain--;
        total--;
        temp_count++;
    }
    return temp_prob;
}

function counter(array,x){
    
    var count = 0;
    for(var i = 0; i < array.length; ++i){
        if(array[i] == x)
            count++;
    }
    return count;
}
function k_combinations(set, k) {
	var i, j, combs, head, tailcombs;
	
	// There is no way to take e.g. sets of 5 elements from
	// a set of 4.
	if (k > set.length || k <= 0) {
		return [];
	}
	
	// K-sized set has only one K-sized subset.
	if (k == set.length) {
		return [set];
	}
	
	// There is N 1-sized subsets in a N-sized set.
	if (k == 1) {
		combs = [];
		for (i = 0; i < set.length; i++) {
			combs.push([set[i]]);
		}
		return combs;
	}
	
	// Assert {1 < k < set.length}
	
	// Algorithm description:
	// To get k-combinations of a set, we want to join each element
	// with all (k-1)-combinations of the other elements. The set of
	// these k-sized sets would be the desired result. However, as we
	// represent sets with lists, we need to take duplicates into
	// account. To avoid producing duplicates and also unnecessary
	// computing, we use the following approach: each element i
	// divides the list into three: the preceding elements, the
	// current element i, and the subsequent elements. For the first
	// element, the list of preceding elements is empty. For element i,
	// we compute the (k-1)-computations of the subsequent elements,
	// join each with the element i, and store the joined to the set of
	// computed k-combinations. We do not need to take the preceding
	// elements into account, because they have already been the i:th
	// element so they are already computed and stored. When the length
	// of the subsequent list drops below (k-1), we cannot find any
	// (k-1)-combs, hence the upper limit for the iteration:
	combs = [];
	for (i = 0; i < set.length - k + 1; i++) {
		// head is a list that includes only our current element.
		head = set.slice(i, i + 1);
		// We take smaller combinations from the subsequent elements
		tailcombs = k_combinations(set.slice(i + 1), k - 1);
		// For each (k-1)-combination we join it with the current
		// and store it to the set of k-combinations.
		for (j = 0; j < tailcombs.length; j++) {
			combs.push(head.concat(tailcombs[j]));
		}
	}
	return combs;
}

