var sapce = 1050;


var downfall(){

	// 「OK」時の処理開始 ＋ 確認ダイアログの表示
	if(window.confirm('滅亡')){
		location.href = "https://matome.naver.jp/odai/2146885392202874001";
	}

	// 「キャンセル」時の処理開始
	else{
		window.alert('キャンセルされました'); // 警告ダイアログを表示
	}
   
}

var time(){
    space -= 50;
    
    if(space == 0){
        location.href = "https://matome.naver.jp/odai/2146885392202874001";
    }
    setTimeout(downfall, space);
    setTimeout(time, space);
}

var flag(){
	downfall();
	time();
}
