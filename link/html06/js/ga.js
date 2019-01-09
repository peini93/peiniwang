var _gaq = _gaq || [];
//UA-41095150-1
_gaq.push(['_setAccount', 'UA-41095150-1']);

(function() {
	var ga = document.createElement('script');
	ga.type = 'text/javascript'; ga.async = true;
	ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	var s = document.getElementsByTagName('script')[0]; 
	s.parentNode.insertBefore(ga, s);
})();


function addPageView(str) {
	//alert(str);
	_gaq.push(['_trackPageview',str]);
}


function addEvent(evt,str){
	//alert('evt : ' + evt + ' , str : '+str);
	//console.log('evt : ' + evt + ' , str : '+str);
	_gaq.push(['_trackEvent',evt,str]);
}