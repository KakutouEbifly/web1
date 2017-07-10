var time = 300;

//カウントダウン表示
var Counter = function(){
}

//毎秒処理の中身、カウントダウン
var update = function(){
  if(time === 0){
    break;
  } 
  function downfall{
    if(ret == true){
      time -= 10;
    }
  }
  time--;
  Counter();
  refresh();
}

//update関数の処理時間設定
var refresh = function(){
  setTimeout(update, 1000);
}
update();
//時計以外の装飾のためのプログラム
