//全域變數
var gv = gv || {};
gv.minW=1000;//最小寬
gv.minH=800;//最小高
gv.nowNum=0;
gv.tempNum=0;

var sx=0;
var is3_2=is3_2 || 0;
//dconsole.log("is3_2="+is3_2);

$(document).ready(function() {
    $('body').jpreLoader({splashID: "#jSplash",loaderVPos: '41%',autoClose: true});
    window.onresize = Resize;
    Resize();

	gv.pLength=$('.p_inner').length;
	gv.pH1=$('.p_inner:eq(0)').height();
	gv.pH2=$('.p_inner:eq(1)').height();
	gv.pH3=$('.p_inner:eq(2)').height();
	gv.pH4=$('.p_inner:eq(3)').height();
	gv.pH5=$('.p_inner:eq(4)').height();
	gv.pH6=$('.p_inner:eq(5)').height();
	gv.pH7=$('.p_inner:eq(6)').height();
	gv.pH8=$('.p_inner:eq(7)').height();
	gv.pH9=$('.p_inner:eq(8)').height();
	gv.pH10=$('.p_inner:eq(9)').height();
	gv.pH11=$('.p_inner:eq(10)').height();
	gv.pH12=$('.p_inner:eq(11)').height();
	//console.log(gv.pH2);

    $(window).scroll(chkSX);
	setMdcBtn();
	chkSX();
	setAlldateBtn();
    setDateBtnCSS();
});


function log(pString) {
	//console.log(pString);
}


function Resize() {
	gv.winW = $(window).width(); //視窗的寬
	gv.winH = $(window).height(); //視窗的高；也就是一個單元的高度
	gv.scaleX = gv.winW/gv.minW;//依寬為主的縮放值
	gv.scaleY = gv.winH/gv.minH;//依高為主的縮放值
    gv.scrollD = $(document).height()-gv.winH;

    log("gv.scrollDfffff="+gv.scrollD);
    log("gv.winH="+gv.winH);

	if(gv.winW < gv.minW){
		$("body").css('overflow-x','auto');
        $("#container").css('width',1000 + 'px');

    }else{
    	$("body").css('overflow-x','hidden');
        $("#container").css('width',gv.winW);

    };
	
	/*if(gv.winH < gv.minH){
		$("body").css('overflow-y','auto');
    	$("#container").css('height',800 + 'px');
        $("#main").css('height',695 + 'px');

    }else{
    	$("body").css('overflow-y','hidden');
    	$("#container").css('height',gv.winH);
        $("#main").css('height',gv.winH-105);//105是header加footer的高度

    };*/

    chkSX();
}


function subBallBtn(n){
    for(var i=0;i<$('#subMenu ul li').length;i++){
        $('#subMenu ul li:nth-child('+(i+1)+') a').removeClass('selected');
    }
    $('#subMenu ul li:nth-child('+n+') a').addClass('selected');
}


function chkSX(){
    sx = $(this).scrollTop();
	 
    $('.p1_1').css('top',75-(sx/2));
    $('.btn1_1_1').css('top',465+(sx/2));
    $('.btn1_1_2').css('top',465+(sx/2));
    $('.p1_2').css('top',65+(650/3)-(sx/3));
    $('.p1_3').css('top',40+(650*2/2)-(sx/2));
    $('.p1_4').css('top',60+(650*3)-(sx));
    $('.p1_5').css('top',60+(650*3/4)-(sx/4));


    $('.p2_1').css('top',50-(sx/5));
    $('.p2_2').css('top',255-(sx/2));
    $('.p2_3').css('top',30+(650/2)-(sx/2));
    $('.p2_4').css('top',238+(650)-(sx));
    $('.p2_5').css('top',42+(650*2/2)-(sx/2));
    $('.p2_6').css('top',217+(650*2/4)-(sx/4));
    $('.p2_7').css('top',50+(650*3/2)-(sx/2));
    $('.p2_8').css('top',235+(650*3)-(sx));
    $('.p2_9').css('top',39+(650*4/2)-(sx/2));
    $('.p2_10').css('top',198+(650*4)-(sx));
	
	
	$('.p3_1').css('top',135-(sx/2));
	$('.p3_2').css('top',39+(650)-(sx));
	$('.p3_3').css('top',186+(650/2)-(sx/2));
	$('.p3_4').css('top',40+(650*2/4)-(sx/4));
	$('.p3_5').css('top',241+(650*2/2)-(sx/2));
	$('.p3_6').css('top',40+(650*3/2)-(sx/2));
	$('.p3_7').css('top',234+(650*3)-(sx));
	$('.p3_8').css('top',234+(650*3)-(sx));
	$('.pbg3_4 .pContent a.RLbtn_R').css('top',503+(650*3)-(sx));
	$('.pbg3_4 .pContent a.RLbtn_L').css('top',503+(650*3)-(sx));
	$('.p3_9').css('top',40+(650*4/2)-(sx/2));
	$('.p3_10').css('top',228+(650*4)-(sx));
	$('.p3_11').css('top',228+(650*4)-(sx));
	$('.pbg3_5 .pContent a.RLbtn_R').css('top',503+(650*4)-(sx));
	$('.pbg3_5 .pContent a.RLbtn_L').css('top',503+(650*4)-(sx));
	$('.p3_12').css('top',40+(650*5/2)-(sx/2));
	$('.p3_13').css('top',202+(650*5)-(sx));
	
	$('.p3-1_1').css('top',20-(sx/2));
	$('.p3-1_2').css('top',135-(sx/4));
	$('.p3-1_3').css('top',30+650-(sx));
	$('.p3-1_4').css('top',30+650-(sx));
	$('.p3-1_5').css('top',20+(650*2/2)-(sx/2));
	$('.p3-1_6').css('top',120+(650*2/3)-(sx/3));
	$('.p3-1_7').css('top',120+(650*2/3)-(sx/3));
	$('.p3-1_8').css('top',20+(650*3)-(sx));
    $('.p3-1_9').css('top',130+(650*3/2)-(sx/2));
	$('.p3-1_11').css('top',480+(650*4/2)-(sx/2));
	$('.p3-1_13').css('top',50+(650*4+850)/2-(sx/2));
	$('.p3-1_14').css('top',200+(650*4+850)-(sx));
    $('.p3-1_15').css('top',30+(650*4+850*2)-(sx));
    $('.ar_1').css('top',200+(650*4+850*2)/3-(sx/3));
	$('.ar').css('top',230+(650*4+850*2)/2-(sx/2));
	$('.p3-1_17').css('top',50+(650*5+850*3)/2-(sx/2));
	$('.pg01').css('top',50+(650*5+850*3)-(sx));
	$('.p3-1_19').css('top',50+(650*6+850*3)-(sx));
	$('.pg03').css('top',200+(650*6+850*3)/2-(sx/2));
	$('.p3-1_20').css('top',50+(650*7+850*3)/2-(sx/2));
	$('.pg04').css('top',280+(650*7+850*3)-(sx));
	$('.p3-1_21').css('top',50+(650*8+850*3)-(sx));
	
	$('.p5_1').css('top',100-(sx/2));
	$('.p5_2').css('top',100-(sx/3));
	$('.p5_3').css('top',20+(650/2)-(sx/2));
	$('.p5_4').css('top',320+(650/4)-(sx/4));
	$('.p5_5').css('top',30+(650*2/4)-(sx/4));
    $('.p5_6').css('top',200+(650*2/2)-(sx/2));
	$('.p5_7').css('top',30+(650*3/2)-(sx/2));
	$('.p5_8').css('top',20+(650*3/4)-(sx/4));
	$('.p5_9').css('top',50+(650*4/4)-(sx/4));
	$('.p5_10').css('top',330+(650*4/2)-(sx/2));
	$('.p5_11').css('top',60+(650*4/3)-(sx/3));
	$('.p5_12').css('top',50+(650*5/3)-(sx/3));
	$('.p5_13').css('top',20+(650*5/2)-(sx/2));
	
	$('.p4_1').css('top',50-(sx/2));
	$('.p4_2').css('top',390-(sx/3));
	$('.p4_3').css('top',40+(650/2)-(sx/2));
	$('.p4_4').css('top',170+(650/4)-(sx/4));
	$('.p4_5').css('top',30+(650*2/2)-(sx/2));
	$('.p4_6').css('top',140+(650*2/4)-(sx/4));
	$('.p4_7').css('top',40+(650*3/4)-(sx/4));
	$('.p4_8').css('top',140+(650*3/2)-(sx/2));



	if(is3_2==1){
	    $('.v5 video')[0].pause();
	    $('.v6 video')[0].pause();
	    $('.v8 video')[0].pause();
	    $('.v12 video')[0].pause();
	}

	chkSubMenu();
    
}

function gotoArea(n){
	var runD=0;
	for(var i=0;i<n;i++){
		runD=runD+$('.p_inner:eq('+i+')').height();
	}

    TweenMax.to($('html,body'),1.2,{scrollTop:(runD)});
	//TweenMax.to($('#main'),1.2,{top:75-(n*650)});
    //subBallBtn(n+1);
}

function chkSubMenu(){



    //次選單
    if(sx>=0 && sx<gv.pH1){
        subBallBtn(1);
    }else if(sx>=gv.pH1 && sx<gv.pH1+gv.pH2){
        subBallBtn(2);
    }else if(sx>=gv.pH1+gv.pH2 && sx<gv.pH1+gv.pH2+gv.pH3){
        subBallBtn(3);
    }else if(sx>=gv.pH1+gv.pH2+gv.pH3 && sx<gv.pH1+gv.pH2+gv.pH3+gv.pH4){
        subBallBtn(4);
    }else if(sx>=gv.pH1+gv.pH2+gv.pH3+gv.pH4 && sx<gv.pH1+gv.pH2+gv.pH3+gv.pH4+gv.pH5){
        subBallBtn(5);

    	if(sx==gv.pH1+gv.pH2+gv.pH3+gv.pH4){
			if(is3_2==1){
				palyV5();
			}
    	}


    }else if(sx>=gv.pH1+gv.pH2+gv.pH3+gv.pH4+gv.pH5 && sx<gv.pH1+gv.pH2+gv.pH3+gv.pH4+gv.pH5+gv.pH6){
        subBallBtn(6);

    	if(sx==gv.pH1+gv.pH2+gv.pH3+gv.pH4+gv.pH5){
			if(is3_2==1){
				palyV6();
			}
    	}

    }else if(sx>=gv.pH1+gv.pH2+gv.pH3+gv.pH4+gv.pH5+gv.pH6 && sx<gv.pH1+gv.pH2+gv.pH3+gv.pH4+gv.pH5+gv.pH6+gv.pH7){
        subBallBtn(7);
    }else if(sx>=gv.pH1+gv.pH2+gv.pH3+gv.pH4+gv.pH5+gv.pH6+gv.pH7 && sx<gv.pH1+gv.pH2+gv.pH3+gv.pH4+gv.pH5+gv.pH6+gv.pH7+gv.pH8){
        subBallBtn(8);

    	if(sx==gv.pH1+gv.pH2+gv.pH3+gv.pH4+gv.pH5+gv.pH6+gv.pH7){
			if(is3_2==1){
				palyV8();
			}
    	}

    }else if(sx>=gv.pH1+gv.pH2+gv.pH3+gv.pH4+gv.pH5+gv.pH6+gv.pH7+gv.pH8 && sx<gv.pH1+gv.pH2+gv.pH3+gv.pH4+gv.pH5+gv.pH6+gv.pH7+gv.pH8+gv.pH9){
        subBallBtn(9);
    }else if(sx>=gv.pH1+gv.pH2+gv.pH3+gv.pH4+gv.pH5+gv.pH6+gv.pH7+gv.pH8+gv.pH9 && sx<gv.pH1+gv.pH2+gv.pH3+gv.pH4+gv.pH5+gv.pH6+gv.pH7+gv.pH8+gv.pH9+gv.pH10){
        subBallBtn(10);
    }else if(sx>=gv.pH1+gv.pH2+gv.pH3+gv.pH4+gv.pH5+gv.pH6+gv.pH7+gv.pH8+gv.pH9+gv.pH10 && sx<gv.pH1+gv.pH2+gv.pH3+gv.pH4+gv.pH5+gv.pH6+gv.pH7+gv.pH8+gv.pH9+gv.pH10+gv.pH11){
        subBallBtn(11);
    }else if(sx>=gv.pH1+gv.pH2+gv.pH3+gv.pH4+gv.pH5+gv.pH6+gv.pH7+gv.pH8+gv.pH9+gv.pH10+gv.pH11){
        subBallBtn(12);

    	if(sx==gv.pH1+gv.pH2+gv.pH3+gv.pH4+gv.pH5+gv.pH6+gv.pH7+gv.pH8+gv.pH9+gv.pH10+gv.pH11){
			if(is3_2==1){
				palyV12();
			}
    	}

    }
}


function palyV5(){
	//TweenMax.killAll();
	TweenMax.to($('.p3-1_11'), 0, {autoAlpha:0});
	TweenMax.to($('.pbg3_5_2 .pContent a.RLbtn_R'), 0, {autoAlpha:0});
	TweenMax.to($('.vdmask'), 0.5, {autoAlpha:1});
    TweenMax.to($('.v5'), 0.5, {autoAlpha:1});
    $('.v5 video')[0].play();
    //$('.v6 video')[0].pause();
    //$('.v8 video')[0].pause();
    //$('.v12 video')[0].pause();


    $('.pbg3_5_2').css("background","#000");
    TweenMax.delayedCall(14,function(){
		TweenMax.to($('.p3-1_11'), 0.5, {autoAlpha:1});
		TweenMax.to($('.pbg3_5_2 .pContent a.RLbtn_R'), 0, {autoAlpha:1});
		TweenMax.to($('.vdmask'), 0.5, {autoAlpha:0});
		TweenMax.to($('.v5'), 0.5, {autoAlpha:0});
		$('.pbg3_5_2').css("background-image","url(img/pbg3_5_2_1.jpg)");
    });
}


function palyV6(){
	TweenMax.to($('.p3-1_13'), 0, {autoAlpha:0});
	TweenMax.to($('.p3-1_14'), 0, {autoAlpha:0});
	TweenMax.to($('.vdmask'), 0.5, {autoAlpha:1});
    TweenMax.to($('.v6'), 0.5, {autoAlpha:1});
    //$('.v5 video')[0].pause();
    $('.v6 video')[0].play();
    //$('.v8 video')[0].pause();
    //$('.v12 video')[0].pause();
    
    $('.pbg3_6_2').css("background","#000");
    TweenMax.delayedCall(10,function(){
		TweenMax.to($('.p3-1_13'), 0, {autoAlpha:1});
		TweenMax.to($('.p3-1_14'), 0, {autoAlpha:1});
		TweenMax.to($('.vdmask'), 0.5, {autoAlpha:0});
		TweenMax.to($('.v6'), 0.5, {autoAlpha:0});
		$('.pbg3_6_2').css("background-image","url(img/pbg3_6_2.jpg)");
		$('.pbg3_6_2').css("background-position","center");
    });
}


function palyV8(){
	TweenMax.to($('.p3-1_16'), 0, {autoAlpha:0});
	TweenMax.to($('.vdmask'), 0.5, {autoAlpha:1});
    TweenMax.to($('.v8'), 0.5, {autoAlpha:1});
    //$('.v5 video')[0].pause();
    //$('.v6 video')[0].pause();
    $('.v8 video')[0].play();
    //$('.v12 video')[0].pause();
    
    $('.pbg3_8_2').css("background","#000");
    TweenMax.delayedCall(46,function(){
		TweenMax.to($('.p3-1_16'), 0, {autoAlpha:1});
		TweenMax.to($('.vdmask'), 0.5, {autoAlpha:0});
		TweenMax.to($('.v8'), 0.5, {autoAlpha:0});
		$('.pbg3_8_2').css("background-image","url(img/pbg3_8_2.jpg)");
		$('.pbg3_8_2').css("background-position","center");
    });
}

function palyV12(){
	TweenMax.to($('.p3-1_21'), 0, {autoAlpha:0});
	TweenMax.to($('.pbg3_12_2 .pContent a.RLbtn_R'), 0, {autoAlpha:0});
	TweenMax.to($('.vdmask'), 0.5, {autoAlpha:1});
    TweenMax.to($('.v12'), 0.5, {autoAlpha:1});
    //$('.v5 video')[0].pause();
    //$('.v6 video')[0].pause();
    //$('.v8 video')[0].pause();
    $('.v12 video')[0].play();


    $('.pbg3_12_2').css("background","#000");
    TweenMax.delayedCall(38,function(){
		TweenMax.to($('.p3-1_11'), 0.5, {autoAlpha:1});
		TweenMax.to($('.pbg3_12_2 .pContent a.RLbtn_R'), 0, {autoAlpha:1});
		TweenMax.to($('.vdmask'), 0.5, {autoAlpha:0});
		TweenMax.to($('.v12'), 0.5, {autoAlpha:0});
		$('.pbg3_12_2').css("background-image","url(img/pbg3_12_2_1.jpg)");
		$('.pbg3_12_2').css("background-position","center");
    });
}




//=================================================================================================================================================
function setMdcBtn(){
    $(".m1_1_1 a").bind("mouseover",function(){
		var _n=parseInt($(this).attr( "num" ));
        TweenMax.to($('.m1_1_1 .dc'+_n), 0.5, {autoAlpha:1});
    });
    
    $(".m1_1_1 a").bind("mouseout",function(){
        TweenMax.to($('.m1_1_1 .dc1'), 0.5, {autoAlpha:0});
		TweenMax.to($('.m1_1_1 .dc2'), 0.5, {autoAlpha:0});
		TweenMax.to($('.m1_1_1 .dc3'), 0.5, {autoAlpha:0});
		TweenMax.to($('.m1_1_1 .dc4'), 0.5, {autoAlpha:0});
    });
	
    $(".m2_1_1 a").bind("mouseover",function(){
		var _n=parseInt($(this).attr( "num" ));
        TweenMax.to($('.m2_1_1 .dc'+_n), 0.5, {autoAlpha:1});
    });
    
    $(".m2_1_1 a").bind("mouseout",function(){
        TweenMax.to($('.m2_1_1 .dc1'), 0.5, {autoAlpha:0});
		TweenMax.to($('.m2_1_1 .dc2'), 0.5, {autoAlpha:0});
		TweenMax.to($('.m2_1_1 .dc3'), 0.5, {autoAlpha:0});
		TweenMax.to($('.m2_1_1 .dc4'), 0.5, {autoAlpha:0});
    });
	
	
    $(".p3_3 a").bind("mouseover",function(){
        TweenMax.to($('.p3_3 .dc1'), 0.5, {autoAlpha:0});
		TweenMax.to($('.p3_3 .dc2'), 0.5, {autoAlpha:0});
		TweenMax.to($('.p3_3 .dc3'), 0.5, {autoAlpha:0});
		var _n=parseInt($(this).attr( "num" ));
        TweenMax.to($('.p3_3 .dc'+_n), 0.5, {autoAlpha:1});
    });
    
    /*$(".p3_3 a").bind("mouseout",function(){
        TweenMax.to($('.p3_3 .dc1'), 0.5, {autoAlpha:0});
		TweenMax.to($('.p3_3 .dc2'), 0.5, {autoAlpha:0});
		TweenMax.to($('.p3_3 .dc3'), 0.5, {autoAlpha:0});
		var _n=parseInt($(this).attr( "num" ));
        TweenMax.to($('.p3_3 .dc'+_n), 0.5, {autoAlpha:1});
    });*/
		
}

function showMFB(p){
	if(p==1){
		TweenMax.to($('.m1_1_1'), 0.5, {autoAlpha:1});
		TweenMax.to($('.m2_1_1'), 0.5, {autoAlpha:0});
	}else if(p==2){
		TweenMax.to($('.m1_1_1'), 0.5, {autoAlpha:0});
		TweenMax.to($('.m2_1_1'), 0.5, {autoAlpha:1});
	}
}


function show3_4(p){
	if(p==1){
		TweenMax.to($('.p3_7'), 0.5, {autoAlpha:0});
		TweenMax.to($('.p3_8'), 0.5, {autoAlpha:1});
		TweenMax.to($('.pbg3_4 .pContent a.RLbtn_R'), 0, {autoAlpha:0});
		TweenMax.to($('.pbg3_4 .pContent a.RLbtn_L'), 0, {autoAlpha:1});
	}else if(p==2){
		TweenMax.to($('.p3_7'), 0.5, {autoAlpha:1});
		TweenMax.to($('.p3_8'), 0.5, {autoAlpha:0});
		TweenMax.to($('.pbg3_4 .pContent a.RLbtn_R'), 0, {autoAlpha:1});
		TweenMax.to($('.pbg3_4 .pContent a.RLbtn_L'), 0, {autoAlpha:0});
	}
}


function show3_5(p){
	if(p==1){
		TweenMax.to($('.p3_10'), 0.5, {autoAlpha:0});
		TweenMax.to($('.p3_11'), 0.5, {autoAlpha:1});
		TweenMax.to($('.pbg3_5 .pContent a.RLbtn_R'), 0, {autoAlpha:0});
		TweenMax.to($('.pbg3_5 .pContent a.RLbtn_L'), 0, {autoAlpha:1});
	}else if(p==2){
		TweenMax.to($('.p3_10'), 0.5, {autoAlpha:1});
		TweenMax.to($('.p3_11'), 0.5, {autoAlpha:0});
		TweenMax.to($('.pbg3_5 .pContent a.RLbtn_R'), 0, {autoAlpha:1});
		TweenMax.to($('.pbg3_5 .pContent a.RLbtn_L'), 0, {autoAlpha:0});
	}
}

function show3_6(p){
	if(p==1){
		TweenMax.to($('.p3-1_9'), 0.5, {autoAlpha:0});
		TweenMax.to($('.p3-1_10'), 0.5, {autoAlpha:1});
		TweenMax.to($('.pbg3_4_2 .pContent a.RLbtn_R'), 0, {autoAlpha:0});
		TweenMax.to($('.pbg3_4_2 .pContent a.RLbtn_L'), 0, {autoAlpha:1});
	}else if(p==2){
		TweenMax.to($('.p3-1_9'), 0.5, {autoAlpha:1});
		TweenMax.to($('.p3-1_10'), 0.5, {autoAlpha:0});
		TweenMax.to($('.pbg3_4_2 .pContent a.RLbtn_R'), 0, {autoAlpha:1});
		TweenMax.to($('.pbg3_4_2 .pContent a.RLbtn_L'), 0, {autoAlpha:0});
	}
}

function show3_7(p){
	if(p==1){
		$('.pbg3_5_2').css("background-image","url(img/pbg3_5_2_2.jpg)");
		TweenMax.to($('.v5'), 0.5, {autoAlpha:0});
		TweenMax.to($('.vdmask'), 0.5, {autoAlpha:0});
		TweenMax.to($('.p3-1_11'), 0.5, {autoAlpha:0});
		TweenMax.to($('.p3-1_12'), 0.5, {autoAlpha:1});
		TweenMax.to($('.timeshift'), 0.5, {autoAlpha:1});
		TweenMax.to($('.pbg3_5_2 .pContent a.RLbtn_R'), 0, {autoAlpha:0});
		TweenMax.to($('.pbg3_5_2 .pContent a.RLbtn_L'), 0, {autoAlpha:1});
	}else if(p==2){
		//$('.pbg3_5_2').css("background-image","url(img/pbg3_5_2_1.jpg)");
		//TweenMax.to($('.p3-1_11'), 0.5, {autoAlpha:1});
		TweenMax.to($('.p3-1_12'), 0.5, {autoAlpha:0});
		TweenMax.to($('.timeshift'), 0.5, {autoAlpha:0});
		//TweenMax.to($('.pbg3_5_2 .pContent a.RLbtn_R'), 0, {autoAlpha:1});
		TweenMax.to($('.pbg3_5_2 .pContent a.RLbtn_L'), 0, {autoAlpha:0});
		palyV5();
	}
}

function show3_8(p){
	if(p==1){
		TweenMax.to($('.p3-1_17'), 0.5, {autoAlpha:0});
		TweenMax.to($('.pg01'), 0.5, {autoAlpha:0});
		TweenMax.to($('.p3-1_18'), 0.5, {autoAlpha:1});
		TweenMax.to($('.pg02'), 0.5, {autoAlpha:1});
		TweenMax.to($('.pbg3_9_2 .pContent a.RLbtn_R'), 0, {autoAlpha:0});
		TweenMax.to($('.pbg3_9_2 .pContent a.RLbtn_L'), 0, {autoAlpha:1});
	}else if(p==2){
		TweenMax.to($('.p3-1_17'), 0.5, {autoAlpha:1});
		TweenMax.to($('.pg01'), 0.5, {autoAlpha:1});
		TweenMax.to($('.p3-1_18'), 0.5, {autoAlpha:0});
		TweenMax.to($('.pg02'), 0.5, {autoAlpha:0});
		TweenMax.to($('.pbg3_9_2 .pContent a.RLbtn_R'), 0, {autoAlpha:1});
		TweenMax.to($('.pbg3_9_2 .pContent a.RLbtn_L'), 0, {autoAlpha:0});
	}
}


function show3_9(p){
	if(p==1){
		$('.pbg3_12_2').css("background-image","url(img/pbg3_12_2_2.jpg)");
		TweenMax.to($('.v12'), 0.5, {autoAlpha:0});
		TweenMax.to($('.vdmask'), 0.5, {autoAlpha:0});
		TweenMax.to($('.p3-1_21'), 0.5, {autoAlpha:0});
		TweenMax.to($('.pg05'), 0.5, {autoAlpha:1});
		TweenMax.to($('.pbg3_12_2 .pContent a.RLbtn_R'), 0, {autoAlpha:0});
		TweenMax.to($('.pbg3_12_2 .pContent a.RLbtn_L'), 0, {autoAlpha:1});
	}else if(p==2){
		//$('.pbg3_12_2').css("background-image","url(img/pbg3_12_2_1.jpg)");
		//TweenMax.to($('.p3-1_21'), 0.5, {autoAlpha:1});
		TweenMax.to($('.pg05'), 0.5, {autoAlpha:0});
		//TweenMax.to($('.pbg3_12_2 .pContent a.RLbtn_R'), 0, {autoAlpha:1});
		TweenMax.to($('.pbg3_12_2 .pContent a.RLbtn_L'), 0, {autoAlpha:0});
		palyV12();
	}
}


/*var video = document.getElementsByTagName('video')[0];
video.onended = function(e) {
      alert('end');
}*/

/*var vid = document.getElementById('vid');
vid.addEventListener('ended', function() {
        alert('video ended');
        vid.load();
    },false);
function begin_playing(){

}*/

function setAlldateBtn(){
    var _num=$("#dateMenu ul li").length;
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
	to_show_function();
}


function to_show_function(){
	
	$('.b1').bind("click", function(){
    $('.pw4_1').fadeIn('slow');
    $('.pw4_2').fadeOut('slow');
    $('.pw4_3').fadeOut('slow');
    $('.pw4_4').fadeOut('slow');
    $('.pw4_5').fadeOut('slow')
    });
	
    $('.b2').bind("click", function(){
    $('.pw4_1').fadeOut('slow');
    $('.pw4_2').fadeIn('slow');
    $('.pw4_3').fadeOut('slow');
    $('.pw4_4').fadeOut('slow');
    $('.pw4_5').fadeOut('slow')
    });
	
	 $('.b3').bind("click", function(){
    $('.pw4_1').fadeOut('slow');
    $('.pw4_2').fadeOut('slow');
    $('.pw4_3').fadeIn('slow');
    $('.pw4_4').fadeOut('slow');
    $('.pw4_5').fadeOut('slow')
    });
	
	$('.b4').bind("click", function(){
    $('.pw4_1').fadeOut('slow');
    $('.pw4_2').fadeOut('slow');
    $('.pw4_3').fadeOut('slow');
    $('.pw4_4').fadeIn('slow');
    $('.pw4_5').fadeOut('slow')
    });
	
	$('.b5').bind("click", function(){
    $('.pw4_1').fadeOut('slow');
    $('.pw4_2').fadeOut('slow');
    $('.pw4_3').fadeOut('slow');
    $('.pw4_4').fadeOut('slow');
    $('.pw4_5').fadeIn('slow')
    })
	
	
   }
