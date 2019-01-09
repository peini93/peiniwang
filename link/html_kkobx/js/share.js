function share(type) {
    //分享的標題
	var title = 'Samsung Mook - 宅宅新聞';
    title = encodeURIComponent(title);
	
	//分享的小圖
    var img = "";
    img = encodeURIComponent(img);
	
	//分享的連結
    var url = "";
    url = encodeURIComponent(url);

    var _href;
    switch(type){
    case 'facebook':
        _href = "http://www.facebook.com/sharer.php?u=" + url;
    break;

    case 'plurk':
        _href = "http://www.plurk.com/?qualifier=shares&status=" + url + " (" + title + ")  " + img;
    break;

    case 'twitter':
        _href = "http://twitter.com/home/?status=" + title + " " + url;
    break;
    
    case 'gplus':
        _href = "https://plus.google.com/share?url=" + url;
    break;
    }

    window.open(_href);
}
