//全域變數
var gv = gv || {};
gv.minW=1000;//最小寬
gv.minH=800;//最小高

$(document).ready(function() {
    window.onresize = Resize;
    Resize();

    $('body').jpreLoader({splashID: "#jSplash",loaderVPos: '41%',autoClose: true}, function() {
        TweenMax.from($('.index_txt'), 1, {autoAlpha:0,left:-5});
        TweenMax.from($('.index_pro'), 1, {autoAlpha:0,left:690});
        TweenMax.from($('.i_btn1'), 1, {autoAlpha:0,top:667});
        TweenMax.from($('.i_btn2'), 1, {autoAlpha:0,top:667});
    });

});


function log(pString) {
	//console.log(pString);
}


function Resize() {
	gv.winW = $(window).width(); //視窗的寬
	gv.winH = $(window).height(); //視窗的高；也就是一個單元的高度
	gv.scaleX = gv.winW/gv.minW;//依寬為主的縮放值
	gv.scaleY = gv.winH/gv.minH;//依高為主的縮放值
	
   
	if(gv.winW < gv.minW){
		$("body").css('overflow-x','auto');
    	$("#container").css('width',1000 + 'px');
		$(".index695").css('left',0 + 'px');
		

    }else{
    	$("body").css('overflow-x','hidden');
    	$("#container").css('width',gv.winW);
		$(".index695").css('left',(gv.winW-1000)/2);

    };


	if(gv.winH < gv.minH){
		$("body").css('overflow-y','auto');
    	$("#container").css('height',800 + 'px');
        $("#main").css('height',695 + 'px');
		$(".index695").css('top',0 + 'px');

    }else{
    	$("body").css('overflow-y','hidden');
    	$("#container").css('height',gv.winH);
        $("#main").css('height',gv.winH-105);//105是header加footer的高度
		$(".index695").css('top',(gv.winH-695-105)/8);

    };

}
