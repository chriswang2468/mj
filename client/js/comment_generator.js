var tile_type=["B","T","W"];
var character_tile=["F","J"];
// var Combinatorics = require('js-combinatorics');
// function initial_tiles_checker(player_tile){
//     console.log(player_tile)
//     var tile_list=[];
//     player_tile.forEach(temp => {
//         var tile_info={actual:[],
//             unique:[],
//             potential:[]
//            };
//         var temp_unique=[];
//         tile_info.actual=temp.current[1].slice(0);
//         tile_info.unique=remove_duplicate(temp.current[1].slice(0));
//         tile_list.push(tile_info);
//     });
//     var comment_list=[];
//     tile_list.forEach(temp => {
//         var actual=temp.actual;
//         var unique=temp.unique;
//         var potential_list=[]
//         var pair=[];
//         var comment={
//             potential: [],
//             remaining:[],
//             target:[],
//             text:""
//         };
//         for (let i = 0; i < unique.length; i++) {
//             var temp_list=[];
//             var tile = unique[i];
//             var count = count_tile(tile,actual);
//             // console.log(tile);
//             // console.log(tile[0]+(parseInt(tile[1])+1));
//             // console.log(tile[0]+(parseInt(tile[1])+2));
//             // console.log(count);
//             if(tile[0]!="F" && tile[0]!="J" && actual.includes(tile) && unique.includes(tile[0]+(parseInt(tile[1])+1))&&unique.includes(tile[0]+(parseInt(tile[1])+2))&&count<=2){
//                 temp_list.push(tile);
//                 actual.splice(actual.indexOf(tile), 1);
//                 temp_list.push(tile[0]+(parseInt(tile[1])+1));
//                 actual.splice(actual.indexOf(tile[0]+(parseInt(tile[1])+1)), 1);
//                 temp_list.push(tile[0]+(parseInt(tile[1])+2));
//                 actual.splice(actual.indexOf(tile[0]+(parseInt(tile[1])+2)), 1);
//                 // i+=2;
//                 pair.push(temp_list);
//             }else if((!character_tile.includes(tile[0])&& actual.includes(tile) && tile[1]=="1"&& actual.includes(tile) && unique.includes(tile[0]+"4")&&unique.includes(tile[0]+"7"))||(!character_tile.includes(tile[0])&&tile[1]=="2"&&unique.includes(tile[0]+"5")&&unique.includes(tile[0]+"8"))||(!character_tile.includes(tile[0])&&tile[1]=="3"&&unique.includes(tile[0]+"6")&&unique.includes(tile[0]+"9"))){
//                 temp_list.push(tile);
//                 actual.splice(actual.indexOf(tile), 1);
//                 if(tile[1]=="1"){
//                     temp_list.push(tile[0]+"4");
//                     actual.splice(actual.indexOf(tile[0]+"4"), 1);
//                     temp_list.push(tile[0]+"7");
//                     actual.splice(actual.indexOf(tile[0]+"7"), 1);
//                 }else if(tile[1]=="2"){
//                     temp_list.push(tile[0]+"5");
//                     actual.splice(actual.indexOf(tile[0]+"5"), 1);
//                     temp_list.push(tile[0]+"8");
//                     actual.splice(actual.indexOf(tile[0]+"8"), 1);
//                 }else if(tile[1]=="3"){
//                     temp_list.push(tile[0]+"6");
//                     actual.splice(actual.indexOf(tile[0]+"6"), 1);
//                     temp_list.push(tile[0]+"9");
//                     actual.splice(actual.indexOf(tile[0]+"9"), 1);
//                 }
//                 // i+=2;
//                 pair.push(temp_list);
//             }else if(count>=2){
//                 // console.log(i);
//                 var j=0;
//                 while(j<count){
//                     temp_list.push(tile);
//                     actual.splice(actual.indexOf(tile), 1);
//                     j++;
//                 }
//                 pair.push(temp_list);
//             }else if(tile[0]!="F" && tile[0]!="J" && actual.includes(tile) && actual.includes(tile[0]+(parseInt(tile[1])+1))&&count_tile(tile[0]+(parseInt(tile[1])+1),actual)<2){
//                 temp_list.push(tile);
//                 actual.splice(actual.indexOf(tile), 1);
//                 temp_list.push(tile[0]+(parseInt(tile[1])+1));
//                 actual.splice(actual.indexOf(tile[0]+(parseInt(tile[1])+1)), 1);
//                 // i+=1;
//                 pair.push(temp_list);
//             }else if(tile[0]!="F" && tile[0]!="J" && actual.includes(tile) && actual.includes(tile[0]+(parseInt(tile[1])+2))&&count_tile(tile[0]+(parseInt(tile[1])+2),actual)<2){
//                 temp_list.push(tile);
//                 actual.splice(actual.indexOf(tile), 1);
//                 temp_list.push(tile[0]+(parseInt(tile[1])+2));
//                 actual.splice(actual.indexOf(tile[0]+(parseInt(tile[1])+2)), 1);
//                 // i+=1;
//                 pair.push(temp_list);
//             }
            
//         }
        
//         comment.remaining=actual;
//         // hu_fan(pair);
//         var a=pair_analysis(pair,comment.remaining);
//         comment.text=a[0];
//         comment.target=a[1];
//         potential_list.push(pair);
//         comment.potential=potential_list;
//         comment_list.push(comment);
//     });
//     return comment_list;
// }
// function set_draw_comment(previous,player_tile_list){

// }

// function remove_duplicate(alist){
//     var temp_unique=[];
//     $.each(alist, function(i, el){
//         if($.inArray(el, temp_unique) === -1) temp_unique.push(el);
//     });
//     return temp_unique;
// }
// function count_tile(tile,actual){
//     var count=0
//     for (let j = 0; j < actual.length; j++) {
//         if(tile == actual[j]){
//             count++;
//         }
//     }
//     return count;
// }

// function pair_analysis(paired_list,remaining){
//     console.log(remaining);
//     var pair_ke=[];
//     var pair_shun=[];
//     var pair_dui=[];
//     var pair_qbk=[];
//     var pair_wait=[];
//     paired_list.forEach(pair => {
//         if(pair.length==3){
//             if(pair[0]==pair[1]&& pair[0]==pair[2]){
//                 pair_ke.push(find_tile_name(pair[0])+"刻");
//             }else if(parseInt(pair[0][1])+1==parseInt(pair[1][1])){
//                 pair_shun.push(to_character(pair[0][1])+"、"+to_character(pair[1][1])+"、"+find_tile_name(pair[2]));
//             }else if(parseInt(pair[0][1])+3==parseInt(pair[1][1])){
//                 pair_qbk.push(to_character(pair[0][1])+"、"+to_character(pair[1][1])+"、"+find_tile_name(pair[2]))
//             }
//         }else if(pair.length==2){
//             if(pair[0]==pair[1]){
//                 pair_dui.push(find_tile_name(pair[0])+"对");
//             }else{
//                 pair_wait.push(to_character(pair[0][1])+"、"+find_tile_name(pair[1]));
//             }
//         }
//     });
//     var temp_text="";
//     temp_text+="开局"+init_overall_comment(pair_ke.length,pair_shun.length,pair_qbk.length,pair_dui.length,pair_wait.length)
//     if(pair_ke.length!=0){
//         temp_text+="共有"+pair_ke.length+"副刻子：";
//         var k=0;
//         pair_ke.forEach(tile => {
//             temp_text+=tile;
//             if(k==pair_ke.length-1){
//                 temp_text+="。";
//             }else{
//                 temp_text+="，";
//             }
//             k++;
//         });
//     }
//     if(pair_shun.length!=0){
//         temp_text+="共有"+pair_shun.length+"副顺子：";
//         var k=0;
//         pair_shun.forEach(tile => {
//             temp_text+=tile;
//             if(k==pair_shun.length-1){
//                 temp_text+="。";
//             }else{
//                 temp_text+="，";
//             }
//             k++;
//         });
//     }if(pair_qbk.length!=0){
//         var k=0;
//         pair_qbk.forEach(tile => {
//             temp_text+=tile;
//             if(k==pair_qbk.length-1){
//                 temp_text+="，可以考虑做全部靠、组合龙或七星不靠。";
//             }else{
//                 temp_text+="，";
//             }
//             k++;
//         });
//     }if(pair_dui.length!=0){
//         temp_text+="共有"+pair_dui.length+"副对子：";
//         var k=0;
//         pair_dui.forEach(tile => {
//             temp_text+=tile;
//             if(k==pair_dui.length-1&&pair_dui.length<=4){
//                 temp_text+="。";
//             }else{
//                 temp_text+="，";
//             }
//             k++;
//         });
//         if(pair_dui.length>=4){
//             temp_text+="可以考虑做七对。";
//         }
//     }if(pair_wait.length!=0){
//         temp_text+="共有"+pair_wait.length+"副搭子：";
//         var k=0;
//         pair_wait.forEach(tile => {
//             temp_text+=tile;
//             if(k==pair_wait.length-1){
//                 temp_text+="。";
//             }else{
//                 temp_text+="，";
//             }
//             k++;
//         });
//     }
    
//     var remaining_tile_type=count_tile_type(remaining);
//     var all_tile_type=count_tile_type(get_complete_tile_list(paired_list,remaining))
//     console.log(remaining_tile_type);
//     console.log(all_tile_type);
//     console.log(find_min_type(all_tile_type));
//     console.log("---------------");
//     var zi_tile=remaining_tile_type.F+remaining_tile_type.J;
//     var target=find_min_type(all_tile_type)[1];
//     if(zi_tile>=5){
//         temp_text+="字牌"+(zi_tile)+"张，可以选择先保留字牌做十三幺，可以先把";
//         temp_text+=find_min_type(remaining_tile_type)[0]+"牌打掉。也可以打掉字牌不做十三幺。";
//         target.push("F");
//         target.push("J");
//     }else if(parseInt(remaining_tile_type.B)+parseInt(remaining_tile_type.T)+parseInt(remaining_tile_type.W)>=zi_tile&&zi_tile!=0){
//         temp_text+="字牌"+zi_tile+"张，可以选择先把字牌打掉。也可以把";
//         temp_text+=find_min_type(all_tile_type)[0]+"牌打掉，做缺一门。";
//         target.push("F");
//         target.push("J");
//     }
//     else if(zi_tile==0){
//         temp_text+="可以选择把"+find_min_type(remaining_tile_type)[0]+"牌打掉。"
//     }else{
//         temp_text+="可以选择把字牌打掉。也可以把";
//         temp_text+=find_min_type(all_tile_type)[0]+"牌打掉，做缺一门。";
//         target.push("F");
//         target.push("J");
//     }
//     return [temp_text,target]; 
// }

// function get_complete_tile_list(p_list,r_list){
//     var temp=[];
//     p_list.forEach(pair => {
//         pair.forEach(tile => {
//             temp.push(tile);
//         });
//     });
//     r_list.forEach(tile => {
//         temp.push(tile);
//     });
//     return temp;
// }

// function count_tile_type(temp){
//     var tile_type={
//         B:0,
//         F:0,
//         J:0,
//         T:0,
//         W:0
//     };
//     temp.forEach(tile => {
//         if(tile[0]=="B"){
//             tile_type.B+=1;
//         }else if(tile[0]=="F"){
//             tile_type.F+=1;
//         }else if(tile[0]=="J"){
//             tile_type.J+=1;
//         }else if(tile[0]=="T"){
//             tile_type.T+=1;
//         }else if(tile[0]=="W"){
//             tile_type.W+=1;
//         }
//     });
//     return tile_type;

// }
// function find_min_type(temp){
//     var temp_list=[];
//     var character_list=[];
//     if(temp.B!=0){
//         temp_list.push(temp.B);
//     }
//     if(temp.T!=0){
//         temp_list.push(temp.T);
//     }
//     if(temp.W!=0){
//         temp_list.push(temp.W);
//     }
//     console.log(temp_list)
//     var temp_num=Math.min(...temp_list);
//     console.log(temp_num);
//     temp_list=[];
//     if(temp.B==temp_num){
//         character_list.push("筒");
//         temp_list.push("B");
//     }
//     if(temp.T==temp_num){
//         character_list.push("条");
//         temp_list.push("T");
//     }
//     if(temp.W==temp_num){
//         character_list.push("万");
//         temp_list.push("W");
//     }
//     var temptext="";
//     for (let i = 0; i < character_list.length; i++) {
//         temptext+=character_list[i];
//         if(i!=character_list.length-1){
//             temptext+="、";
//         }
//     }
//     return [temptext,temp_list];
// }
// function hu_type(){
//     //11 123 123 123 123	4副顺子+1对将牌
//     //11 111 123 123 123	3副顺子+1副刻子+1对将牌
//     //11 111 111 123 123	2副顺子+2副刻子+1对将牌
//     //11 111 111 111 123	1副顺子+3副刻子+1对将牌
//     //11 111 111 111 111	4副刻子+1对将牌
//     //11 11 11 11 11 11 11  七对
//     //十三幺	- 88番 - 十三幺
//     //七星不靠	- 24番 - 七星不靠
//     //全不靠	- 12番 - 全不靠
//     //组合龙	- 12番 - 组合龙







    


// }
function comment_generator(player_list,remaining_tile,tileCnt){
    var temp_comment=[];
    var temp_data={
        player_list:player_list,
        remaining_tile:remaining_tile,
        tileCnt:tileCnt
    }
    temp_data=JSON.stringify(temp_data)
    $.ajax({
        type: "POST",
        url: "/mj_prob_cal",
        contentType: 'application/json',
        data: temp_data,
        success: function(response) {
            // var text="根据系统分析，可以考虑做";
            // text+=response.text+"。当前预测率最高的组合为：";
            // text+=convert_list_to_text(response.estimate_list);
            // text+="可以选择打掉"
            // text+=convert_list_to_text(response.potential_discard);
            // temp_comment.push(text);
            // console.log(text);
            return response;
        }
    });
    // temp_comment.push(tile_list_analyzer(tile_list.current[1],remaining_tile,tileCnt));

    // var temp_comment=[];
    // player_list.forEach(tile_list => {
    //     var tiles_list=tile_list.current[1]
    //     var temp_data={
    //         tiles_list:tiles_list,
    //         remaining_tile:remaining_tile,
    //         tileCnt:tileCnt
    //     }
    //     temp_data=JSON.stringify(temp_data)
    //     $.ajax({
    //         type: "POST",
    //         url: "/mj_prob_cal",
    //         contentType: 'application/json',
    //         data: temp_data,
    //         success: function(response) {
    //             var text="根据系统分析，可以考虑做";
    //             text+=response.text+"。当前预测率最高的组合为：";
    //             text+=convert_list_to_text(response.estimate_list);
    //             text+="可以选择打掉"
    //             text+=convert_list_to_text(response.potential_discard);
    //             temp_comment.push(text);
    //             console.log(text);
    //             // return text;
    //         }
    //     });
    //     // temp_comment.push(tile_list_analyzer(tile_list.current[1],remaining_tile,tileCnt));
    // });
    console.log(temp_comment);
    return temp_comment;
    
}
function tile_list_analyzer(tiles_list,remaining_tile,tileCnt){
    var temp_data={
        tiles_list:tiles_list,
        remaining_tile:remaining_tile,
        tileCnt:tileCnt
    }
    temp_data=JSON.stringify(temp_data)
    $.ajax({
        type: "POST",
        url: "/mj_prob_cal",
        contentType: 'application/json',
        data: temp_data,
        success: function(response) {
            // var text="根据系统分析，可以考虑做";
            // text+=response.text+"。当前预测率最高的组合为：";
            // text+=convert_list_to_text(response.estimate_list);
            // text+="可以选择打掉"
            // text+=convert_list_to_text(response.potential_discard);
            // console.log(text);
            // return text;
        }
    });
    // return hu_fan(tile_list,remaining_tile,tileCnt);
    // for (let i = 0; i < result_list.length; i++) {
    //     const temp_list = result_list[i];
    //     var temp=calculate_probability(temp_list,i,JSON.parse(JSON.stringify(remaining_tile)),tileCnt,tile_list);
    // }
    
}


function hu_fan(tiles_list,remaining_tile,tileCnt){
    var temp_data={
        tiles_list:tiles_list,
        remaining_tile:remaining_tile,
        tileCnt:tileCnt
    }
    temp_data=JSON.stringify(temp_data)
    $.ajax({
        type: "POST",
        url: "/mj_prob_cal",
        contentType: 'application/json',
        data: temp_data,
        success: function(response) {
            var text="根据系统分析，可以考虑做";
            text+=response.text+"。当前预测率最高的组合为：";
            text+=convert_list_to_text(response.estimate_list);
            text+="可以选择打掉"
            text+=convert_list_to_text(response.potential_discard);
            console.log(text);
            return text;
        }
    });

    // var temp=postData(temp_data);
    // console.log(temp);
    //.13.1. 88番(共7个)
//     // .13.1.1.大三元 和牌时，牌里有中、发、白3副刻子，不计箭刻、双箭刻。
//     var xu_tile=["B","T","W"];
//     var final_result=[];
//     var prob_list=[];
//     var estimate_list=[];
//     var unuse_list=[];
//     estimate_list=set_three_kind(["J1","J2","J3"]);
//     unuse_list=lists_difference(estimate_list,tiles_list)[1];
//     estimate_list=pair_unuse_list(estimate_list,unuse_list,5);
//     var max_tile=set_tile_prob("大三元",estimate_list,tiles_list,remaining_tile,tileCnt);
//     final_result.push(max_tile[0]);
//     prob_list.push(max_tile[1]);
//     // .13.1.2.大四喜 和牌时，由4副风刻(杠)加一对将牌组成的牌型，不计圈风刻，门风刻，三风刻，碰碰和，幺九刻。
//     // .13.7.5.三风刻 包含3个风刻的和牌，不计缺一门。
//     estimate_list=set_three_kind(["F1","F2","F3","F4"]);
//     unuse_list=lists_difference(estimate_list,tiles_list)[1];
//     estimate_list=pair_unuse_list(estimate_list,unuse_list,2);
//     var max_tile=set_tile_prob("大四喜",estimate_list,tiles_list,remaining_tile,tileCnt);
//     final_result.push(max_tile[0]);
//     prob_list.push(max_tile[1]);

//     // .13.1.3.九莲宝灯 一种花色牌按1112345678999组成，见同花色和牌，不计清一色，门前清，幺九刻，不求人。
//     var temp_i=1;
//     var estimate_list=[];
//     xu_tile.forEach(title_type => {
//         var temp_form1=[];
//         temp_prob=1;
//         while(temp_i<10){
//             if(temp_i==1||temp_i==9){
//                 temp_form1.push((title_type+temp_i),(title_type+temp_i),(title_type+temp_i));
//             }else{
//                 temp_form1.push((title_type+temp_i));
//             }
//             temp_i++;
//         }
//         temp_i=1;
//         while(temp_i<10){
//             var temp_form2=temp_form1.slice(0);
//             temp_form2.push((title_type+temp_i));
//             estimate_list.push(temp_form2);
//             temp_i++;
//         }
//         temp_i=1;
//     });
//     var max_tile=set_tile_prob("九莲宝灯",estimate_list,tiles_list,remaining_tile,tileCnt);
//     final_result.push(max_tile[0]);
//     prob_list.push(max_tile[1]);
//     // .13.1.4.连七对 由同一种花色顺序相连的7副对子组成的和牌，不计清一色，不求人，单调将，门前清，七对，缺一门，无字。
//     var temp_i=1;
//     var estimate_list=[];
//     xu_tile.forEach(title_type => {
//         var temp_form1=[];
//         while(temp_i<8){
//             temp_form1.push((title_type+temp_i),(title_type+temp_i));
//             temp_i++;
//         }
//         temp_i=2;
//         estimate_list.push(temp_form1);
//         temp_form1=[];
//         while(temp_i<9){
//             temp_form1.push((title_type+temp_i),(title_type+temp_i));
//             temp_i++;
//         }
//         temp_i=3;
//         estimate_list.push(temp_form1);
//         temp_form1=[];
//         while(temp_i<10){
//             temp_form1.push((title_type+temp_i),(title_type+temp_i));
//             temp_i++;
//         }
//         estimate_list.push(temp_form1);
//         temp_form1=[];
//         temp_i=1;
//     });
//     var max_tile=set_tile_prob("连七对",estimate_list,tiles_list,remaining_tile,tileCnt);
//     final_result.push(max_tile[0]);
//     prob_list.push(max_tile[1]);
//     // .13.1.5.四杠 有四副杠牌的和牌，不计三杠、双暗杠、双明杠、明杠、暗杠、单钓将、碰碰和。


//     // .13.1.6.绿一色 由条23468及字发组成的和牌，不计混一色。
//     var estimate_list=[];
//     var temp_form=["T2","T3","T4","T6","T8","J2"];
//     var temp_comb=k_combinations(temp_form, 4);
//     temp_comb.forEach(straight_list => {
//         var check_last_tile=1;
//         var temp_form1=[];
//         var temp_form_list=temp_form.slice(0);
//         straight_list.forEach(tile => {
//             temp_form_list.splice(temp_form_list.indexOf(tile), 1);
//             temp_form1.push(tile,tile,tile);
//             if(check_last_tile==4){
//                 var temp_form2=temp_form1.slice(0);
//                 temp_form_list.forEach(tile1 => {
//                     temp_form2.push(tile1,tile1);
//                     estimate_list.push(temp_form2);
//                     temp_form2=temp_form1.slice(0);
//                 });
//             }
//             check_last_tile++;
//         });
//     });
//     var temp_form=["T6","T8","J2"];
//     var temp_comb=k_combinations(temp_form, 2);
//     temp_comb.forEach(straight_list => {
//         var check_last_tile=1;
//         var temp_form1=["T2","T2","T3","T3","T4","T4"];
//         var temp_form_list=temp_form.slice(0);
//         temp_form_list.push("T2");
//         temp_form_list.push("T3");
//         temp_form_list.push("T4");
//         straight_list.forEach(tile => {
//             temp_form1.push(tile,tile,tile);
//             if(check_last_tile==2){
//                 var temp_form2=temp_form1.slice(0);
//                 temp_form_list.forEach(tile1 => {
//                     temp_form2.push(tile1,tile1);
//                     estimate_list.push(temp_form2);
//                     temp_form2=temp_form1.slice(0);
//                 });
//             }
//             check_last_tile++;
//         });
//     });
//     var temp_form=["T2","T3","T4","T6","T8","J2"];
//     var temp_comb=k_combinations(temp_form, 3);
//     temp_comb.forEach(straight_list => {
//         var check_last_tile=1;
//         var temp_form1=["T2","T3","T4"];
//         var temp_form_list=temp_form.slice(0);
//         straight_list.forEach(tile => {
//             temp_form_list.splice(temp_form_list.indexOf(tile), 1);
//             temp_form1.push(tile,tile,tile);
//             if(check_last_tile==3){
//                 var temp_form2=temp_form1.slice(0);
//                 temp_form_list.forEach(tile1 => {
//                     temp_form2.push(tile1,tile1);
//                     estimate_list.push(temp_form2)
//                     temp_form2=temp_form1.slice(0);
//                 });
//             }
//             check_last_tile++;
//         });
//     });
//     var max_tile=set_tile_prob("绿一色",estimate_list,tiles_list,remaining_tile,tileCnt);
//     final_result.push(max_tile[0]);
//     prob_list.push(max_tile[1]);


//     // 13.1.7.十三幺  由万、筒、条的1和9牌，及7张不同字牌组成，见其中任意张和牌，不计五门齐、不求人、单钓将、门前清、全带幺。
//     estimate_list=[];
//     var temp_form=["B1","B9","T1","T9","W1","W9","F1","F2","F3","F4","J1","J2","J3"];
//     temp_form.forEach(tile => {
//         var temp_form1=[];
//         temp_form.forEach(tile2 => {
//             if(tile==tile2){
//                 temp_form1.push(tile2,tile2);
//             }else{
//                 temp_form1.push(tile2);
//             }
//         });
//         estimate_list.push(temp_form1);
//     }); 
//     var max_tile=set_tile_prob("十三幺",estimate_list,tiles_list,remaining_tile,tileCnt);
//     final_result.push(max_tile[0]);
//     prob_list.push(max_tile[1]);

//     // .13.2. 64番（共6个）

//     // .13.2.1.清幺九 由序数为1、9的刻子和将牌组成的和牌，不计碰碰和、双同刻、无字、混幺九、全带幺、幺九刻。
//     estimate_list=[];
//     var temp_form=["B1","B9","T1","T9","W1","W9"];
//     var temp_comb=k_combinations(temp_form, 4);
//     temp_comb.forEach(straight_list => {
//         var check_last_tile=1;
//         var temp_form1=[];
//         var temp_form_list=temp_form.slice(0);
//         straight_list.forEach(tile => {
//             temp_form_list.splice(temp_form_list.indexOf(tile), 1);
//             temp_form1.push(tile,tile,tile);
//             if(check_last_tile==4){
//                 var temp_form2=temp_form1.slice(0);
//                 temp_form_list.forEach(tile1 => {
//                     temp_form2.push(tile1,tile1);
//                     estimate_list.push(temp_form2);
//                     temp_form2=temp_form1.slice(0);
//                 });
//             }
//             check_last_tile++;
//         });
//     });
//     var max_tile=set_tile_prob("清幺九",estimate_list,tiles_list,remaining_tile,tileCnt);
//     final_result.push(max_tile[0]);
//     prob_list.push(max_tile[1]);

//     // .13.2.2.小三元  包含2副箭刻和箭牌为将牌的和牌，不计双箭刻，箭刻，缺一门。
//     //check大三元
//     // estimate_list=set_three_kind(["J1","J2","J3"]);
//     // unuse_list=lists_difference(estimate_list,tiles_list)[1];
//     // estimate_list=pair_unuse_list(estimate_list,unuse_list,5);
//     // var max_tile=set_tile_prob("大三元",estimate_list,tiles_list,remaining_tile,tileCnt);
//     // final_result.push(max_tile[0]);
//     // prob_list.push(max_tile[1]);





//     estimate_list=[];
//     var temp_form=["J1","J2","J3"];
//     var temp_comb=k_combinations(temp_form, 2);
//     temp_comb.forEach(straight_list => {
//         var check_last_tile=1;
//         var temp_form1=[];
//         var temp_form_list=temp_form.slice(0);
//         straight_list.forEach(tile => {
//             temp_form_list.splice(temp_form_list.indexOf(tile), 1);
//             temp_form1.push(tile,tile,tile);
//             if(check_last_tile==2){
//                 var temp_form2=temp_form1.slice(0);
//                 temp_form_list.forEach(tile1 => {
//                     temp_form2.push(tile1,tile1);
//                     unuse_list=lists_difference(temp_form2,tiles_list)[1];
//                     var temp_list=pair_unuse_list(temp_form2,unuse_list,6);
//                     temp_list.forEach(temp_list1 => {
//                         estimate_list.push(temp_list1);
//                     });
//                     temp_form2=temp_form1.slice(0);
//                 });
//             }
//             check_last_tile++;
//         });
//     });
//     var max_tile=set_tile_prob("小三元",estimate_list,tiles_list,remaining_tile,tileCnt);
//     final_result.push(max_tile[0]);
//     prob_list.push(max_tile[1]);

//     // .13.2.3.小四喜 包含3副风刻和风牌为将牌的和牌，不计三风刻、缺一门，且其中3副风刻不计幺九刻。
//     //check 大四喜
//     estimate_list=[];
//     var temp_form=["F1","F2","F3","F4"];
//     var temp_comb=k_combinations(temp_form, 3);
//     temp_comb.forEach(straight_list => {
//         var check_last_tile=1;
//         var temp_form1=[];
//         var temp_form_list=temp_form.slice(0);
//         straight_list.forEach(tile => {
//             temp_form_list.splice(temp_form_list.indexOf(tile), 1);
//             temp_form1.push(tile,tile,tile);
//             if(check_last_tile==3){
//                 var temp_form2=temp_form1.slice(0);
//                 temp_form_list.forEach(tile1 => {
//                     temp_form2.push(tile1,tile1);
//                     unuse_list=lists_difference(temp_form2,tiles_list)[1];
//                     var temp_list=pair_unuse_list(temp_form2,unuse_list,3);
//                     temp_list.forEach(temp_list1 => {
//                         estimate_list.push(temp_list1);
//                     });
//                     temp_form2=temp_form1.slice(0);
//                 });
//             }
//             check_last_tile++;
//         });
//     });
//     var max_tile=set_tile_prob("小四喜",estimate_list,tiles_list,remaining_tile,tileCnt);
//     final_result.push(max_tile[0]);
//     prob_list.push(max_tile[1]);
//     // .13.2.4.字一色 由字牌的刻子和将牌组成的和牌，不计碰碰和、混幺九、全带幺、幺九刻、缺一门。
//     estimate_list=[];
//     var temp_form=["F1","F2","F3","F4","J1","J2","J3"];
//     var temp_comb=k_combinations(temp_form, 4);
//     temp_comb.forEach(straight_list => {
//         var check_last_tile=1;
//         var temp_form1=[];
//         var temp_form_list=temp_form.slice(0);
//         straight_list.forEach(tile => {
//             temp_form_list.splice(temp_form_list.indexOf(tile), 1);
//             temp_form1.push(tile,tile,tile);
//             if(check_last_tile==4){
//                 var temp_form2=temp_form1.slice(0);
//                 temp_form_list.forEach(tile1 => {
//                     temp_form2.push(tile1,tile1);
//                     estimate_list.push(temp_form2);
//                     temp_form2=temp_form1.slice(0);
//                 });
//             }
//             check_last_tile++;
//         });
//     });
//     var max_tile=set_tile_prob("字一色",estimate_list,tiles_list,remaining_tile,tileCnt);
//     final_result.push(max_tile[0]);
//     prob_list.push(max_tile[1]);
//     // .13.2.5.四暗刻 包含四个暗刻的和牌，不计门前清、碰碰和、三暗刻、双暗刻、不求人。

//     // .13.2.6.一色双龙会  由一种花色的2个老少副和一对5为将牌组成的和牌，不计平和、七对、清一色、一般高、老少副、缺一门、无字。
//     var temp_i=1;
//     var estimate_list=[];
//     xu_tile.forEach(title_type => {
//         var temp_form1=[];
//         temp_form1.push((title_type+1),(title_type+1));
//         temp_form1.push((title_type+2),(title_type+2));
//         temp_form1.push((title_type+3),(title_type+3));
//         temp_form1.push((title_type+7),(title_type+7));
//         temp_form1.push((title_type+8),(title_type+8));
//         temp_form1.push((title_type+9),(title_type+9));
//         temp_form1.push((title_type+5),(title_type+5));
//         estimate_list.push(temp_form1);
//     });
//     var max_tile=set_tile_prob("一色双龙会",estimate_list,tiles_list,remaining_tile,tileCnt);
//     final_result.push(max_tile[0]);
//     prob_list.push(max_tile[1]);
//     // .13.3. 48番（共2个）


//     // .13.3.1.一色四同顺 包含一种花色序数相同的4副顺子的和牌，不计一色三节高、一般高、四归一、一色三同顺、缺一门。
//     var start_i=1;
//     var estimate_list=[];
//     xu_tile.forEach(tile_type => {
//         while (start_i<=7) {
//             var temp_form1=[];
//             temp_form1.push((tile_type+start_i),(tile_type+start_i),(tile_type+start_i),(tile_type+start_i));
//             temp_form1.push((tile_type+(start_i+1)),(tile_type+(start_i+1)),(tile_type+(start_i+1)),(tile_type+(start_i+1)))
//             temp_form1.push((tile_type+(start_i+2)),(tile_type+(start_i+2)),(tile_type+(start_i+2)),(tile_type+(start_i+2)));
//             unuse_list=lists_difference(temp_form1,tiles_list)[1];
//             unuse_list.forEach(tile => {
//                 var temp_form2=temp_form1.slice(0);
//                 temp_form2.push(tile,tile);
//                 estimate_list.push(temp_form2);
//             });
//             start_i++;
//         }
//         start_i=1;
//         temp_form1=[];
//     });
//     var max_tile=set_tile_prob("一色四同顺",estimate_list,tiles_list,remaining_tile,tileCnt);
//     final_result.push(max_tile[0]);
//     prob_list.push(max_tile[1]);

//     // .13.3.2.一色四节高  包含一种花色序数依次递增1个数的4副刻子的和牌，不计一色三同顺、一色三节高、碰碰和、缺一门。
//     var start_i=1;
//     var estimate_list=[];
//     xu_tile.forEach(tile_type => {
//         while (start_i<=6) {
//             var temp_form1=[];
//             temp_form1.push((tile_type+start_i),(tile_type+start_i),(tile_type+start_i));
//             temp_form1.push((tile_type+(start_i+1)),(tile_type+(start_i+1)),(tile_type+(start_i+1)))
//             temp_form1.push((tile_type+(start_i+2)),(tile_type+(start_i+2)),(tile_type+(start_i+2)));
//             temp_form1.push((tile_type+(start_i+3)),(tile_type+(start_i+3)),(tile_type+(start_i+3)));
//             unuse_list=lists_difference(temp_form1,tiles_list)[1];
//             unuse_list.forEach(tile => {
//                 var temp_form2=temp_form1.slice(0);
//                 temp_form2.push(tile,tile);
//                 estimate_list.push(temp_form2);
//             });
//             start_i++;
//         }
//         start_i=1;
//         temp_form1=[];
//     });
//     var max_tile=set_tile_prob("一色四节高",estimate_list,tiles_list,remaining_tile,tileCnt);
//     final_result.push(max_tile[0]);
//     prob_list.push(max_tile[1]);
//     // .13.4. 32番（共3个）


//     // .13.4.1.一色四步高 包含一种花色序数依次递增1个数或2个数的4副顺子的和牌，不计一色三步高、缺一门。
//     var start_i=1;
//     var estimate_list=[];
//     xu_tile.forEach(tile_type => {
//         temp_prob=1;
//         while (start_i<=4) {
//             var temp_form1=[];
//             temp_form1.push((tile_type+start_i));
//             temp_form1.push((tile_type+(start_i+1)),(tile_type+(start_i+1)))
//             temp_form1.push((tile_type+(start_i+2)),(tile_type+(start_i+2)),(tile_type+(start_i+2)));
//             temp_form1.push((tile_type+(start_i+3)),(tile_type+(start_i+3)),(tile_type+(start_i+3)));
//             temp_form1.push((tile_type+(start_i+4)),(tile_type+(start_i+4)));
//             temp_form1.push((tile_type+(start_i+5)));
//             unuse_list=lists_difference(temp_form1,tiles_list)[1];
//             unuse_list.forEach(tile => {
//                 var temp_form2=temp_form1.slice(0);
//                 temp_form2.push(tile,tile);
//                 estimate_list.push(temp_form2);
//             });
//             // console.log(temp_form1.estimate_tile)
            
//             start_i++;
//         }
//         start_i=1;
//         temp_form1=[];
//     });
//     var max_tile=set_tile_prob("一色四步高",estimate_list,tiles_list,remaining_tile,tileCnt);
//     final_result.push(max_tile[0]);
//     prob_list.push(max_tile[1]);
//     // .13.4.2.三杠 包含三副杠牌的和牌，不计双暗杠、双明杠、暗杠、明杠、明暗杠。
//     /////

//     // .13.4.3.混幺九 由序数牌1、9和字牌的刻子和将牌组成的和牌（两种牌都有），不计碰碰和、幺九刻、全带幺。
//     estimate_list=[];
//     var temp_form=["B1","B9","T1","T9","W1","W9","F1","F2","F3","F4","J1","J2","J3"];
//     var temp_comb=k_combinations(temp_form, 4);
//     temp_comb.forEach(straight_list => {
//         var check_last_tile=1;
//         var temp_form1=[];
//         var temp_form_list=temp_form.slice(0);
//         straight_list.forEach(tile => {
//             temp_form_list.splice(temp_form_list.indexOf(tile), 1);
//             temp_form1.push(tile,tile,tile);
//             if(check_last_tile==4){
//                 var temp_form2=temp_form1.slice(0);
//                 temp_form_list.forEach(tile1 => {
//                     temp_form2.push(tile1,tile1);
//                     estimate_list.push(temp_form2);
//                     temp_form2=temp_form1.slice(0);
//                 });
//             }
//             check_last_tile++;
//         });
//     });
//     var max_tile=set_tile_prob("混幺九",estimate_list,tiles_list,remaining_tile,tileCnt);
//     final_result.push(max_tile[0]);
//     prob_list.push(max_tile[1]);
//     // .13.5. 24番（共9个）


//     // .13.5.1.七对  由7个对子组成的和牌，不计门前清、不求人、单调。
//     estimate_list=[];
//     var temp_comb=k_combinations(tiles_list, 7);
//     temp_comb.forEach(straight_list => {
//         var temp_form1=[];
//         straight_list.forEach(tile => {
//             temp_form1.push(tile,tile);
//         });
//         estimate_list.push(temp_form1);
//     });
//     var max_tile=set_tile_prob("七对",estimate_list,tiles_list,remaining_tile,tileCnt);
//     final_result.push(max_tile[0]);
//     prob_list.push(max_tile[1]);
//     // .13.5.2.七星不靠 由7张不同字牌，和包含147、258、369等三组组间花色不同组内花色相同的9张序数牌中任意7张组成的和牌，不计五门齐、不求人、单钓将、门前清、全不靠。
//     estimate_list=[];
//     var temp_xu_tile=[["B1","B4","B7","T2","T5","T8","W3","W6","W9"],
//                         ["B1","B4","B7","W2","W5","W8","T3","T6","T9"],
//                         ["T1","T4","T7","B2","B5","B8","W3","W6","W9"],
//                         ["T1","T4","T7","W2","W5","W8","B3","B6","B9"],
//                         ["W1","W4","W7","B2","B5","B8","T3","T6","T9"],
//                         ["W1","W4","W7","T2","T5","T8","B3","B6","B9"]];
//     temp_xu_tile.forEach(atile_list => {
//         var temp_comb=k_combinations(atile_list, 7);
//         temp_comb.forEach(straight_list => {
//             var temp_form1=[];
//             straight_list.forEach(tile => {
//                 temp_form1.push(tile);
//             });
//             var zi_tile=["F1","F2","F3","F4","J1","J2","J3"];
//             zi_tile.forEach(tile => {
//                 temp_form1.push(tile);
//             });
//             estimate_list.push(temp_form1);
//         });
//     });
//     var max_tile=set_tile_prob("七星不靠",estimate_list,tiles_list,remaining_tile,tileCnt);
//     final_result.push(max_tile[0]);
//     prob_list.push(max_tile[1]);
//     // .13.5.3.全双刻  由序数为2、4、6、8的刻子和将牌组成的和牌，不计碰碰和、断幺、无字。
//     estimate_list=[];
//     var temp_form=["B2","B4","B6","B8","T2","T4","T6","T8","W2","W4","W6","W8"];
//     var temp_comb=k_combinations(temp_form, 4);
//     temp_comb.forEach(straight_list => {
//         var check_last_tile=1;
//         var temp_form1=[];
//         var temp_form_list=temp_form.slice(0);
//         straight_list.forEach(tile => {
//             temp_form_list.splice(temp_form_list.indexOf(tile), 1);
//             temp_form1.push(tile,tile,tile);
//             if(check_last_tile==4){
//                 var temp_form2=temp_form1.slice(0);
//                 temp_form_list.forEach(tile1 => {
//                     temp_form2.push(tile1,tile1);
//                     estimate_list.push(temp_form2);
//                     temp_form2=temp_form1.slice(0);
//                 });
//             }
//             check_last_tile++;
//         });
//     });
//     var max_tile=set_tile_prob("全双刻",estimate_list,tiles_list,remaining_tile,tileCnt);
//     final_result.push(max_tile[0]);
//     prob_list.push(max_tile[1]);
    
//     // .13.5.4.清一色 由同一种花色的序数牌组成的和牌，不计缺一门、无字。
//     estimate_list=[];
//     // var alist=[["B1","B2","B3","B4","B5","B6","B7","B8","B9"],
//     //            ["T1","T2","T3","T4","T5","T6","T7","T8","T9"],
//     //            ["W1","W2","W3","W4","W5","W6","W7","W8","W9"]]
//     // var blist=[["B1","B1","B1","B1","B2","B2","B2","B2","B3","B3","B3","B3","B4","B4","B4","B4","B5","B5","B5","B5","B6","B6","B6","B6","B7","B7","B7","B7","B8","B8","B8","B8","B9","B9","B9","B9"],
//     // ["T1","T1","T1","T1","T2","T2","T2","T2","T3","T3","T3","T3","T4","T4","T4","T4","T5","T5","T5","T5","T6","T6","T6","T6","T7","T7","T7","T7","T8","T8","T8","T8","T9","T9","T9","T9"],
//     // ["W1","W1","W1","W1","W2","W2","W2","W2","W3","W3","W3","W3","W4","W4","W4","W4","W5","W5","W5","W5","W6","W6","W6","W6","W7","W7","W7","W7","W8","W8","W8","W8","W9","W9","W9","W9"]]
    
//     var temp_tile_type=find_max_type(tiles_list);
//     // if(temp_tile_type=="B"){
//     //     unuse_list=alist[0];
//     // }else if(temp_tile_type=="T"){
//     //     unuse_list=alist[1];
//     // }else if(temp_tile_type=="W"){
//     //     unuse_list=alist[2];
//     // }
    
//     var shun_list=all_kind_combination(temp_tile_type,tiles_list)[0];
//     var three_kind_list=all_kind_combination(temp_tile_type,tiles_list)[1];
//     var ke_list=all_kind_combination(temp_tile_type,tiles_list)[2];
//     var estimate_list=[];
//     estimate_list=set_combination_tiles(shun_list,three_kind_list,ke_list);
    
//     var max_tile=set_tile_prob("清一色",estimate_list,tiles_list,remaining_tile,tileCnt);
//     final_result.push(max_tile[0]);
//     prob_list.push(max_tile[1]);
//     // console.log(final_result);
//     // lkdsfajlk;
//     // .13.5.5.一色三同顺 包含同一种花色序数相同的3个顺子的和牌，不计一色三节高、一般高。

//     var start_i=1;
//     var estimate_list=[];
//     xu_tile.forEach(tile_type => {
//         while (start_i<=7) {
//             var temp_form1=[];
//             temp_form1.push((tile_type+start_i),(tile_type+start_i),(tile_type+start_i));
//             temp_form1.push((tile_type+(start_i+1)),(tile_type+(start_i+1)),(tile_type+(start_i+1)))
//             temp_form1.push((tile_type+(start_i+2)),(tile_type+(start_i+2)),(tile_type+(start_i+2)));
//             unuse_list=lists_difference(temp_form1,tiles_list)[1];
//             var temp_list=pair_unuse_list(temp_form1,unuse_list,5);
//             temp_list.forEach(temp_list1 => {
//                 estimate_list.push(temp_list1);
//             });
//             start_i++;
//         }
//         start_i=1;
//         temp_form1=[];
//     });
//     var max_tile=set_tile_prob("一色三同顺",estimate_list,tiles_list,remaining_tile,tileCnt);
//     final_result.push(max_tile[0]);
//     prob_list.push(max_tile[1]);
//     // .13.5.6.一色三节高 包含同一种花色序数依次递增1个数的3个刻子和牌，不计一色三同顺。
//     //                          同一色四同顺
    

//     // .13.5.7.全大 由序数牌7、8、9组成的和牌，不计无字，大于五。
//     var estimate_list=[];
//     var shun_list=[["B7","B8","B9"],["T7","T8","T9"],["W7","W8","W9"]];
//     var three_kind_list=[["B7","B7","B7"],["B8","B8","B8"],["B9","B9","B9"],
//                          ["T7","T7","T7"],["T8","T8","T8"],["T9","T9","T9"],
//                          ["W7","W7","W7"],["W8","W8","W8"],["W9","W9","W9"]];
//     var ke_list=[["B7","B7"],["B8","B8"],["B9","B9"],
//                  ["T7","T7"],["T8","T8"],["T9","T9"],
//                  ["W7","W7"],["W8","W8"],["W9","W9"]];
                 
//     estimate_list=set_combination_tiles(shun_list,three_kind_list,ke_list);
    
//     var max_tile=set_tile_prob("全大",estimate_list,tiles_list,remaining_tile,tileCnt);
//     final_result.push(max_tile[0]);
//     prob_list.push(max_tile[1]);

//     // .13.5.8.全中 由序数牌4、5、6组成的和牌，不计断幺、无字。
//     var estimate_list=[];
//     var shun_list=[["B4","B5","B6"],["T4","T5","T6"],["W4","W5","W6"]];
//     var three_kind_list=[["B4","B4","B4"],["B5","B5","B5"],["B6","B6","B6"],
//                          ["T4","T4","T4"],["T5","T5","T5"],["T6","T6","T6"],
//                          ["W4","W4","W4"],["W5","W5","W5"],["W6","W6","W6"]];
//     var ke_list=[["B4","B4"],["B5","B5"],["B6","B6"],
//                  ["T4","T4"],["T5","T5"],["T6","T6"],
//                  ["W4","W4"],["W5","W5"],["W6","W6"]];
    
//     estimate_list=set_combination_tiles(shun_list,three_kind_list,ke_list);
    
//     var max_tile=set_tile_prob("全中",estimate_list,tiles_list,remaining_tile,tileCnt);
//     final_result.push(max_tile[0]);
//     prob_list.push(max_tile[1]);

//     // .13.5.9.全小  由序数牌1、2、3组成的和牌，不计无字、小于五。
//     var estimate_list=[];
//     var shun_list=[["B1","B2","B3"],["T1","T2","T3"],["W1","W2","W3"]];
//     var three_kind_list=[["B1","B1","B1"],["B2","B2","B2"],["B3","B3","B3"],
//                          ["T1","T1","T1"],["T2","T2","T2"],["T3","T3","T3"],
//                          ["W1","W1","W1"],["W2","W2","W2"],["W3","W3","W3"]];
//     var ke_list=[["B1","B1"],["B2","B2"],["B3","B3"],
//                  ["T1","T1"],["T2","T2"],["T3","T3"],
//                  ["W1","W1"],["W2","W2"],["W3","W3"]];
                
//     estimate_list=set_combination_tiles(shun_list,three_kind_list,ke_list);
    
//     var max_tile=set_tile_prob("全小",estimate_list,tiles_list,remaining_tile,tileCnt);
//     final_result.push(max_tile[0]);
//     prob_list.push(max_tile[1]);

//     // .13.6. 16番（共6个）


//     // .13.6.1.清龙 包含同一花色1至9的和牌，不计连六、老少副。
//     estimate_list=[];
//     var temp_form=[["B1","B2","B3","B4","B5","B6","B7","B8","B9"],
//                    ["T1","T2","T3","T4","T5","T6","T7","T8","T9"],
//                    ["W1","W2","W3","W4","W5","W6","W7","W8","W9"]]
//     temp_form.forEach(temp_sublist => {
//         unuse_list=lists_difference(temp_sublist,tiles_list)[1];
//             var temp_list=pair_unuse_list(temp_sublist,unuse_list,5);
//             temp_list.forEach(temp_list1 => {
//                 estimate_list.push(temp_list1);
//             });
//     });
//     var max_tile=set_tile_prob("清龙",estimate_list,tiles_list,remaining_tile,tileCnt);
//     final_result.push(max_tile[0]);
//     prob_list.push(max_tile[1]);
//     // .13.6.2.三色双龙会 由两种花色的两个老少副和另一种花色5为将牌组成的和牌，不计喜相逢、老少副、无字、平和。

//     var estimate_list=[["B1","B2","B3","B7","B8","B9","T1","T2","T3","T7","T8","T9","W5","W5"],
//                    ["T1","T2","T3","T7","T8","T9","W1","W2","W3","W7","W8","W9","B5","B5"],
//                    ["W1","W2","W3","W7","W8","W9","B1","B2","B3","B7","B8","B9","T5","T5"]]
//     var max_tile=set_tile_prob("三色双龙会",estimate_list,tiles_list,remaining_tile,tileCnt);
//     final_result.push(max_tile[0]);
//     prob_list.push(max_tile[1]);

//     // .13.6.3.一色三步高 包含一种花色序数依次递增1个数或2个数的3副顺子的和牌。
//     var start_i=1;
//     var estimate_list=[];
//     xu_tile.forEach(tile_type => {
//         temp_prob=1;
//         while (start_i<=5) {
//             var temp_form1=[];
//             temp_form1.push((tile_type+start_i));
//             temp_form1.push((tile_type+(start_i+1)),(tile_type+(start_i+1)))
//             temp_form1.push((tile_type+(start_i+2)),(tile_type+(start_i+2)),(tile_type+(start_i+2)));
//             temp_form1.push((tile_type+(start_i+3)),(tile_type+(start_i+3)))
//             temp_form1.push((tile_type+(start_i+4)));
//             unuse_list=lists_difference(temp_form1,tiles_list)[1];
//             var temp_list=pair_unuse_list(temp_form1,unuse_list,5);
//             temp_list.forEach(temp_list1 => {
//                 estimate_list.push(temp_list1);
//             });
//             start_i++;
//         }
//         start_i=1;
//         temp_form1=[];
//     });
//     var max_tile=set_tile_prob("一色三步高",estimate_list,tiles_list,remaining_tile,tileCnt);
//     final_result.push(max_tile[0]);
//     prob_list.push(max_tile[1]);


//     // .13.6.4.全带五 每副牌及将牌都有序数牌5的和牌，不计断幺、无字。
//     var estimate_list=[];
//     var shun_list=[["B3","B4","B5"],["T3","T4","T5"],["W3","W4","W5"],
//                    ["B4","B5","B6"],["T4","T5","T6"],["W4","W5","W6"],
//                    ["B5","B6","B7"],["T5","T6","T7"],["W5","W6","W7"]];
//     var three_kind_list=[["B5","B5","B5"],["T5","T5","T5"],["W5","W5","W5"]];
//     var ke_list=[["B5","B5"],["T5","T5"],["W5","W5"]];
        
//     estimate_list=set_combination_tiles(shun_list,three_kind_list,ke_list);
    
//     var max_tile=set_tile_prob("全带五",estimate_list,tiles_list,remaining_tile,tileCnt);
//     final_result.push(max_tile[0]);
//     prob_list.push(max_tile[1]);
//     // .13.6.5.三同刻  包含序数相同的3副刻子的和牌，不计双同刻。
//     var start_i=1;
//     var estimate_list=[];
//     while(start_i<10){
//         var temp_form1=set_three_kind([(xu_tile[0]+start_i),(xu_tile[1]+start_i),(xu_tile[2]+start_i)]);
//         unuse_list=lists_difference(temp_form1,tiles_list)[1];
//         var temp_list=pair_unuse_list(temp_form1,unuse_list,5);
//         temp_list.forEach(temp_list1 => {
//             estimate_list.push(temp_list1);
//         });
//         start_i++
//     }
//     var max_tile=set_tile_prob("三同刻",estimate_list,tiles_list,remaining_tile,tileCnt);
//     final_result.push(max_tile[0]);
//     prob_list.push(max_tile[1]);
  
//     // .13.6.6.三暗刻 包含3副暗刻的和牌，不计双暗刻。

//     // .13.7. 12番（共5个）

//     //               由7张不同字牌，和包含147、258、369等三组组间花色不同组内花色相同的9张序数牌中任意7张组成的和牌，不计五门齐、不求人、单钓将、门前清、全不靠。
//     // .13.7.1.全不靠 由7张不同字牌，和包含147、258、369等三组组间花色不同组内相同的9张序数牌组成的16张牌中任意14张组成的和牌（不包含七星不靠），不计五门齐、不求人、单钓将、门前清。
//     estimate_list=[];
//     var temp_xu_tile=[["B1","B4","B7","T2","T5","T8","W3","W6","W9","F1","F2","F3","F4","J1","J2","J3"],
//                         ["B1","B4","B7","W2","W5","W8","T3","T6","T9","F1","F2","F3","F4","J1","J2","J3"],
//                         ["T1","T4","T7","B2","B5","B8","W3","W6","W9","F1","F2","F3","F4","J1","J2","J3"],
//                         ["T1","T4","T7","W2","W5","W8","B3","B6","B9","F1","F2","F3","F4","J1","J2","J3"],
//                         ["W1","W4","W7","B2","B5","B8","T3","T6","T9","F1","F2","F3","F4","J1","J2","J3"],
//                         ["W1","W4","W7","T2","T5","T8","B3","B6","B9","F1","F2","F3","F4","J1","J2","J3"]];
//     temp_xu_tile.forEach(alist => {
//         temp_comb=k_combinations(alist,14);
//         estimate_list.push(...temp_comb)
//     });
//     var max_tile=set_tile_prob("全不靠",estimate_list,tiles_list,remaining_tile,tileCnt);
//     final_result.push(max_tile[0]);
//     prob_list.push(max_tile[1]);

//     // .13.7.2.组合龙 包含147、258、369等三组组间花色不同组内相同的9张序数牌组成的和牌。
//     estimate_list=[];
//     var temp_xu_tile=[["B1","B4","B7","T2","T5","T8","W3","W6","W9"],
//                         ["B1","B4","B7","W2","W5","W8","T3","T6","T9"],
//                         ["T1","T4","T7","B2","B5","B8","W3","W6","W9"],
//                         ["T1","T4","T7","W2","W5","W8","B3","B6","B9"],
//                         ["W1","W4","W7","B2","B5","B8","T3","T6","T9"],
//                         ["W1","W4","W7","T2","T5","T8","B3","B6","B9"]];
//     temp_xu_tile.forEach(alist => {
//         unuse_list=lists_difference(alist,tiles_list)[1];
//         var temp_list=pair_unuse_list(alist,unuse_list,5);
//         temp_list.forEach(temp_list1 => {
//             estimate_list.push(temp_list1);
//         });
//     });
//     var max_tile=set_tile_prob("组合龙",estimate_list,tiles_list,remaining_tile,tileCnt);
//     final_result.push(max_tile[0]);
//     prob_list.push(max_tile[1]);

//     // .13.7.3.大于五 由序数牌6至9组成的和牌，不计无字。
//     var shun_list=[["B6","B7","B8"],["T6","T7","T8"],["W6","W7","W8",],
//                    ["B7","B8","B9"],["T7","T8","T9"],["W7","W8","W9"]];
//     var three_kind_list=[["B6","B6","B6"],["B7","B7","B7"],["B8","B8","B8"],["B9","B9","B9"],
//                          ["T6","T6","T6"],["T7","T7","T7"],["T8","T8","T8"],["T9","T9","T9"],
//                          ["W6","W6","W6"],["W7","W7","W7"],["W8","W8","W8"],["W9","W9","W9"]];
//     var ke_list=[["B6","B6"],["B7","B7"],["B8","B8"],["B9","B9"],
//                  ["T6","T6"],["T7","T7"],["T8","T8"],["T9","T9"],
//                  ["W6","W6"],["W7","W7"],["W8","W8"],["W9","W9"]];

    
    
//     estimate_list=set_combination_tiles(shun_list,three_kind_list,ke_list);
    
//     var max_tile=set_tile_prob("大于五",estimate_list,tiles_list,remaining_tile,tileCnt);
//     final_result.push(max_tile[0]);
//     prob_list.push(max_tile[1]);

    
//     // .13.7.4.小于五  由序数牌1至4组成的和牌，不计无字。
//     var shun_list=[["B1","B2","B3"],["T1","T2","T3"],["W1","W2","W3",],
//                    ["B2","B3","B4"],["T2","T3","T4"],["W2","W3","W4"]];
//     var three_kind_list=[["B1","B1","B1"],["B2","B2","B2"],["B3","B3","B3"],["B4","B4","B4"],
//                          ["T1","T1","T1"],["T2","T2","T2"],["T3","T3","T3"],["T4","T4","T4"],
//                          ["W1","W1","W1"],["W2","W2","W2"],["W3","W3","W3"],["W4","W4","W4"]];
//     var ke_list=[["B1","B1"],["B2","B2"],["B3","B3"],["B4","B4"],
//                  ["T1","T1"],["T2","T2"],["T3","T3"],["T4","T4"],
//                  ["W1","W1"],["W2","W2"],["W3","W3"],["W4","W4"]];
    
//     estimate_list=set_combination_tiles(shun_list,three_kind_list,ke_list);
    
//     var max_tile=set_tile_prob("小于五",estimate_list,tiles_list,remaining_tile,tileCnt);
//     final_result.push(max_tile[0]);
//     prob_list.push(max_tile[1]);

//     //.13.7.5.三风刻 包含3个风刻的和牌，不计缺一门。
//     estimate_list=[];
//     var temp_form=["F1","F2","F3","F4"];
//     var temp_comb=k_combinations(temp_form, 3);
//     temp_comb.forEach(alist => {
//         var temp_sublist=set_three_kind(alist);
//         unuse_list=lists_difference(temp_sublist,tiles_list)[1];
//         var temp_list=pair_unuse_list(temp_sublist,unuse_list,5);
//         temp_list.forEach(temp_list1 => {
//             estimate_list.push(temp_list1);
//         });
//     });
//     var max_tile=set_tile_prob("三风刻",estimate_list,tiles_list,remaining_tile,tileCnt);
//     final_result.push(max_tile[0]);
//     prob_list.push(max_tile[1]);
//     // .13.8. 8番（共9个）


//     // .13.8.1.花龙 包含3种序数牌3副顺子组成的1至9序数牌的和牌。
//     estimate_list=[];
//     var temp_xu_tile=[["B1","B2","B3","T4","T5","T6","W7","W8","W9"],
//                       ["B1","B2","B3","W4","W5","W6","T7","T8","T9"],
//                       ["T1","T2","T3","B4","B5","B6","W7","W8","W9"],  
//                       ["T1","T2","T3","W4","W5","W6","B7","B8","B9"],
//                       ["W1","W2","W3","B4","B5","B6","T7","T8","T9"],  
//                       ["W1","W2","W3","T4","T5","T6","B7","B8","B9"]
//     ]
//     temp_xu_tile.forEach(temp_sublist => {
//         unuse_list=lists_difference(temp_sublist,tiles_list)[1];
//         var temp_list=pair_unuse_list(temp_sublist,unuse_list,5);
//         temp_list.forEach(temp_list1 => {
//             estimate_list.push(temp_list1);
//         });
            
//     });
//     var max_tile=set_tile_prob("花龙",estimate_list,tiles_list,remaining_tile,tileCnt);
//     final_result.push(max_tile[0]);
//     prob_list.push(max_tile[1]);

//     // .13.8.2.推不倒 由牌面图形没有上下区别的牌组成的和牌，包括1234589筒，245689条，白板，不计缺一门。
//     estimate_list=[];
//     var shun_list=[["B1","B2","B3"],["B2","B3","B4"],["B3","B4","B5"],
//                    ["T4","T5","T6"],["T7","T8","T9"]];
//     var three_kind_list=[["B1","B1","B1"],["B2","B2","B2"],["B3","B3","B3"],["B4","B4","B4"],["B5","B5","B5"],["B8","B8","B8"],["B9","B9","B9"],
//                         ["T2","T2","T2"],["T4","T4","T4"],["T5","T5","T5"],["T6","T6","T6"],["T8","T8","T8"],["T9","T9","T9"]];
//     var ke_list=[["B1","B1"],["B2","B2"],["B3","B3"],["B4","B4"],["B5","B5"],["B8","B8"],["B9","B9"],
//                 ["T2","T2"],["T4","T4"],["T5","T5"],["T6","T6"],["T8","T8"],["T9","T9"]];       
//     estimate_list=set_combination_tiles(shun_list,three_kind_list,ke_list);
    
//     var max_tile=set_tile_prob("推不倒",estimate_list,tiles_list,remaining_tile,tileCnt);
//     final_result.push(max_tile[0]);
//     prob_list.push(max_tile[1]);


//     // .13.8.3.三色三同顺 包含序数相同花色不同的3副顺子的和牌，不计喜相逢。
//     estimate_list=[];
//     var temp_xu_tile=[["B","T","W"],
//                       ["B","W","T"],
//                       ["T","B","W"],  
//                       ["T","W","B"],
//                       ["W","B","T"],  
//                       ["W","T","B"],
//     ]
//     temp_xu_tile.forEach(c => {
//         var temp=[];
//         var temp_i=1;
//         while (temp_i<=7) {
//             var temp_sublist=[c[0]+temp_i,c[0]+(temp_i+1),c[0]+(temp_i+2),c[1]+temp_i,c[1]+(temp_i+1),c[1]+(temp_i+2),c[2]+temp_i,c[2]+(temp_i+1),c[2]+(temp_i+2)];
//             unuse_list=lists_difference(temp_sublist,tiles_list)[1];
//             var temp_list=pair_unuse_list(temp_sublist,unuse_list,5);
//             temp_list.forEach(temp_list1 => {
//                 if(!(temp_list1.includes("F1")||temp_list1.includes("F2")||temp_list1.includes("F3")||temp_list1.includes("F4")||temp_list1.includes("J1")||temp_list1.includes("J2")||temp_list1.includes("J3"))){
//                     estimate_list.push(temp_list1);
//                 }
//             });
//             temp_i++;
//         }
//     });
//     var max_tile=set_tile_prob("三色三同顺",estimate_list,tiles_list,remaining_tile,tileCnt);
//     final_result.push(max_tile[0]);
//     prob_list.push(max_tile[1]);

//     // .13.8.4.三色三节高 包含序数依次递增1个数花色不同的3副刻子的和牌。

//     estimate_list=[];
//     var temp_xu_tile=[["B","T","W"],
//                       ["B","W","T"],
//                       ["T","B","W"],  
//                       ["T","W","B"],
//                       ["W","B","T"],  
//                       ["W","T","B"],
//     ]
//     temp_xu_tile.forEach(c => {
//         var temp=[];
//         var temp_i=1;
//         while (temp_i<=7) {
//             var temp_sublist=set_three_kind([c[0]+temp_i,c[1]+(temp_i+1),c[2]+(temp_i+2)]);
//             unuse_list=lists_difference(temp_sublist,tiles_list)[1];
//             var temp_list=pair_unuse_list(temp_sublist,unuse_list,5);
//             temp_list.forEach(temp_list1 => {
//                 if(!(temp_list1.includes("F1")||temp_list1.includes("F2")||temp_list1.includes("F3")||temp_list1.includes("F4")||temp_list1.includes("J1")||temp_list1.includes("J2")||temp_list1.includes("J3"))){
//                     estimate_list.push(temp_list1);
//                 }
//             });
//             temp_i++;
//         }
//     });
//     var max_tile=set_tile_prob("三色三节高",estimate_list,tiles_list,remaining_tile,tileCnt);
//     final_result.push(max_tile[0]);
//     prob_list.push(max_tile[1]);

//     // .13.8.5.无番和 和牌时，数不出任何番种分。


//     // .13.8.6.妙手回春 自摸牌墙上最后一张牌和牌，不计自摸。


//     // .13.8.7.海底捞月  和打出的最后一张牌


//     // .13.8.8.杠上开花 摸开杠抓进的牌和牌，不计自摸。


//     // .13.8.9.抢杠和 和别人开明杠的牌，不计和绝张。


//     // .13.9. 6番（共7个）


//     // .13.9.1.碰碰和 由4副刻子（或杠）和将牌组成的和牌。


//     // .13.9.2.混一色 由一种花色和字牌组成的和牌，不计缺一门。
//     var temp_tile_type=find_max_type(tiles_list);
//     var shun_list=all_kind_combination(temp_tile_type,tiles_list)[0];
//     var three_kind_list=all_kind_combination(temp_tile_type,tiles_list)[1];
//     var ke_list=all_kind_combination(temp_tile_type,tiles_list)[2];
//     var temp_form=["F1","F2","F3","F4","J1","J2","J3"];
//     temp_form.forEach(tile => {
//         three_kind_list.push(set_three_kind([tile]));
//         ke_list.push([tile,tile]);
//     });
//     estimate_list=set_combination_tiles(shun_list,three_kind_list,ke_list);
    
//     var max_tile=set_tile_prob("混一色",estimate_list,tiles_list,remaining_tile,tileCnt);
//     final_result.push(max_tile[0]);
//     prob_list.push(max_tile[1]);

//     // .13.9.3.三色三步高 包含序数依次递增1个数花色不同的3副顺子组成的和牌。
//     estimate_list=[];
//     var temp_xu_tile=[["B","T","W"],
//                       ["B","W","T"],
//                       ["T","B","W"],  
//                       ["T","W","B"],
//                       ["W","B","T"],  
//                       ["W","T","B"],
//     ]
//     temp_xu_tile.forEach(c => {
//         var temp=[];
//         var temp_i=1;
//         while (temp_i<=7) {
//             var temp_sublist=[c[0]+temp_i,c[0]+(temp_i+1),c[0]+(temp_i+2),c[1]+(temp_i+1),c[1]+(temp_i+2),c[1]+(temp_i+3),c[2]+(temp_i+2),c[2]+(temp_i+3),c[2]+(temp_i+4)];
//             unuse_list=lists_difference(temp_sublist,tiles_list)[1];
//             var temp_list=pair_unuse_list(temp_sublist,unuse_list,5);
//             temp_list.forEach(temp_list1 => {
//                 if(!(temp_list1.includes("F1")||temp_list1.includes("F2")||temp_list1.includes("F3")||temp_list1.includes("F4")||temp_list1.includes("J1")||temp_list1.includes("J2")||temp_list1.includes("J3"))){
//                     estimate_list.push(temp_list1);
//                 }
//             });
//             temp_i++;
//         }
//     });
//     var max_tile=set_tile_prob("三色三步高",estimate_list,tiles_list,remaining_tile,tileCnt);
//     final_result.push(max_tile[0]);
//     prob_list.push(max_tile[1]);
//     console.log(final_result);
//     console.log(hu_name);
//     return final_result;
//     // .13.9.4.五门齐 包含3种序数牌、风牌和箭牌的和牌。


//     // .13.9.5.全求人  全靠吃牌、碰牌及单调别人的牌和牌，不计单调将。


//     // .13.9.6.双暗杠 包含2副暗杠的和牌，不计双暗刻。


//     // .13.9.7. 双箭刻  包含2副箭刻的和牌，不计箭刻。


//     // .13.10. 4番（共4个）


//     // .13.10.1.全带幺  和牌时，每副牌和将牌均包含字牌或序数1、9。


//     // .13.10.2.不求人  没有吃、碰、明杠，自摸和牌，不计门前清，自摸。


//     // .13.10.3.双明杠 包含两个明杠的和牌，不计明杠。


//     // .13.10.4.和绝张  和牌在牌池中已出现3张。


//     // .13.11. 2番（共10个）


//     // .13.11.1.箭刻  包含1副箭刻的和牌。


//     // .13.11.2.圈风刻 包含1副圈风刻的和牌，计了圈风刻的那副刻子不再计幺九刻。


//     // .13.11.3.门风刻 包含1副门风刻的和牌，计了门风刻的那副刻子不再计幺九刻。


//     // .13.11.4.门前清  没有吃、碰、明杠，和别人打出的牌


//     // .13.11.5.平和  由4副顺子和序数牌作将牌组成的和牌，不计无字


//     // .13.11.6.四归一  包含4张相同牌的和牌，杠牌不计


//     // .13.11.7.双同刻  包含2副序数相同的刻子的和牌


//     // .13.11.8.双暗刻  包含2副暗刻的和牌


//     // .13.11.9.暗杠  包含1副暗杠的和牌


//     // .13.11.10.断幺 不包含序数牌1、9和字牌的和牌，不计无字。


//     // .13.12. 1番（共13个）


//     // .13.12.1.一般高 包含花色相同且序数相同的2副顺子的和牌。


//     // .13.12.2.喜相逢 包含花色不同序数相同的2副顺子的和牌。


//     // .13.12.3.连六 包含花色相同序数相连的6张牌的和牌。


//     // .13.12.4.老少副 包含花色相同且序数为123、789的2副顺子的和牌。


//     // .13.12.5.幺九刻  包含序数牌1、9或字牌的1副刻子的和牌。


//     // .13.12.6.明杠  有暗刻，杠别人打出的牌，或抓进一张与已碰的明刻相同的牌开杠。


//     // .13.12.7.缺一门  和牌时，缺少1种序数牌。


//     // .13.12.8.无字  和牌时，没有字牌。


//     // .13.12.9.边张  单和123的3及789的7或1233和3、7789和7都为边张。手中有12345和3，56789和7不算边张。


//     // .13.12.10.坎张 和2张牌之间的牌。4556和5也为坎张，手中有45567和6不算坎张。


//     // .13.12.11.单调将  单调一张将牌


//     // .13.12.12.自摸  自己摸牌成和


//     // .13.12.13.花牌  即春夏秋冬，梅兰竹菊，每花计一分。不计在起和分内，和牌后才能计分。补花和牌计自摸分，不计杠上开花。


//     // .13.13. 补充  明暗杠5番。和牌牌型中有且只有两杠，分别为明杠和暗杠。


}
function sort_by_length(arr){
    return arr.sort((x,y) => y.length - x.length);
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

function find_max_type(alist){
    var b=0;
    var t=0;
    var w=0;
    alist.forEach(tile => {
        if(tile[0]=="B"){
            b++;
        }else if(tile[0]=="T"){
            t++;
        }else if(tile[0]=="W"){
            w++;
        }
    });
    if(b>t&&b>w){
        return "B";
    }else if(t>b&&t>w){
        return "T";
    }else if(w>t&&w>b){
        return "W";
    }
}

function all_kind_combination(tile_type,alist){
    var type_comb=[];
    var type_comb1=[];
    var type_comb2=[];
    var temp_form=[["1","2","3"],
                   ["2","3","4"],
                   ["3","4","5"],
                   ["4","5","6"],
                   ["5","6","7"],
                   ["6","7","8"],
                   ["7","8","9"]]
    var temp_i=1;
   
    temp_form.forEach(nums => {
        type_comb.push([tile_type+nums[0],tile_type+nums[1],tile_type+nums[2]]);
    });
     while(temp_i<10){
        type_comb1.push([(tile_type+temp_i),(tile_type+temp_i),(tile_type+temp_i)]);
        type_comb2.push([(tile_type+temp_i),(tile_type+temp_i)])
        temp_i++;
    } 
    // alist.forEach(tile => {
    //     if(tile[0]==tile_type){
    //         var temp_comb=check_existing_list(find_shun(tile),type_comb)
    //         type_comb.push(...temp_comb);
    //         if(type_comb1.length==0){
    //             type_comb1.push([tile,tile,tile]);
    //         }else if(type_comb1[type_comb1.length-1][0]!=tile){
    //             type_comb1.push([tile,tile,tile]);
    //         }
    //         if(type_comb2.length==0){
    //             type_comb2.push([tile,tile])
    //         }else if(type_comb2[type_comb2.length-1][0]!=tile){
    //             type_comb2.push([tile,tile]);
    //         }
    //     }
    // });
    // console.log(type_comb);
    // console.log(type_comb1);
    // console.log(type_comb2);
    return [type_comb,type_comb1,type_comb2];
}

function find_shun(tile){
    var tile_type=tile[0];
    var tile_num=tile[1];
    var temp_list=[];
    var temp_form=[["1","2","3"],
                   ["2","3","4"],
                   ["3","4","5"],
                   ["4","5","6"],
                   ["5","6","7"],
                   ["6","7","8"],
                   ["7","8","9"]]
    temp_form.forEach(nums => {
        if(nums.includes(tile_num)==true){
            temp_list.push([tile_type+nums[0],tile_type+nums[1],tile_type+nums[2]]);
        }
    });
    return temp_list;
}

// function prob_ke(tile,remaining_tile,tileCnt){
//     prob_tile(3,counter(tile_list,tile),remaining_tile.tile,tileCnt);
// }
function find_pair(alist){
    var temp_pair_list=[];
    alist.forEach(tile => {
        temp_pair_list.push([tile,tile]);
    });
    return temp_pair_list
}
function find_strait(alist){
    var temp_pair_list=[];
    alist.forEach(tile => {
        if(!(tile[0]=="J"||tile[0]=="F")){
            var temp_shun=find_shun(tile);
            var blist=alist.slice(0);
            temp_shun.forEach(temp_shun_list => {
                blist.splice(blist.indexOf(tile), 1);
                temp_pair_list.push(temp_shun_list);
            });
        }
    });
    return temp_pair_list;
}
function find_three_kind(alist){
    var temp_pair_list=[];
    alist.forEach(tile => {
        temp_pair_list.push([tile,tile,tile]);
        
    });
    return temp_pair_list;
}

function find_tree_kind_pair(alist){
    var temp_pair_list=[];
    alist.forEach(tile => {
        alist.forEach(tile2 => {
            if(tile!=tile2){
                temp_pair_list.push([tile,tile,tile,tile2,tile2]);
            }
        });
    });
    return temp_pair_list;
}
function find_three_kind_strait_double(alist){
    var temp_pair_list=[];
    alist.forEach(tile => {
        if(temp_prob!=0){
            var temp_pair_list1=[tile,tile,tile];
            var blist=alist.slice(0);
            blist.forEach(tile2 => {
                if(!(tile2[0]=="J"||tile2[0]=="F")){
                    var temp_shun1=find_shun(tile2);
                    temp_shun1.forEach(temp_shun_list1 => {
                        var temp_pair=temp_pair_list1.slice(0);
                        temp_shun_list1.forEach(tile3 => {
                            temp_pair.push(tile3);
                        });
                        temp_pair_list.push(temp_pair);
                    });
                }
            });
        }
    });
    return temp_pair_list;
}

function set_combination_tiles(shun_list,three_kind_list,ke_list){
    var estimate_list=[];
    var temp_comb1=Combinatorics.baseN(shun_list,4).toArray();
    temp_comb1.forEach(temp_sublist => {
        temp_sublist=temp_sublist.toString().split(",");
        ke_list.forEach(temp_ke => {
            var temp_sublist1=temp_sublist.slice(0);
            if(counter(temp_sublist1,temp_ke[0])<=2){
                temp_sublist1.push(...temp_ke);
                estimate_list.push(temp_sublist1);
            }
        });
    });
    var temp_list=[];
    var temp_comb1=Combinatorics.baseN(shun_list,3).toArray();
    temp_comb1.forEach(temp_sublist => {
        temp_sublist=temp_sublist.toString().split(",");
        three_kind_list.forEach(temp_kind_list => {
            var temp_sublist1=temp_sublist.slice(0);
            if(counter(temp_sublist,temp_kind_list[0])<=1){
                temp_sublist1.push(...temp_kind_list);
                temp_list.push(temp_sublist1)
            }
        });
    });
    temp_list.forEach(sublist => {
        ke_list.forEach(temp_ke => {
            var sublist1=sublist.slice(0);
            if(counter(sublist1,temp_ke[0])<=2){
                sublist1.push(...temp_ke);
                estimate_list.push(sublist1);
            }
        });
    });
    var temp_comb1=Combinatorics.baseN(shun_list,2).toArray();
    var temp_comb2=Combinatorics.combination(three_kind_list,2).toArray();
    temp_list=[];
    temp_comb1.forEach(temp_sublist => {
        temp_sublist=temp_sublist.toString().split(",");
        temp_comb2.forEach(temp_kind_list => {
            if(counter(temp_sublist,temp_kind_list[0][0])<=1&&counter(temp_sublist,temp_kind_list[1][0])<=1){
                temp_kind_list=temp_kind_list.toString().split(",");
                var temp_sublist1=temp_sublist.slice(0);
                temp_sublist1.push(...temp_kind_list);
                temp_list.push(temp_sublist1);
            }
        });
    });
    temp_list.forEach(temp_sublist => {
        ke_list.forEach(temp_ke => {
            var temp_sublist1=temp_sublist.slice(0);
            if(counter(temp_sublist1,temp_ke[0])<=2){
                temp_sublist1.push(...temp_ke);
                estimate_list.push(temp_sublist1);
            }
        });
    });
    if(three_kind_list.length>=3){
        var temp_list=[];
        var temp_comb1=Combinatorics.combination(three_kind_list,3).toArray();
        temp_list=[];
        temp_comb1.forEach(temp_sublist => {
            temp_sublist=temp_sublist.toString().split(",");
            shun_list.forEach(temp_shun_list => {
                var temp_sublist1=temp_sublist.slice(0);
                temp_sublist1.push(...temp_shun_list);
                temp_list.push(temp_sublist1);
            });
        });
        temp_list.forEach(sublist => {
            ke_list.forEach(temp_ke => {
                var sublist1=sublist.slice(0);
                if(counter(sublist1,temp_ke[0])<=2){
                    sublist1.push(...temp_ke);
                    estimate_list.push(sublist1);
                }
            });
        });
    }
    if(three_kind_list.length>=4){
        var temp_comb1=Combinatorics.combination(three_kind_list,4).toArray();
        temp_comb1.forEach(temp_sublist => {
            temp_sublist=temp_sublist.toString().split(",");
            ke_list.forEach(temp_ke => {
                var temp_sublist1=temp_sublist.slice(0);
                if(counter(temp_sublist1,temp_ke[0])<=2){
                    temp_sublist1.push(...temp_ke);
                    estimate_list.push(temp_sublist1);
                }
            });
        });
    }
    return estimate_list;
}

function find_three_kind_double(alist){
    var temp_pair_list=[];
    alist.forEach(tile => {
        alist.forEach(tile2 => {
            if(tile!=tile2){
                temp_pair_list.push([tile,tile,tile,tile2,tile2,tile2]);
            }
        });
    });
    return temp_pair_list;
}

function find_strait_double(alist){
    var temp_pair_list=[];
    alist.forEach(tile => {
        if(!(tile[0]=="J"||tile[0]=="F")){
            var temp_shun=find_shun(tile);
            var blist=alist.slice(0);
            temp_shun.forEach(temp_shun_list => {
                blist.splice(blist.indexOf(tile), 1);
                blist.forEach(tile2 => {
                    if(!(tile2[0]=="J"||tile2[0]=="F")){
                        var temp_shun1=find_shun(tile2);
                        temp_shun1.forEach(temp_shun_list1 => {
                            var temp_pair=temp_shun_list.slice(0);
                            temp_shun_list1.forEach(tile3 => {
                                temp_pair.push(tile3);
                            });
                            temp_pair_list.push(temp_pair);
                        });
                    }
                });
            });
        }
    });
    return temp_pair_list;
}

function find_strait_pair(alist){
    var temp_pair_list=[];
    alist.forEach(tile => {
        if(!(tile[0]=="J"||tile[0]=="F")){
            var temp_shun=find_shun(tile);
            temp_shun.forEach(temp_shun_list => {
                alist.forEach(tile2 => {
                    var temp_pair=temp_shun_list.slice(0);
                    if(!temp_shun_list.includes(tile2)){
                        temp_pair.push(tile2,tile2);
                        temp_pair_list.push(temp_pair);     
                    }
                });
            });
        }
    });
    return temp_pair_list;
}
function pair_unuse_list(estimate_list,alist,req_num_tile){
    var temp_final=[];
    if(req_num_tile==2){
        var tempList=find_pair(alist);
        tempList.forEach(tile => {
            var estimate_list1=estimate_list.slice(0);
            estimate_list1.push(...tile);
            temp_final.push(estimate_list1);
        });
        return temp_final;
    }else if(req_num_tile==5){
        var three_kind=find_tree_kind_pair(alist);
        var strait_pair=find_strait_pair(alist);
        three_kind.forEach(tile => {
            var estimate_list1=estimate_list.slice(0);
            estimate_list1.push(...tile);
            temp_final.push(estimate_list1);
        });
        strait_pair.forEach(tile => {
            var estimate_list1=estimate_list.slice(0);
            estimate_list1.push(...tile);
            temp_final.push(estimate_list1);
        });
        return temp_final;
    }else if(req_num_tile==6){
        var strait_double=find_strait_double(alist);
        var three_kind_double=find_three_kind_double(alist);
        var three_kind_strait_double=find_three_kind_strait_double(alist);
        strait_double.forEach(tile => {
            var estimate_list1=estimate_list.slice(0);
            estimate_list1.push(...tile);
            temp_final.push(estimate_list1);
        });
        three_kind_double.forEach(tile => {
            var estimate_list1=estimate_list.slice(0);
            estimate_list1.push(...tile);
            temp_final.push(estimate_list1);
        });
        three_kind_strait_double.forEach(tile => {
            var estimate_list1=estimate_list.slice(0);
            estimate_list1.push(...tile);
            temp_final.push(estimate_list1);
        });
        return temp_final;
    }else if(req_num_tile==3){
        var strait=find_strait(alist);
        var three_kind=find_three_kind(alist);
        strait.forEach(tile => {
            var estimate_list1=estimate_list.slice(0);
            estimate_list1.push(...tile);
            temp_final.push(estimate_list1);
        });
        three_kind.forEach(tile => {
            var estimate_list1=estimate_list.slice(0);
            estimate_list1.push(...tile);
            temp_final.push(estimate_list1);
        });
        return temp_final;
    }
   
}
function counter(array,x){
    
    var count = 0;
    for(var i = 0; i < array.length; ++i){
        if(array[i] == x)
            count++;
    }
    return count;
}
function num_of_tile(i,alist,tile1){
    if(i>=counter(alist,tile1)){
        return i-counter(alist,tile1)
    }else{
        return 0;
    }
    
}
function set_three_kind(tile_list){
    var temp=[];
    tile_list.forEach(tile => {
        temp.push(tile);
        temp.push(tile);
        temp.push(tile);
    });
    return temp;
}
function lists_difference(estimate_list,current_list){
    var temp_estimate_list=estimate_list.slice(0);
    var useful_tile=[];
    var potential_drop_tile=[];
    current_list.forEach(tile => {
        if(temp_estimate_list.includes(tile)==true){
            useful_tile.push(tile);
            temp_estimate_list.splice(temp_estimate_list.indexOf(tile), 1);
        }else{
            potential_drop_tile.push(tile);
        }
    });
    return [useful_tile,potential_drop_tile,temp_estimate_list]
}
function find_unuseful_tile(form_tile,alist){
    var tile_list=alist.slice(0);
    form_tile.forEach(tile => {
        if(tile_list.includes(tile)==true){
            tile_list.splice(tile_list.indexOf(tile), 1);
        }
    });
    return tile_list;
}
function set_tile_prob(name,estimate_list,tiles_list,remaining_tile,tileCnt){
    // var temp_data={
    //     name:name,
    //     estimate_list:estimate_list,
    //     tiles_list:tiles_list,
    //     remaining_tile:remaining_tile,
    //     tileCnt:tileCnt
    // };
    
    var temp_tileCnt=tileCnt;
    var max_prob=0;
    var max_tile_list=[];
    var temp_prob=1;
    estimate_list.forEach(estimate_tile_list => {
        var temp=remove_duplicate(estimate_tile_list);
        temp.forEach(tile => {
            temp_prob*=prob_tile(counter(estimate_tile_list,tile),counter(tiles_list,tile),remaining_tile[tile],tileCnt);
            tileCnt-=(num_of_tile(counter(estimate_tile_list,tile),tiles_list,tile));
        });
        if(temp_prob>max_prob){
            max_prob=temp_prob;
            max_tile_list=estimate_tile_list;
        }
        tileCnt=temp_tileCnt;
        temp_prob=1
    });
    var temp_tile_info=lists_difference(max_tile_list,tiles_list);
    var tile_list_info={
        text:name,
        current_list:tiles_list,
        useful_tile:temp_tile_info[0],
        potential_drop_tile:temp_tile_info[1],
        waiting_tile:temp_tile_info[2],
        estimate_list:max_tile_list,
        probability:max_prob
    };
    return [tile_list_info,max_prob];

}
function check_existing_list(shun_list,type_comb){
    if(type_comb.length==0){
        return shun_list
    }else{
        type_comb.forEach(tile_list1 => {
            shun_list.forEach(tile_list2 => {
                if(tile_list1.toString()===tile_list2.toString()){
                    shun_list.splice(shun_list.indexOf(tile_list2), 1);
                }
            });
        });
    }
    return shun_list;
}

function postData(input) {
    $.ajax({
        type: "POST",
        url: "/mj_prob_cal",
        contentType: 'application/json',
        data: input,
        success: function(response) {
            var text="根据系统分析，可以考虑做";
            text+=response.text+"。当前预测概率最高的组合为：";
            text+=convert_list_to_text(response.estimate_list);
            text+="可以选择打掉"
            text+=convert_list_to_text(response.potential_discard);
            console.log(text);
            return text;
        }
    });
}

// function callbackFunc(response) {
//     var text="根据系统分析，可以考虑做";
//     text+=response.text+"。当前预测率最高的组合为：";
//     text+=convert_list_to_text(response.estimate_list);
//     text+="可以选择打掉"
//     text+=convert_list_to_text(response.potential_discard);
//     console.log(text);
//     return text;
//     // console.log(response);
// }
function convert_list_to_text(alist){
    var text="";
    for (let i = 0; i < alist.length; i++) {
        const tile = alist[i];
        if(i<alist.length-1){
            text+=find_tile_name(tile)+"、";
        }else{
            text+=find_tile_name(tile)+"。";
        }
    }
    return text;
}
