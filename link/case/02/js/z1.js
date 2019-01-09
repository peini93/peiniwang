//全域變數
var gv = gv || {};
gv.minW=1000;//最小寬
gv.minH=760;//最小高
gv.nowNum=0;
gv.tempNum=0;


$(document).ready(function() {
    $('body').jpreLoader({splashID: "#jSplash",loaderVPos: '41%',autoClose: true});
    window.onresize = Resize;
    Resize();

    setAlldateBtn();
    setDateBtnCSS();


    $('.btn1_0909,.btn2_0909').fancybox({
        width: 1000,
        height: 650,
        minWidth  : 1000,
        minHeight : 650,
        maxWidth  : 1000,
        maxHeight : 650,
        closeBtn  : true,
        padding: 0,
        margin: 0,
        iframe: {
          scrolling: 'no',
          preload: true
        },
        helpers:{
            overlay:{
                closeClick : false
            }
        }
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
    	$(".area").css('width',1000 + 'px');

    }else{
    	$("body").css('overflow-x','hidden');
        $("#container").css('width',gv.winW);
    	$(".area").css('width',gv.winW);

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

    $("#titleZ1").css({top:0,left:0+(gv.dw/2)});
    $("#dateMenu").css({top:610+(gv.dh),left:275+(gv.dw/2)});


    toCenter($(".z1_0905"),210,85);
    toCenter($(".word_0905"),228,357);
    toCenter($(".btn_0905"),533,630);
    toCenter($(".fb_0905"),199,814);

    toCenter($(".z1_0906"),293,462);
    toCenter($(".word_0906"),180,81);
    toCenter($(".btn_0906"),524,129);
    toCenter($(".fb_0906"),199,538);

    toCenter($(".z1_0909"),235,26);
    toCenter($(".word_0909"),100,79);
    toCenter($(".btn1_0909"),463,555);
    toCenter($(".btn2_0909"),522,555);
    toCenter($(".fb_0909"),200,808);

    toCenter($(".z1_0910"),235,332);
    toCenter($(".word_0910"),228,81);
    toCenter($(".btn_0910"),524,112);
    toCenter($(".fb_0910"),199,438);

    toCenter($(".z1_0911"),202,10);
    toCenter($(".word_0911"),228,456);
    toCenter($(".btn_0911"),533,626);
    toCenter($(".fb_0911"),199,834);

    goNewspaper();
}


function toCenter(_m,_top,_left){
    _m.css({top:_top+(gv.dh/2),left:_left+(gv.dw/2)});
}


function setAlldateBtn(){
    var _num=$("#dateMenu ul li").length;
    //log(_num);
    for (var i = 0; i < _num; i++) {
        var _btn=$("#dateMenu ul li:nth-child("+(i+1)+") a");
        _btn.attr("num",i);
        _btn.bind( "click", dateClick);
    };
}

function setDateBtnCSS(){
    var _num=$("#dateMenu ul li").length;
    for (var i = 0; i < _num; i++) {
        var _btn=$("#dateMenu ul li:nth-child("+(i+1)+") a");
        _btn.removeClass( "selected" );
    };

    var _nowBtn=$("#dateMenu ul li:nth-child("+(gv.nowNum+1)+") a");
    _nowBtn.addClass( "selected" );
}

function dateClick(){
    gv.tempNum=gv.nowNum;
    gv.nowNum=parseInt($(this).attr("num"));
    log(gv.tempNum);
    log(gv.nowNum);
    goNewspaper();
}


function goNewspaper(){
    setDateBtnCSS();
    var sec=1;
    TweenMax.pauseAll();
    TweenMax.killAll();
    TweenMax.to($("#z1phone"), sec-0.2, {top:0,left:0-(gv.winW * gv.nowNum),ease:"Cubic.easeInOut"});
    TweenMax.to($("#z1word"), sec, {top:0,left:0-(gv.winW * gv.nowNum),ease:"Cubic.easeInOut"});
    TweenMax.to($("#z1btn"), sec, {top:0,left:0-(gv.winW * gv.nowNum),ease:"Cubic.easeInOut"});
}