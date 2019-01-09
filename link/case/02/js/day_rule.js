//全域變數
var gv = gv || {};
gv.minW=1000;//最小寬
gv.minH=1000;//最小高

$(document).ready(function() {
    $('body').jpreLoader({splashID: "#jSplash",loaderVPos: '41%',autoClose: true}, 
    function() {
        $('#container').fadeIn(500);
		$(".pro1").delay(100).animate({
          opacity: 1,
          top: 50
          }, 500 );
		 $(".pro2").delay(500).animate({
          opacity: 1,
          top: 150
          }, 500 );
    });
    window.onresize = Resize;
    Resize();
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

    }else{
    	$("body").css('overflow-x','hidden');
    	$("#container").css('width',gv.winW);

    };


	if(gv.winH < gv.minH){
		$("body").css('overflow-y','auto');
    	$("#container").css('height',1300 + 'px');
        $("#main").css('height',1300 + 'px');

    }else{
    	$("body").css('overflow-y','hidden');
    	$("#container").css('height',gv.winH);
        $("#main").css('height',gv.winH-105);//105是header加footer的高度

    };

}


