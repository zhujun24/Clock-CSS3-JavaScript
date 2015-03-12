window.onload = function() {
	var sec = document.getElementById('sec');
	var min = document.getElementById('min');
	var hour = document.getElementById('hour');

	function deg(i) {
		return 'rotate(' + i + 'deg)';
	}

	function go() {
		var myDate = new Date();
		var s = myDate.getSeconds();
		var m = myDate.getMinutes();
		var h = myDate.getHours();
	    var iSec = 6*s;
	    var iMin = m*6 + parseInt(s/10);
	    var iHour = (h%12)*30 + parseInt(m/2)+ parseInt(s/120);

		sec.style.transform = deg(iSec);
		min.style.transform = deg(iMin);
		hour.style.transform = deg(iHour);
	}
	go();
	setInterval(go,1000);
};