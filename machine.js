	function checklove(){

		

	var resutl = document.getElementById('resultsh').value;
	if (resutl !='') {
		alert('Please Refrest Page');
		return;
	}else{
		var boyname = document.getElementById('boyname').value;
		var girlname = document.getElementById('girlname').value;
		if (boyname == '') {
			alert('Enter Please Your Name');
			return;
		}else if (girlname == '') {
			alert('Enter Please Lover Name');
			return;
		}
		var resultsh = document.getElementById('futureper').innerHTML = Math.floor(Math.random()*100);
		var resultsh1 = document.getElementById('futureper1').innerHTML = Math.floor(Math.random()*100) ;
		// resultsh.style['font-size']='40px';

		document.getElementById('resultsh').value=Number(resultsh)+Number(resultsh1) +'%';
		document.getElementById('notify').style['display']='block';
		console.log('hellow');
	}


}

var n = localStorage.getItem('on_load_counter');

if (n === null) {
  n = 0;
}
n++;

localStorage.setItem("on_load_counter", n);

nums = n.toString().split('').map(Number);
document.getElementById('CounterVisitor').innerHTML = '';
for (var i of nums) {
  document.getElementById('CounterVisitor').innerHTML += '<span class="counter-item">' + i + '</span>';
}
