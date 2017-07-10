var time = 300;

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
  refresh();
}

//update関数の処理時間設定
var refresh = function(){
  setTimeout(update, 1000);
}
update();


//カウントダウンの時間を加速させるプログラム

//カウントダウンを表示するためのプログラム

//時計以外の装飾のためのプログラム

//ウィンドウっぽいものを表示するプログラム
