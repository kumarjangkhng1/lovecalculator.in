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
		var resultsh = document.getElementById('resultsh');
		resultsh.style['font-size']='40px';
	    resultsh.value = Math.floor(Math.random()*100) + "%";
		document.getElementById('notify').style['display']='block';
		console.log('hellow');
	}


}
