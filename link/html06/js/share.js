function share() {
	//分享的連結
    var url = "http://sakura.2of3.net/index.aspx";
    url = encodeURIComponent(url);

    var _href;
    _href = "http://www.facebook.com/sharer.php?u=" + url;

    window.open(_href);
}
