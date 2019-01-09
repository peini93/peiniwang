function HttpRequest(prc, url) {
	var http_request = false;
	
	if (window.XMLHttpRequest) {
		http_request = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
		try {
			http_request = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
        	try {
				http_request = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (e) {}
		}
	}

	if (http_request) {
		http_request.onreadystatechange = function() { 
			eval(prc + '(http_request)');
		};   
		http_request.open('GET', url, true);
		http_request.send(null);
	} else {
		return false;
	}
}

function HttpRequestTextResult(http_request) {
	if (http_request.readyState == 4) {
		if (http_request.status == 200) {
			result = http_request.responseText;
			if (result) {
				setweather(result);
			}
		}
	}
}

function weather(day) {
	if (day == 'weather-day1') {
		j = 0;
		document.getElementById('weather-day2').style.fontWeight = 'normal';
		document.getElementById('weather-day3').style.fontWeight = 'normal';
	} else if (day == 'weather-day2') {
		j = 1;
		document.getElementById('weather-day1').style.fontWeight = 'normal';
		document.getElementById('weather-day3').style.fontWeight = 'normal';
	} else {
		j = 2;
		document.getElementById('weather-day1').style.fontWeight = 'normal';
		document.getElementById('weather-day2').style.fontWeight = 'normal';
	}
	document.getElementById(day).style.fontWeight = 'bold';
	document.getElementById('weather').style.backgroundImage = 'url(http://attach2.mobile01.com/images/weather/' + wicon[j] + ')';	
}

function setweather(data) {
	if (data) {
		var wd = eval("("+data+")");
		if (wd.weather.length) {
			document.getElementById('weather').style.backgroundImage = 'url(http://attach2.mobile01.com/images/weather/'+wd.weather[0].icon+')';
			document.getElementById('weather-city').innerHTML = city[area];
			for (k=0; k<wd.weather.length; k++) {
				wicon[k] = wd.weather[k].icon;
				document.getElementById('weather-day'+(k+1)).innerHTML = wd.weather[k].wdate+'<br />'+wd.weather[k].cond+'<br />'+wd.weather[k].temp+'&deg;C';
			}
		}
	}
}

function Get_Cookie(name) {
	var start = document.cookie.indexOf(name + "=");
	var len = start + name.length + 1;
	if ((!start) && (name != document.cookie.substring(0, name.length))) {
		return null;
	}
	if (start == -1) return null;
	var end = document.cookie.indexOf(";", len);
	if (end == -1) end = document.cookie.length;
	return unescape(document.cookie.substring(len, end));
}

function changelocation() {
	var uc = Get_Cookie('loginstat');
	uc = parseInt(uc);
	if (!isNaN(uc) && uc == 1) {
		url = 'https://www.mobile01.com/profile.php?panel=personalinfo';		
	} else {
		url = 'login.php?link=%2Fprofile.php%3Fpanel%3Dpersonalinfo';
	}
	document.location = url;
}

var area = 1;
var city = new Array("基隆", "台北", "桃園", "新竹", "苗栗", "台中", "彰化", "南投", "雲林", "嘉義", "台南", "高雄", "屏東", "台東", "花蓮", "宜蘭", "澎湖", "金門", "馬祖");
var wicon = new Array('sunny.gif', 'sunny.gif', 'sunny.gif');

window.onload = function() {
	var wa = Get_Cookie('weather');
	var ts = Math.round((new Date()).getTime() / 1000); 
	wa = parseInt(wa);
	if (isNaN(wa) || wa < 0 || wa > 18) {
		wa = 1;
	}
	area = wa;
	HttpRequest('HttpRequestTextResult', 'weatherlocation.php?id='+wa+"&"+ts);
}
