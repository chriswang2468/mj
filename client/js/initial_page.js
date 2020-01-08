var file_data=[];
var match_data=[];
var matchId;
var selected_file;
var fileName;
$.getScript("js/general/mahjong_terminology.js");
$.getScript("js/comment_generator.js");
$.getScript("js/general/combinatorics.js");
$.get("/api/matches", function(data, status){
    $("nav").hide();
    $("#main-container").hide();
    // alert("Data: " + data + "\nStatus: " + status);
    // $.getScript("js/comment_generator.js", function() {
    //     alert("Script loaded but not necessarily executed.");
    //  });
    
  }).done(function( data ) {
    file_data=data;
    // localStorage.setItem("file",data);
    $("nav").show();
    $("#main-container").show();
    $(".loader").hide();
  });

function selectedFile(tag){
    selected_file=tag.getAttribute('value');
    fileName=tag.textContent;
    $("#list_matches").empty();
    for (let i = 0; i < file_data.length; i++) {
        if (selected_file==file_data[i].id) {
            var matches=file_data[i].fileContents;
            for (let j = 0; j < matches.length; j++) {
                var order=matches[j].id+1;
                $("#list_matches").append('<a href="javascript:void(0);" onclick="selectedMatch(this)" class="list-group-item list-group-item-action" value='+matches[j].id+'>'+order+': '+matches[j].matchId+'</a>');
                match_data.push({
                    id:matches[j].id,
                    matchId:matches[j].matchId,
                    players:matches[j].players,
                    log:matches[j].log
                });
                
            }
            
        }    
    }
}
function selectedMatch(tag){
    $("nav").hide();
    $("#main-container").hide();
    $(".loader").show();
    matchId=tag.getAttribute('value');
    find_match(matchId);
    
}


function find_match(matchId){
    for (let i = 0; i < file_data[selected_file].fileContents.length; i++) {
        var match=file_data[selected_file].fileContents[i];
        if (matchId==match.id) {
            sessionStorage.setItem("matchId",match.matchId);
            sessionStorage.setItem("matchInfo",JSON.stringify(match));
            $.ajax({
                type: "POST",
                url: "/mj_info",
                contentType: 'application/json',
                data: JSON.stringify({
                    fileName:fileName,
                    matchId:matchId
                }),
                success: function(response) {
                    console.log("Sdasdasd");
                    console.log(response);
                    // sessionStorage.setItem("game_data",JSON.stringify(response));
                    // $(location).attr('href', 'match/').search(sessionStorage.getItem("matchId"));
                }
            });
        }
        
    }
}
// function set_remaining_tile(tile_lists){
//     const temp={W1:4,W2:4,W3:4,W4:4,W5:4,W6:4,W7:4,W8:4,W9:4,B1:4,B2:4,B3:4,B4:4,B5:4,B6:4,B7:4,B8:4,B9:4,T1:4,T2:4,T3:4,T4:4,T5:4,T6:4,T7:4,T8:4,T9:4,H1:1,H2:1,H3:1,H4:1,H5:1,H6:1,H7:1,H8:1,F1:4,F2:4,F3:4,F4:4,J1:4,J2:4,J3:4};
//     tile_lists.forEach(tile_list => {
//         tile_list.forEach(tile => {
//             temp[tile]--;   
//         });
//     });
//     return temp;
// }
// function gang_handler(gang_tile,tile_list){
//     var i=tile_list[1].length;
//     tile_list[tile_list.length]=[gang_tile];
//     while (i--) {
//         var temp_tile=tile_list[1][i]
//         if (temp_tile==gang_tile) { 
//             tile_list[1].splice(i, 1);
//             tile_list[tile_list.length-1].push(temp_tile);
//         } 
//     }
//     return tile_list;
// }
// function chi_handler(player,last_tile,tileChi,tile_list,tile){
//     tile_list[tile_list.length]=[];
//     var temp=[]
//     var final_temp=[];
//     var play_id=tile_list[1].indexOf(tile);
//     if(last_tile==tileChi){
//         var previous_tile=tileChi[0]+(parseInt(tileChi[1])-1);
//         var next_tile=tileChi[0]+(parseInt(tileChi[1])+1);
//         temp.push((player+1)*100+tile_list[0].length+tile_list[1].indexOf(previous_tile));
//         temp.push((player+1)*100+tile_list[0].length+tile_list[1].indexOf(next_tile));
//         tile_list[1].splice(tile_list[1].indexOf(previous_tile), 1);
//         tile_list[1].splice(tile_list[1].indexOf(next_tile), 1);
//         tile_list[tile_list.length-1].push(previous_tile);
//         tile_list[tile_list.length-1].push(tileChi);
//         tile_list[tile_list.length-1].push(next_tile);
//     }else if(last_tile>tileChi){
//         var previous_tile=tileChi[0]+(parseInt(tileChi[1])-1);
//         temp.push((player+1)*100+tile_list[0].length+tile_list[1].indexOf(previous_tile));
//         temp.push((player+1)*100+tile_list[0].length+tile_list[1].indexOf(tileChi));
//         tile_list[1].splice(tile_list[1].indexOf(previous_tile), 1);
//         tile_list[1].splice(tile_list[1].indexOf(tileChi), 1);
//         tile_list[tile_list.length-1].push(previous_tile);
//         tile_list[tile_list.length-1].push(tileChi);
//         tile_list[tile_list.length-1].push(last_tile);
//     }else if(last_tile<tileChi){
//         var next_tile=tileChi[0]+(parseInt(tileChi[1])+1);
//         temp.push((player+1)*100+tile_list[0].length+tile_list[1].indexOf(tileChi));
//         temp.push((player+1)*100+tile_list[0].length+tile_list[1].indexOf(next_tile));
//         tile_list[1].splice(tile_list[1].indexOf(tileChi), 1);
//         tile_list[1].splice(tile_list[1].indexOf(next_tile), 1);
//         tile_list[tile_list.length-1].push(last_tile);
//         tile_list[tile_list.length-1].push(tileChi);
//         tile_list[tile_list.length-1].push(next_tile);
//     }
//     final_temp.push(tile_list);
//     final_temp.push(temp);
//     final_temp.push(play_id);
//     return final_temp;
// }
// function bugang_handler(tile,tile_lists){
//     var num=0;
//     tile_lists.forEach(function(tile_list,i) {
//         if(i>1){
//             tile_list.forEach(temp_tile => {
//                 if(temp_tile==tile){
//                     num++;
//                 }
//                 if(num==2){
//                     tile_list.push(tile);
//                 }
//             });
//         }
        
//     });
//     return tile_lists;
// }
// async function wait(ms) {
//     return new Promise(resolve => {
//       setTimeout(resolve, ms);
//     });
// }
// function find_tile_name(tile){
//     if(tile[0]=="B"){
//         return number[tile[1]-1]+character[0];
//     }else if(tile[0]=="T"){
//         return number[tile[1]-1]+character[1];
//     }else if(tile[0]=="W"){
//         return number[tile[1]-1]+character[2];
//     }else if(tile[0]=="F"){
//         return feng[tile[1]-1];
//     }else if(tile[0]=="J"){
//         return jian[tile[1]-1];
//     }else if(tile[0]=="H"){
//         return hua[tile[1]-1];
//     }
// }
// function calculate_tiles(playerlists){
//     var temp=[]
//     for (let i = 0; i < playerlists.length; i++) {
//         var count=0;
//         const playerlist = playerlists[i].current;
//         for (let j = 0; j < playerlist.length; j++) {
//             count+=playerlist[j].length;    
//         }
//         temp.push(count);    
//     }
//     return temp;
// }