/* 画像化の部分以外、ライブラリを極力使わないバージョン */

function resetBoard(){
	var obj = document.querySelectorAll('[class^=tile]');
	for (var i in obj) {
		if (obj[i].className != 'tile01' ) {
			obj[i].className = 'tile01';					
		}
	}
}

function mkBoard() {
	
	if (document.querySelector('#pic_table > tbody')) {
		var element = document.getElementById('pic_table');
		element.innerHTML = "";
	}

	var num;  // 行列数
	num = window.prompt('ボードの大きさを入力してください。(5〜10)', 5);
	
	if (num < 5) {
		window.alert('5〜10の範囲で入力してください');
	} else if (num > 10) {
		window.alert('5〜10の範囲で入力してください');
	}

//入力された数だけ行をつくる
	var td_element =  '<td><div class="tile01" onclick="chgColor(this)"></div></td>';
	var td_elements =  td_element.repeat(num);
	var tr_element = '<tr>' + td_elements + '</tr>';

//入力された数だけ列をつくる	
	var table_elements = document.createElement('tbody');
	var tr_elements =  tr_element.repeat(num);
	table_elements.innerHTML = '<tbody>' + tr_elements + '</tbody>';

	var parent_obj = document.getElementById('pic_table'); 
	parent_obj.appendChild(table_elements);
}

function chgColor(obj) {
//タイルのクラスを取得して、クラス名を変える
	var classNames = obj.className;
	if (classNames == 'tile01' ) {
		obj.className = 'tile02';	
	} else if  (classNames == 'tile02' ) {
		obj.className = 'tile03';	
	} else if  (classNames == 'tile03' ) {
		obj.className = 'tile04';		
	} else if  (classNames == 'tile04' ) {
		obj.className = 'tile01';		
	}
}

function svBoard(){
    //HTML内に画像を表示
    html2canvas(document.getElementById('content_canvas'),{
    	onrendered: function(canvas){
        	//imgタグのsrcの中に、html2canvasがレンダリングした画像を指定する。
         	var imgData = canvas.toDataURL();
        	document.getElementById('download_img').src = imgData;
         	document.getElementById('download').href = imgData;
		    document.getElementById('download').click(); 
        }
    }); 
}


