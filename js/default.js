var time = 300;


//カウンドダウン表示
    function count_down(){
        if(count === 1){
            var display = document.getElementById("default");
            display.innerHTML = "TIME UP!";
            clearInterval(stp);
        } else {
            count--;
            min = parseInt(count / 60);
            sec = count % 60;
            var count_down = document.getElementById("default");
            count_down.innerHTML = ("0"+min).slice(-2) +"：" + ("0"+sec).slice(-2);
        }
    }　

//カウントダウン表示
var Counter = function(){
  
  //document.getElementById("jikan").style.display="block";
  
  var timeShow_M = 0;
  var timeShow_S;
  
  //分と秒を設定
  timeShow_M = Math.floor(time / 60);
  timeShow_S = time % 60;
  
  //分と秒を表示
  //document.write("<div id=jikan>", timeShow_M, ":", timeShow_S, "</div>");
  document.ktimer.counter.value("<div id=jikan>", timeShow_M, ":", timeShow_S, "</div>");
  /*= count_format(count);*/
}

//滅亡ボタン押した？
var downfall = function(){
  if(ret == true){
    time -= 10;
  }
}

//毎秒処理の中身、カウントダウン
var update = function(){
  do{
      if(time === 0){
       break;
      } 
      time--;
      Counter(time);
      refresh();
  }while(true);
}

//update関数の処理時間設定
var refresh = function(){
  setTimeout(update, 1000);
}

update();
