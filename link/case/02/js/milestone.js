//全域變數
var gv = gv || {};
gv.minW=1000;//最小寬
gv.minH=760;//最小高
gv.nowNum=0;
gv.tempNum=0;
gv.autoSec=5000;

$(document).ready(function() {
    $('body').jpreLoader({splashID: "#jSplash",loaderVPos: '41%',autoClose: true}, 
    function() {
        $('#container').fadeIn(500,function(){
            intervalId=setInterval("autoRun()", gv.autoSec);
        });

    });
    window.onresize = Resize;
    Resize();

    setAllyearBtn();
    setYearBtnCSS();

});


function autoRun(){
    if(gv.nowNum<17){
        gv.nowNum+=1;
    }else{
        gv.nowNum=0
    }

    log(gv.nowNum);
    goContent();
}



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
    	$("#container").css('height',760 + 'px');
        $("#main").css('height',655 + 'px');

    }else{
    	$("body").css('overflow-y','hidden');
    	$("#container").css('height',gv.winH);
        $("#main").css('height',gv.winH-105);//105是header加footer的高度

    };


    gv.dw = parseInt($("#container").css('width'))-gv.minW;
    gv.dh = parseInt($("#container").css('height'))-gv.minH;

    $("#titleWord").css({top:0,left:0+(gv.dw/2)});
    $("#yearMenu").css({top:620+(gv.dh),left:0+(gv.dw/2)});
    $("#allphone").css({top:0+(gv.dh/2),left:0+(gv.dw/2)-(1000 * gv.nowNum)});
    $("#allword").css({top:0+(gv.dh/2),left:0+(gv.dw/2)-(1000 * gv.nowNum)});
    $("#alltime").css({top:0+(gv.dh/2),left:0+(gv.dw/2)-(1000 * gv.nowNum)});
    $("#bgBall1").css({top:0,left:0-(1000 * gv.nowNum)});
    $("#bgBall2").css({top:0,left:0+(gv.dw/2)-(1000 * gv.nowNum)});
    $("#bgBall3").css({top:0,left:0+(gv.dw/2)-(1000 * gv.nowNum)});

}

function setAllyearBtn(){
    var _num=$("#yearMenu ul li").length;
    log(_num);
    for (var i = 0; i < _num; i++) {
        var _btn=$("#yearMenu ul li:nth-child("+(i+1)+") a");
        _btn.attr("num",i);
        _btn.bind( "click", yearClick);
        _btn.bind( "mouseover", yearBtnOver);
        _btn.bind( "mouseout", yearBtnOut);
    };
}

function setYearBtnCSS(){
    var _num=$("#yearMenu ul li").length;
    for (var i = 0; i < _num; i++) {
        var _btn=$("#yearMenu ul li:nth-child("+(i+1)+") a");
        _btn.removeClass( "selected" );
    };

    var _nowBtn=$("#yearMenu ul li:nth-child("+(gv.nowNum+1)+") a");
    _nowBtn.addClass( "selected" );
}


function yearBtnOver(){
    clearInterval(intervalId);
}

function yearBtnOut(){
    intervalId=setInterval("autoRun()", gv.autoSec);
}


function yearClick(){
    gv.tempNum=gv.nowNum;
    gv.nowNum=parseInt($(this).attr("num"));
    //log(gv.tempNum);
    //log(gv.nowNum);
    
    goContent();
}

function goContent(){
    setYearBtnCSS();

    //var dd=Math.abs(parseInt(gv.nowNum-gv.tempNum));
    //log("dd="+dd);
    //var sec=1*dd;
    var sec=1;

    TweenMax.pauseAll();
    TweenMax.killAll();
    
    TweenMax.to($("#allphone"), sec-0.2, {top:0+(gv.dh/2),left:0+(gv.dw/2)-(1000 * gv.nowNum),ease:"Cubic.easeInOut"});
    TweenMax.to($("#allword"), sec-0.1, {top:0+(gv.dh/2),left:0+(gv.dw/2)-(1000 * gv.nowNum),ease:"Cubic.easeInOut"});
    TweenMax.to($("#alltime"), sec, {top:0+(gv.dh/2),left:0+(gv.dw/2)-(1000 * gv.nowNum),ease:"Cubic.easeInOut"});
    TweenMax.to($("#bgBall1"), sec+0.2, {top:0,left:0-(1000 * gv.nowNum),ease:"Cubic.easeInOut"});
    TweenMax.to($("#bgBall2"), sec+0.1, {top:0,left:0+(gv.dw/2)-(1000 * gv.nowNum),ease:"Cubic.easeInOut"});
    TweenMax.to($("#bgBall3"), sec+0.2, {top:0,left:0+(gv.dw/2)-(1000 * gv.nowNum),ease:"Cubic.easeInOut"});    
}


function showQuiz(){
    clearInterval(intervalId);
    var _m=$("#quiz");
    _m.attr("src","quiz.html");
    _m.fadeIn("slow");
}

function closeQuiz(){
    var _m=$("#quiz");
    _m.fadeOut("slow",function(){
        _m.attr("src","");
    });
    intervalId=setInterval("autoRun()", gv.autoSec);
}