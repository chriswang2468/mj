$(document).ready(function(){
    $("#speed_button").mouseover(function(){
        $("#speed_bar").show();
    });
    $("#speed_bar").mouseover(function(){
        $("#speed_bar").show();
    });
    $("#speed_bar").mouseout(function(){
        $("#speed_bar").hide();
    });

    $('#comment_button').click(function() {
        $('.comment_section').toggle();
        $('.comment_all_section').toggle();
      });
      $('#profile_pic_0').click(function() {
          var className = $('#myComment_0').attr('class');
          console.log(className);
          if(className.indexOf("hide") != -1){
            $("#myComment_0").toggleClass('.comment_section show');
          }else{
            $("#myComment_0").toggleClass('.comment_section hide');
          }
        
      });
      $('#profile_pic_1').click(function() {
        var className = $('#myComment_1').attr('class');
        console.log(className);
        if(className.indexOf("hide") != -1){
          $("#myComment_1").toggleClass('.comment_section show');
        }else{
          $("#myComment_1").toggleClass('.comment_section hide');
        }
      });
      $('#profile_pic_2').click(function() {
        var className = $('#myComment_2').attr('class');
        console.log(className);
        if(className.indexOf("hide") != -1){
          $("#myComment_2").toggleClass('.comment_section show');
        }else{
          $("#myComment_2").toggleClass('.comment_section hide');
        }
      });
      $('#profile_pic_3').click(function() {
        var className = $('#myComment_3').attr('class');
        console.log(className);
        if(className.indexOf("hide") != -1){
          $("#myComment_3").toggleClass('.comment_section show');
        }else{
          $("#myComment_3").toggleClass('.comment_section hide');
        }
      });



    $('#volume_off_button').click(function() {
        $("#volume_off_button").hide();
        $("#volume_on_button").show();
        voice_trigger=false;
        responsiveVoice.cancel();
    });

    $('#volume_on_button').click(function() {
        $("#volume_on_button").hide();
        $("#volume_off_button").show();
        voice_trigger=true;    
    });
    var slider = document.getElementById("myRange");
    var output = document.getElementById("demo");
    slider.value=0;
    slider.max=Math.floor(matchInfo.log.length/2)-1;
    output.innerHTML = 0;

    slider.oninput = function() {
    output.innerHTML = this.value;
    }
    
  });

function play(){
    $("#playbutton").hide();
    $("#pausebutton").show();
    change=false;
    counter++;
    startInterval(game_data[counter].runTime*play_speed);
}
function pause(){
    $("#pausebutton").hide();
    $("#playbutton").show();
    change=true;
    clearInterval(intervalId);
    clearTimeout(timeOutId);
    counter=$("#myRange").val();
    d3.selectAll("rect").remove();
    d3.selectAll("image").remove();
    set_profile_pic();
    rearrange_tiles(game_data[counter].player_tile[0].current,0);
    rearrange_tiles(game_data[counter].player_tile[1].current,1);
    rearrange_tiles(game_data[counter].player_tile[2].current,2);
    rearrange_tiles(game_data[counter].player_tile[3].current,3);
    set_current_played_tile();
}