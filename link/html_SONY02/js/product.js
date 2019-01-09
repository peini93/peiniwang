//全域變數
var gv = gv || {};
gv.minW=1000;//最小寬
gv.minH=800;//最小高
gv.nowNum=0;

var sec=1.3;
var showSec=0.6;

$(document).ready(function() {
    window.onresize = Resize;
    Resize();

    $('body').jpreLoader({splashID: "#jSplash",loaderVPos: '41%',autoClose: true});
    setSubBtn();
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
        gv.winW=gv.minW;
		$("body").css('overflow-x','auto');
        $("#container").css('width',1000 + 'px');
        $(".area").css('width',1000 + 'px');
    	

    }else{
    	$("body").css('overflow-x','hidden');
        $("#container").css('width',gv.winW);
    	$(".area").css('width',gv.winW);
        
    };


	if(gv.winH < gv.minH){
        gv.winH=gv.minH;
		$("body").css('overflow-y','auto');
    	$("#container").css('height',800 + 'px');
        $("#main").css('height',695 + 'px');

    }else{
    	$("body").css('overflow-y','hidden');
    	$("#container").css('height',gv.winH);
        $("#main").css('height',gv.winH-105);

    };

    gv.dw = parseInt($("#container").css('width'))-gv.minW;
    gv.dh = parseInt($("#container").css('height'))-gv.minH;

    $("#product_index .index695").css('left',(gv.dw/2));
    $("#subMenu").css({top:260+(gv.dh/2)});

    toCenter($(".p_img1"),95,220);
    toCenter($(".p_word1"),130,20);
    toCenter($(".pbtn_1"),408,29);

    toCenter($(".p_word2"),130,20);
    toCenter($(".pbtn_2"),422,29);

    toCenter($(".p_word3"),130,20);
    toCenter($(".pbtn_3_1"),422,29);
    toCenter($(".pbtn_3_2"),422,197);

    toCenter($(".p_word4"),130,20);
    toCenter($(".pbtn_4"),308,28);

    toCenter($(".p_word5"),130,20);
    toCenter($(".pbtn_5"),406,28);

    goProducts(gv.nowNum);
}


function toCenter(_m,_top,_left){
    _m.css({top:_top+(gv.dh/2),left:_left+(gv.dw/2)});
}


function setSubBtn(){
    $("#subMenu a").bind("mouseover",function(){
        TweenMax.to($(this), 0.5, {width:155,left:0});
    });
    
    $("#subMenu a").bind("mouseout",function(){
        TweenMax.to($(this), 0.5, {width:25,left:130});
    });
}


function goProducts(n){
    gv.nowNum=n;
    TweenMax.pauseAll();
    TweenMax.killAll();

    chkBG();
    if(gv.nowNum==0){
        TweenMax.to($('#product_index'), showSec, {autoAlpha:1});
        TweenMax.to($('#subMenu'), showSec, {autoAlpha:0});
        TweenMax.to($('#z1phone'), showSec, {autoAlpha:0});
        TweenMax.to($('#z1word'), showSec, {autoAlpha:0});
        TweenMax.to($('#z1btn'), showSec, {autoAlpha:0});
       
    }else{
        TweenMax.to($('#product_index'), showSec, {autoAlpha:0});
        TweenMax.to($('#subMenu'), showSec, {autoAlpha:1});
        TweenMax.to($('#z1phone'), showSec, {autoAlpha:1});
        TweenMax.to($('#z1word'), showSec, {autoAlpha:1});
        TweenMax.to($('#z1btn'), showSec, {autoAlpha:1});

        TweenMax.to($("#z1phone"), sec-0.2, {top:0,left:0-(gv.winW * (gv.nowNum-1)),ease:"Cubic.easeInOut"});
        TweenMax.to($("#z1word"), sec-0.3, {top:0,left:0-(gv.winW * (gv.nowNum-1)),ease:"Cubic.easeInOut"});
        TweenMax.to($("#z1btn"), sec, {top:0,left:0-(gv.winW * (gv.nowNum-1)),ease:"Cubic.easeInOut"});
    }	
}


function chkBG(){
    switch(gv.nowNum){
        case 0:
            showHideBG(0,0,0,0,0);
        break;

        case 1:
            showHideBG(1,0,0,0,0);
        break; 

        case 2:
            showHideBG(0,1,0,0,0);
        break;

        case 3:
            showHideBG(0,0,1,0,0);
        break;

        case 4:
            showHideBG(0,0,0,1,0);
        break;

        case 5:
            showHideBG(0,0,0,0,1);
        break;
    }
}

function showHideBG(a1,a2,a3,a4,a5){
    TweenMax.to($('.areabg1'), showSec, {autoAlpha:a1});
    TweenMax.to($('.areabg2'), showSec, {autoAlpha:a2});
    TweenMax.to($('.areabg3'), showSec, {autoAlpha:a3});
    TweenMax.to($('.areabg4'), showSec, {autoAlpha:a4});
    TweenMax.to($('.areabg5'), showSec, {autoAlpha:a5});
}