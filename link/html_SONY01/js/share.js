function share(type,s) {

    var url = "http://ashlieworks.com/test/sonyZ/?s="+s;
    url = encodeURIComponent(url);

    var _href;
    switch(type){
		case 'f':
			_href = "http://www.facebook.com/sharer.php?u=" + url;
			break;
    }

    window.open(_href);
}
