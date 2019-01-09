//全域變數
var gv = gv || {};
gv.minW=1000;//最小寬
gv.minH=760;//最小高

var sx=0;

$(document).ready(function() {
    $('body').jpreLoader({splashID: "#jSplash",loaderVPos: '41%',autoClose: true});
    window.onresize = Resize;
    Resize();
    $(window).scroll(chkSX);
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

/*	if(gv.winH < gv.minH){
		$("body").css('overflow-y','auto');
    	$("#container").css('height',760 + 'px');
        //$("#main").css('height',655 + 'px');

    }else{
    	$("body").css('overflow-y','hidden');
    	$("#container").css('height',gv.winH);
        $("#main").css('height',gv.winH-105);//105是header加footer的高度
    };*/

    //gv.dw = parseInt($("#container").css('width'))-gv.minW;
    //gv.dh = parseInt($("#container").css('height'))-gv.minH;

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
    
    $('.newsbg1_1').css('background-position-y',0+parseInt(-sx/7));
    $('.news1_1').css('top',65+parseInt(-sx/2));
    $('.news1_2').css('top',-65+650-sx);
    $('.newsbar1').css('top',460-(650/5)+(sx/5));

    $('.newsbg2_1').css('background-position-y',0+parseInt(-sx/5));
    $('.news2_1').css('top',40+parseInt(+sx/2));
    $('.newsbg2_2').css('background-position-y',0+650-sx);
    $('.news2_2').css('top',90+(650/3)-(sx/3));
    $('.news2_3').css('top',70+(650*2)-sx);
    $('.newsbar2').css('top',480+(650*2/2)-(sx/2));
    $('.news2_5').css('top',-215+(650*3)-sx);
    $('.news2_6').css('top',530+(650*3/5)-(sx/5));

    $('.newsbg4_1').css('background-position-y',0+parseInt(-sx/5));
    $('.news4_1').css('top',415+parseInt(+sx/2));
    $('.newsbg4_2').css('background-position-y',-10+parseInt(-sx/7));
    $('.newsbar4').css('top',460+(650/2)-(sx/2));
    $('.newsbg4_3').css('background-position-y',50+parseInt(-sx/7));
    $('.news4_3').css('top',520+(650*2/5)-(sx/5));

    $('.news5_1').css('top',32+parseInt(+sx/2));
    //$('.newsbg5_2').css('background-position-y',-108+(650*2/6)-(sx/6));
    $('.news5_2').css('top',55+(650*2/2)-(sx/2));
	$('.news5_3').css('top',55+(650/3)-(sx/3));

    chkSubMenu();
}

function gotoArea(n){
    TweenMax.to($('html,body'),1.2,{scrollTop:(n*650)});
    //subBallBtn(n+1);
}

function chkSubMenu(){
		    //次選單
		    if(sx>=0 && sx<650){
		        subBallBtn(1);
		    }else if(sx>=650 && sx<1300){
		        subBallBtn(2);
		    }else if(sx>=1300 && sx<1950){
		        subBallBtn(3);
		    }else if(sx>=1950){
		        subBallBtn(4);
		    }
}