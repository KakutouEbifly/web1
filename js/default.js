var time = 300;

//カウントダウン表示
var Counter = function(){
  
  //document.getElementById("jikan").style.display="block";
  
  var timeShow_M = 0;
  var timeShow_S;
  
  //分と秒を設定
  if(time < 60){
    timeShow_S = time;
  }else{
    timeShow_M = Math.floor(time/60);
    timeShow_S = time - (timeShow_M * 60);
  }
  
  //分と秒を表示
  if(time < 60){
    document.write("<div id=jikan>", "0:", timeShow_S, "</div>");
  }else{
    document.write("<div id=jikan>", timeShow_M, ":", timeShow_S, "</div>");
  }
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
      //downfall();
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
