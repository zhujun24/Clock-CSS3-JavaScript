window.onload = function() {
	var sec = document.getElementById('sec');
	var min = document.getElementById('min');
	var hour = document.getElementById('hour');

	function go() {
		var myDate = new Date();
		var s = myDate.getSeconds();
		var m = myDate.getMinutes();
		var h = myDate.getHours();
	    var iSec = s;
	    var iMin = m*6 + parseInt(s/10);
	    var iHour = (h%12)*30 + parseInt(m/2);//获取的时间为24h制
	    var deg = new Array();
        for (var i = 0; i < 360; i++) {
    		deg[i] = 'rotate(' + i + 'deg)';
    	};

    	iSec = iSec*6;
		sec.style.webkitTransform = deg[iSec];
		sec.style.transform = deg[iSec];

		min.style.webkitTransform = deg[iMin];
		min.style.transform = deg[iMin];
		
		hour.style.webkitTransform = deg[iHour];
		hour.style.transform = deg[iHour];
	}
	go();
	setInterval(go,1000);
};