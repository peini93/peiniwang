document.write('<div style="display:none"><img src="img/q1_a1.png"><img src="img/q1_a2.png"><img src="img/q1_a3.png"><img src="img/q2_a1.png"><img src="img/q2_a2.png"><img src="img/q2_a3.png"><img src="img/q3_a1.png"><img src="img/q3_a2.png"><img src="img/q3_a3.png"><img src="img/q10_a1.png"><img src="img/q10_a2.png"><img src="img/q10_a3.png"><img src="img/q4_a1.png"><img src="img/q4_a2.png"><img src="img/q4_a3.png"><img src="img/q5_a1.png"><img src="img/q5_a2.png"><img src="img/q5_a3.png"><img src="img/q6_a1.png"><img src="img/q6_a2.png"><img src="img/q6_a3.png"><img src="img/q7_a1.png"><img src="img/q7_a2.png"><img src="img/q7_a3.png"><img src="img/q8_a1.png"><img src="img/q8_a2.png"><img src="img/q8_a3.png"><img src="img/q9_a1.png"><img src="img/q9_a2.png"><img src="img/q9_a3.png"><img src="img/databg1.png"><img src="img/databg2.png"><img src="img/wbackbtn.png"><img src="img/wsendbtn.png"><img src="img/wclosebtn.png"></div>');

var wh; var ww;
var kidnum = 0;
var qasStar = 175;
var qasDis = -575;
var stayTime = 1;

function resize(){
	wh=$(window).height();
	ww=$(window).width();
	var wd=(ww-1000)/2;
	var hd=(wh-600)/2;

	if (ww<=1000) {
		$("#content").css("width",1000);

		$(".q1p1").css("left",448);
		$(".q1p2").css("left",555);
		$(".q1p3").css("left",745);
		$(".q1").css("left",38);
		$(".q1s1").css("left",133);
		$(".q1s2").css("left",268);
		$(".q1s3").css("left",353);
		$(".q1a").css("left",133);

		$(".q2p1").css("left",-186);
		$(".q2p2").css("left",38);
		$(".q2").css("left",457);
		$(".q2s1").css("left",553);
		$(".q2s2").css("left",639);
		$(".q2s3").css("left",725);
		$(".q2a").css("left",553);

		$(".q3p1").css("left",510);
		$(".q3p2").css("left",522);
		$(".q3").css("left",58);
		$(".q3s1").css("left",157);
		$(".q3s2").css("left",311);
		$(".q3s3").css("left",157);
		$(".q3a").css("left",157);

		$(".q4p1").css("left",250);
		$(".q4p2").css("left",210);
		$(".q4p3").css("left",10);
		$(".q4p4").css("left",125);
		$(".q4p5").css("left",95);
		$(".q4p6").css("left",195);
		$(".q4").css("left",527);
		$(".q4s1").css("left",620);
		$(".q4s2").css("left",716);
		$(".q4s3").css("left",812);
		$(".q4a").css("left",620);

		$(".q5p1").css("left",-270);
		$(".q5").css("left",573);
		$(".q5s1").css("left",673);
		$(".q5s2").css("left",762);
		$(".q5s3").css("left",851);
		$(".q5a").css("left",672);

		$(".q6p1").css("left",740);
		$(".q6p2").css("left",380);
		$(".q6p3").css("left",493);
		$(".q6p4").css("left",560);
		$(".q6").css("left",59);
		$(".q6s1").css("left",155);
		$(".q6s2").css("left",245);
		$(".q6s3").css("left",335);
		$(".q6a").css("left",155);

		$(".q7p1").css("left",55);
		$(".q7").css("left",305);
		$(".q7s1").css("left",414);
		$(".q7s2").css("left",580);
		$(".q7s3").css("left",746);
		$(".q7a").css("left",500);

		$(".q8p1").css("left",580);
		$(".q8p2").css("left",618);
		$(".q8p3").css("left",450);
		$(".q8p4").css("left",428);
		$(".q8p5").css("left",735);
		$(".q8").css("left",20);
		$(".q8s1").css("left",125);
		$(".q8s2").css("left",265);
		$(".q8s3").css("left",405);
		$(".q8a").css("left",125);

		$(".q9p1").css("left",-230);
		$(".q9p2").css("left",38);
		$(".q9p3").css("left",110);
		$(".q9p4").css("left",182);
		$(".q9").css("left",360);
		$(".q9s1").css("left",452);
		$(".q9s2").css("left",632);
		$(".q9s3").css("left",794);
		$(".q9a").css("left",545);

		$(".q10p1").css("left",435);
		$(".q10p2").css("left",35);
		$(".q10").css("left",63);
		$(".q10s1").css("left",159);
		$(".q10s2").css("left",245);
		$(".q10s3").css("left",331);
		$(".q10a").css("left",159);

	}else{
		$("#content").css("width",ww);

		$(".q1p1").css("left",448+wd);
		$(".q1p2").css("left",555+wd);
		$(".q1p3").css("left",745+wd);
		$(".q1").css("left",38+wd);
		$(".q1s1").css("left",133+wd);
		$(".q1s2").css("left",268+wd);
		$(".q1s3").css("left",353+wd);
		$(".q1a").css("left",133+wd);

		$(".q2p1").css("left",-186+wd);
		$(".q2p2").css("left",38+wd);
		$(".q2").css("left",457+wd);
		$(".q2s1").css("left",553+wd);
		$(".q2s2").css("left",639+wd);
		$(".q2s3").css("left",725+wd);
		$(".q2a").css("left",553+wd);

		$(".q3p1").css("left",510+wd);
		$(".q3p2").css("left",522+wd);
		$(".q3").css("left",58+wd);
		$(".q3s1").css("left",157+wd);
		$(".q3s2").css("left",311+wd);
		$(".q3s3").css("left",157+wd);
		$(".q3a").css("left",157+wd);

		$(".q4p1").css("left",250+wd);
		$(".q4p2").css("left",210+wd);
		$(".q4p3").css("left",10+wd);
		$(".q4p4").css("left",125+wd);
		$(".q4p5").css("left",95+wd);
		$(".q4p6").css("left",195+wd);
		$(".q4").css("left",527+wd);
		$(".q4s1").css("left",620+wd);
		$(".q4s2").css("left",716+wd);
		$(".q4s3").css("left",812+wd);
		$(".q4a").css("left",620+wd);

		$(".q5p1").css("left",-270+wd);
		$(".q5").css("left",573+wd);
		$(".q5s1").css("left",673+wd);
		$(".q5s2").css("left",762+wd);
		$(".q5s3").css("left",851+wd);
		$(".q5a").css("left",672+wd);

		$(".q6p1").css("left",740+wd);
		$(".q6p2").css("left",380+wd);
		$(".q6p3").css("left",493+wd);
		$(".q6p4").css("left",560+wd);
		$(".q6").css("left",59+wd);
		$(".q6s1").css("left",155+wd);
		$(".q6s2").css("left",245+wd);
		$(".q6s3").css("left",335+wd);
		$(".q6a").css("left",155+wd);

		$(".q7p1").css("left",55+wd);
		$(".q7").css("left",305+wd);
		$(".q7s1").css("left",414+wd);
		$(".q7s2").css("left",580+wd);
		$(".q7s3").css("left",746+wd);
		$(".q7a").css("left",500+wd);

		$(".q8p1").css("left",580+wd);
		$(".q8p2").css("left",618+wd);
		$(".q8p3").css("left",450+wd);
		$(".q8p4").css("left",428+wd);
		$(".q8p5").css("left",735+wd);
		$(".q8").css("left",20+wd);
		$(".q8s1").css("left",125+wd);
		$(".q8s2").css("left",265+wd);
		$(".q8s3").css("left",405+wd);
		$(".q8a").css("left",125+wd);

		$(".q9p1").css("left",-230+wd);
		$(".q9p2").css("left",38+wd);
		$(".q9p3").css("left",110+wd);
		$(".q9p4").css("left",182+wd);
		$(".q9").css("left",360+wd);
		$(".q9s1").css("left",452+wd);
		$(".q9s2").css("left",632+wd);
		$(".q9s3").css("left",794+wd);
		$(".q9a").css("left",545+wd);

		$(".q10p1").css("left",435+wd);
		$(".q10p2").css("left",35+wd);
		$(".q10").css("left",63+wd);
		$(".q10s1").css("left",159+wd);
		$(".q10s2").css("left",245+wd);
		$(".q10s3").css("left",331+wd);
		$(".q10a").css("left",159+wd);
	};

	if(wh<=600){
		$("#content").css("height",600);
		$(".finish").css("height",600);
	}else{
		$("#content").css("height",wh);
		$(".finish").css("height",wh);
	};
}

window.onresize = resize;

$(document).ready( function() {
	$('body').jpreLoader({splashID: "#jSplash",	loaderVPos: '41%',	autoClose: true	}, function() {			
		q1ani();
	});
	TweenMax.to($('.qslide'), 0, {marginTop: qasStar,ease:Cubic.easeInOut});
	resize();
	$('.q1s1').bind("click", q1s1);
	$('.q1s2').bind("click", q1s2);
	$('.q1s3').bind("click", q1s3);
	$('.q2s1').bind("click", q2s1);
	$('.q2s2').bind("click", q2s2);
	$('.q2s3').bind("click", q2s3);
	$('.q3s1').bind("click", q3s1);
	$('.q3s2').bind("click", q3s2);
	$('.q3s3').bind("click", q3s3);
	$('.q10s1').bind("click", q10s1);
	$('.q10s2').bind("click", q10s2);
	$('.q10s3').bind("click", q10s3);
	$('.q4s1').bind("click", q4s1);
	$('.q4s2').bind("click", q4s2);
	$('.q4s3').bind("click", q4s3);
	$('.q5s1').bind("click", q5s1);
	$('.q5s2').bind("click", q5s2);
	$('.q5s3').bind("click", q5s3);
	$('.q6s1').bind("click", q6s1);
	$('.q6s2').bind("click", q6s2);
	$('.q6s3').bind("click", q6s3);
	$('.q7s1').bind("click", q7s1);
	$('.q7s2').bind("click", q7s2);
	$('.q7s3').bind("click", q7s3);
	$('.q8s1').bind("click", q8s1);
	$('.q8s2').bind("click", q8s2);
	$('.q8s3').bind("click", q8s3);
	$('.q9s1').bind("click", q9s1);
	$('.q9s2').bind("click", q9s2);
	$('.q9s3').bind("click", q9s3);


  //$('.formShow').fancybox({
  $('.formOpen').fancybox({
    width: 703,
    height: 342,
    minWidth  : 703,
    minHeight : 342,
    maxWidth  : 703,
    maxHeight : 342,
    closeBtn  : false,
    padding: 0,
    margin: 0,
    iframe: {
      scrolling: 'no',
      preload: false
    },

	helpers:{
		overlay:{
		closeClick : false
		}
	}
  });


  $('.donebtnFin').fancybox({
    width: 703,
    height: 342,
    minWidth  : 703,
    minHeight : 342,
    maxWidth  : 703,
    maxHeight : 342,
    closeBtn  : false,
    padding: 0,
    margin: 0,
    iframe: {
      scrolling: 'no',
      preload: false
    },

	helpers:{
		overlay:{
		closeClick : false
		}
	}
  });

});


//function formShow(){
function form_show(){
	//$('.formShow').click();
	$('.formOpen').trigger('click');
}

function formFin(){
	//$('.donebtnFin').click();
	$('.donebtnFin').trigger('click');
}


function q1ani() {
	TweenMax.staggerFromTo($('.q1'), 1, {opacity:0}, {opacity:1},0.2);
	TweenMax.staggerFromTo([$('.q1s1'),$('.q1s2'),$('.q1s3')], 1, {opacity:0}, {opacity:1,delay:0.4},0.2);
	TweenMax.fromTo($('.q1p1'),1.2,{marginTop:-200,opacity:0},{marginTop:0,opacity:1,ease:Sine.easeInOut});
	TweenMax.fromTo($('.q1p2'),1.1,{marginTop:-250,opacity:0},{marginTop:0,opacity:1,delay:0.2,ease:Sine.easeInOut});
	TweenMax.fromTo($('.q1p3'),1.2,{marginLeft:50,opacity:0},{marginLeft:0,opacity:1,delay:0.4,ease:Sine.easeInOut});
}
// **********************************************************Q1******************************************************//
function q1s1() {
	$('.q1s1').addClass('act');
	$(".q1a").css("background","url(img/q1_a1.png) no-repeat 0 0");
	$('.q1s1').unbind("click", q1s1);
	$('.q1s2').unbind("click", q1s2);
	$('.q1s3').unbind("click", q1s3);
	TweenMax.staggerFromTo($('.q1a'), 0.3, {opacity:0}, {opacity:1},0.2);
	TweenMax.to($('.qslide'), 1.5, {marginTop: qasStar-610,delay:stayTime,ease:Strong.easeInOut});
	nextkid();
	TweenMax.staggerFromTo($('.q2'), 1, {opacity:0}, {opacity:1,delay:stayTime+1},0.2);
	TweenMax.staggerFromTo([$('.q2s1'),$('.q2s2'),$('.q2s3')], 1, {opacity:0}, {opacity:1,delay:stayTime+1},0.2);
	TweenMax.fromTo($('.q2p2'),1,{marginLeft:-80,opacity:0},{marginLeft:0,opacity:1,delay:stayTime+0.5,ease:Sine.easeInOut});
	TweenMax.fromTo($('.q2p1'),1.1,{marginLeft:80,opacity:0},{marginLeft:0,opacity:1,delay:stayTime+0.5,ease:Sine.easeInOut});
}
function q1s2() {
	$(".q1a").css("background","url(img/q1_a3.png) no-repeat 0 0");
	TweenMax.staggerFromTo($('.q1a'), 0.3, {opacity:0}, {opacity:1},0.2);
}
function q1s3() {
	$(".q1a").css("background","url(img/q1_a3.png) no-repeat 0 0");
	TweenMax.staggerFromTo($('.q1a'), 0.3, {opacity:0}, {opacity:1},0.2);
}
// **********************************************************Q2******************************************************//
function q2s1() {
	$(".q2a").css("background","url(img/q2_a1.png) no-repeat 0 0");
	TweenMax.staggerFromTo($('.q2a'), 0.3, {opacity:0}, {opacity:1},0.2);
}
function q2s2() {
	$(".q2a").css("background","url(img/q2_a2.png) no-repeat 0 0");
	TweenMax.staggerFromTo($('.q2a'), 0.3, {opacity:0}, {opacity:1},0.2);
	$('.q2s2').addClass('act');
	$('.q2s1').unbind("click", q2s1);
	$('.q2s2').unbind("click", q2s2);
	$('.q2s3').unbind("click", q2s3);
	TweenMax.to($('.qslide'), 1.5, {marginTop: qasStar+2*qasDis,delay:stayTime,ease:Strong.easeInOut});
	nextkid();
	TweenMax.staggerFromTo($('.q3'), 1, {opacity:0}, {opacity:1,delay:stayTime+1},0.2);
	TweenMax.staggerFromTo([$('.q3s1'),$('.q3s2'),$('.q3s3')], 1, {opacity:0}, {opacity:1,delay:stayTime+1},0.2);
	TweenMax.fromTo($('.q3p1'),2,{marginTop:300,opacity:0},{marginTop:0,opacity:1,delay:stayTime,ease:Cubic.easeInOut});
	TweenMax.fromTo($('.q3p2'),1.8,{marginTop:350,opacity:0},{marginTop:0,opacity:1,delay:stayTime+0.2,ease:Cubic.easeInOut});
}
function q2s3() {
	$(".q2a").css("background","url(img/q2_a3.png) no-repeat 0 0");
	TweenMax.staggerFromTo($('.q2a'), 0.3, {opacity:0}, {opacity:1},0.2);
}
// **********************************************************Q3******************************************************//
function q3s1() {
	$(".q3a").css("background","url(img/q3_a1.png) no-repeat 0 0");
	TweenMax.staggerFromTo($('.q3a'), 0.3, {opacity:0}, {opacity:1},0.2);
}
function q3s2() {
	$(".q3a").css("background","url(img/q3_a2.png) no-repeat 0 0");
	TweenMax.staggerFromTo($('.q3a'), 0.3, {opacity:0}, {opacity:1},0.2);
}
function q3s3() {
	$(".q3a").css("background","url(img/q3_a3.png) no-repeat 0 0");
	TweenMax.staggerFromTo($('.q3a'), 0.3, {opacity:0}, {opacity:1},0.2);
	$('.q3s3').addClass('act');
	$('.q3s1').unbind("click", q3s1);
	$('.q3s2').unbind("click", q3s2);
	$('.q3s3').unbind("click", q3s3);
	TweenMax.to($('.qslide'), 1.5, {marginTop: qasStar+3*qasDis,delay:stayTime,ease:Strong.easeInOut});
	nextkid();
	TweenMax.staggerFromTo($('.q10'), 1, {opacity:0}, {opacity:1,delay:stayTime+1},0.2);
	TweenMax.staggerFromTo([$('.q10s1'),$('.q10s2'),$('.q10s3')], 1, {opacity:0}, {opacity:1,delay:stayTime+1},0.2);
	TweenMax.fromTo($('.q10p2'),2,{marginTop:-500,opacity:0},{marginTop:0,opacity:1,delay:stayTime+0.1,ease:Sine.easeInOut});
	TweenMax.fromTo($('.q10p1'),2,{marginLeft:50,marginTop:250,opacity:0},{marginLeft:0,marginTop:0,opacity:1,delay:stayTime+0.2,ease:Sine.easeInOut});
}
// **********************************************************Q10*****************************************************//
function q10s1() {
	$(".q10a").css("background","url(img/q10_a1.png) no-repeat 0 0");
	TweenMax.staggerFromTo($('.q10a'), 0.3, {opacity:0}, {opacity:1},0.2);
}
function q10s2() {
	$(".q10a").css("background","url(img/q10_a2.png) no-repeat 0 0");
	TweenMax.staggerFromTo($('.q10a'), 0.3, {opacity:0}, {opacity:1},0.2);
	$('.q10s2').addClass('act');
	$('.q10s1').unbind("click", q10s1);
	$('.q10s2').unbind("click", q10s2);
	$('.q10s3').unbind("click", q10s3);
	TweenMax.to($('.qslide'), 1.5, {marginTop: qasStar+4*qasDis,delay:stayTime,ease:Strong.easeInOut});
	nextkid();
	TweenMax.staggerFromTo($('.q4'), 1, {opacity:0}, {opacity:1,delay:stayTime+1},0.2);
	TweenMax.staggerFromTo([$('.q4s1'),$('.q4s2'),$('.q4s3')], 1, {opacity:0}, {opacity:1,delay:stayTime+1},0.2);
	TweenMax.fromTo($('.q4p1'),0.3,{marginTop:50,opacity:0},{marginTop:0,opacity:1,delay:stayTime+0.4,ease:Sine.easeInOut});
	TweenMax.fromTo($('.q4p4'),0.5,{marginTop:100,opacity:0},{marginTop:0,opacity:1,delay:stayTime+0.6,ease:Sine.easeInOut});
	TweenMax.fromTo($('.q4p3'),0.5,{marginTop:200,marginLeft:50,opacity:0},{marginTop:0,marginLeft:0,opacity:1,delay:stayTime+0.8,ease:Sine.easeInOut});
	TweenMax.fromTo($('.q4p2'),0.5,{marginTop:100,opacity:0},{marginTop:0,opacity:1,delay:stayTime+1,ease:Sine.easeInOut});
	TweenMax.fromTo($('.q4p5'),1,{marginTop:50,opacity:0},{marginTop:0,opacity:1,delay:stayTime+0.1,ease:Sine.easeInOut});
	TweenMax.fromTo($('.q4p6'),1,{marginLeft:-50,opacity:0},{marginLeft:0,opacity:1,delay:stayTime+0.5,ease:Sine.easeInOut});
}
function q10s3() {
	$(".q10a").css("background","url(img/q10_a1.png) no-repeat 0 0");
	TweenMax.staggerFromTo($('.q10a'), 0.3, {opacity:0}, {opacity:1},0.2);
}
// **********************************************************Q4******************************************************//
function q4s1() {
	$(".q4a").css("background","url(img/q4_a1.png) no-repeat 0 0");
	TweenMax.staggerFromTo($('.q4a'), 0.3, {opacity:0}, {opacity:1},0.2);
}
function q4s2() {
	$(".q4a").css("background","url(img/q4_a2.png) no-repeat 0 0");
	TweenMax.staggerFromTo($('.q4a'), 0.3, {opacity:0}, {opacity:1},0.2);
	$('.q4s2').addClass('act');
	$('.q4s1').unbind("click", q4s1);
	$('.q4s2').unbind("click", q4s2);
	$('.q4s3').unbind("click", q4s3);
	TweenMax.to($('.qslide'), 1.5, {marginTop: qasStar+5*qasDis,delay:stayTime,ease:Strong.easeInOut});
	nextkid();
	TweenMax.staggerFromTo($('.q5'), 1, {opacity:0}, {opacity:1,delay:stayTime+1},0.2);
	TweenMax.staggerFromTo([$('.q5s1'),$('.q5s2'),$('.q5s3')], 1, {opacity:0}, {opacity:1,delay:stayTime+1},0.2);
	TweenMax.fromTo($('.q5p1'),1,{marginLeft:-300,opacity:0},{marginLeft:0,opacity:1,delay:stayTime+1,ease:Sine.easeInOut});
}
function q4s3() {
	$(".q4a").css("background","url(img/q4_a3.png) no-repeat 0 0");
	TweenMax.staggerFromTo($('.q4a'), 0.3, {opacity:0}, {opacity:1},0.2);
}
// **********************************************************Q5******************************************************//
function q5s1() {
	$(".q5a").css("background","url(img/q5_a1.png) no-repeat 0 0");
	TweenMax.staggerFromTo($('.q5a'), 0.3, {opacity:0}, {opacity:1},0.2);
	$('.q5s1').addClass('act');
	$('.q5s1').unbind("click", q5s1);
	$('.q5s2').unbind("click", q5s2);
	$('.q5s3').unbind("click", q5s3);
	TweenMax.to($('.qslide'), 1.5, {marginTop: qasStar+6*qasDis,delay:stayTime,ease:Strong.easeInOut});
	nextkid();
	TweenMax.staggerFromTo($('.q6'), 1, {opacity:0}, {opacity:1,delay:stayTime+1},0.2);
	TweenMax.staggerFromTo([$('.q6s1'),$('.q6s2'),$('.q6s3')], 1, {opacity:0}, {opacity:1,delay:stayTime+1},0.2);
	TweenMax.fromTo($('.q6p1'),2.5,{marginTop:500,opacity:0},{marginTop:0,opacity:1,delay:0.6,ease:Cubic.easeInOut});
	TweenMax.fromTo($('.q6p2'),2.5,{marginTop:100,opacity:0},{marginTop:0,opacity:1,delay:0.9,ease:Cubic.easeInOut});
	TweenMax.fromTo($('.q6p3'),2,{marginTop:300,opacity:0},{marginTop:0,opacity:1,delay:0.8,ease:Cubic.easeInOut});
	TweenMax.fromTo($('.q6p4'),1.9,{marginTop:200,opacity:0},{marginTop:0,opacity:1,delay:0.8,ease:Cubic.easeInOut});
}
function q5s2() {
	$(".q5a").css("background","url(img/q5_a2.png) no-repeat 0 0");
	TweenMax.staggerFromTo($('.q5a'), 0.3, {opacity:0}, {opacity:1},0.2);
}
function q5s3() {
	$(".q5a").css("background","url(img/q5_a2.png) no-repeat 0 0");
	TweenMax.staggerFromTo($('.q5a'), 0.3, {opacity:0}, {opacity:1},0.2);
}
// **********************************************************Q6******************************************************//
function q6s1() {
	$(".q6a").css("background","url(img/q6_a1.png) no-repeat 0 0");
	TweenMax.staggerFromTo($('.q6a'), 0.3, {opacity:0}, {opacity:1},0.2);
	$('.q6s1').addClass('act');
	$('.q6s1').unbind("click", q6s1);
	$('.q6s2').unbind("click", q6s2);
	$('.q6s3').unbind("click", q6s3);
	TweenMax.to($('.qslide'), 1.5, {marginTop: qasStar+7*qasDis,delay:stayTime,ease:Strong.easeInOut});
	nextkid();
	TweenMax.fromTo($('.q7bg1'),1.5,{top:0},{top:-250,delay:stayTime,ease:Sine.easeInOut});
	TweenMax.staggerFromTo($('.q7'), 1, {opacity:0}, {opacity:1,delay:stayTime+1},0.2);
	TweenMax.staggerFromTo([$('.q7s1'),$('.q7s2'),$('.q7s3')], 1, {opacity:0}, {opacity:1,delay:stayTime+1},0.2);
	TweenMax.fromTo($('.q7p1'),1,{marginLeft:-350,opacity:0},{marginLeft:0,opacity:1,delay:stayTime+0.5,ease:Quint.easeInOut});
}
function q6s2() {
	$(".q6a").css("background","url(img/q6_a2.png) no-repeat 0 0");
	TweenMax.staggerFromTo($('.q6a'), 0.3, {opacity:0}, {opacity:1},0.2);
}
function q6s3() {
	$(".q6a").css("background","url(img/q6_a3.png) no-repeat 0 0");
	TweenMax.staggerFromTo($('.q6a'), 0.3, {opacity:0}, {opacity:1},0.2);
}
// **********************************************************Q7******************************************************//
function q7s1() {
	$(".q7a").css("background","url(img/q7_a1.png) no-repeat 0 0");
	TweenMax.staggerFromTo($('.q7a'), 0.3, {opacity:0}, {opacity:1},0.2);
	$('.q7s1').addClass('act');
	$('.q7s1').unbind("click", q7s1);
	$('.q7s2').unbind("click", q7s2);
	$('.q7s3').unbind("click", q7s3);
	TweenMax.to($('.qslide'), 1.5, {marginTop: qasStar+8*qasDis,delay:stayTime,ease:Strong.easeInOut});

	nextkid();
	TweenMax.staggerFromTo($('.q8'), 1, {opacity:0}, {opacity:1,delay:stayTime+1},0.2);
	TweenMax.staggerFromTo([$('.q8s1'),$('.q8s2'),$('.q8s3')], 1, {opacity:0}, {opacity:1,delay:stayTime+1},0.2);
	TweenMax.fromTo($('.q8p1'),3.5,{opacity:0},{opacity:1,delay:stayTime});
	TweenMax.fromTo($('.q8p2'),1.5,{marginTop:-100,opacity:0},{marginTop:0,opacity:1,delay:stayTime+0.2,ease:Cubic.easeInOut});
	TweenMax.fromTo($('.q8p3'),1.5,{marginTop:-100,marginLeft:-100,opacity:0},{marginTop:0,marginLeft:0,opacity:1,delay:stayTime+0.2,ease:Cubic.easeInOut});
	TweenMax.fromTo($('.q8p4'),1.5,{marginTop:100,marginLeft:-100,opacity:0},{marginTop:0,marginLeft:0,opacity:1,delay:stayTime+0.2,ease:Cubic.easeInOut});
	TweenMax.fromTo($('.q8p5'),1.5,{marginTop:100,marginLeft:100,opacity:0},{marginTop:0,marginLeft:0,opacity:1,delay:stayTime+0.2,ease:Cubic.easeInOut});
}
function q7s2() {
	$(".q7a").css("background","url(img/q7_a2.png) no-repeat 0 0");
	TweenMax.staggerFromTo($('.q7a'), 0.3, {opacity:0}, {opacity:1},0.2);
}
function q7s3() {
	$(".q7a").css("background","url(img/q7_a3.png) no-repeat 0 0");
	TweenMax.staggerFromTo($('.q7a'), 0.3, {opacity:0}, {opacity:1},0.2);
}
// **********************************************************Q8******************************************************//
function q8s1() {
	$(".q8a").css("background","url(img/q8_a1.png) no-repeat 0 0");
	TweenMax.staggerFromTo($('.q8a'), 0.3, {opacity:0}, {opacity:1},0.2);
	$('.q8s1').addClass('act');
	$('.q8s1').unbind("click", q8s1);
	$('.q8s2').unbind("click", q8s2);
	$('.q8s3').unbind("click", q8s3);
	TweenMax.to($('.qslide'), 1.5, {marginTop: qasStar+9*qasDis,delay:stayTime,ease:Strong.easeInOut});
	nextkid();
	TweenMax.staggerFromTo($('.q9'), 1, {opacity:0}, {opacity:1,delay:stayTime+1});
	TweenMax.staggerFromTo([$('.q9s1'),$('.q9s2'),$('.q9s3')], 1, {opacity:0}, {opacity:1,delay:stayTime+1},0.2);
	TweenMax.fromTo($('.q9p1'),1,{marginTop:1000,opacity:0},{marginTop:0,opacity:1,delay:stayTime+0.5,ease:Sine.easeInOut});
	TweenMax.staggerFromTo([$('.q9p2'),$('.q9p3'),$('.q9p4')], 0.5, {opacity:0,marginLeft:-80}, {opacity:1,marginLeft:0,delay:stayTime+1.2},0.2);
}
function q8s2() {
	$(".q8a").css("background","url(img/q8_a2.png) no-repeat 0 0");
	TweenMax.staggerFromTo($('.q8a'), 0.3, {opacity:0}, {opacity:1},0.2);
}
function q8s3() {
	$(".q8a").css("background","url(img/q8_a2.png) no-repeat 0 0");
	TweenMax.staggerFromTo($('.q8a'), 0.3, {opacity:0}, {opacity:1},0.2);
}
// **********************************************************Q9******************************************************//
function q9s1() {
	$(".q9a").css("background","url(img/q9_a1.png) no-repeat 0 0");
	TweenMax.staggerFromTo($('.q9a'), 0.3, {opacity:0}, {opacity:1},0.2);
	$('.q9s1').addClass('act');
	$('.q9s1').unbind("click", q9s1);
	$('.q9s2').unbind("click", q9s2);
	$('.q9s3').unbind("click", q9s3);
	TweenMax.to($('.qslide'), 1.5, {marginTop:-5700 ,delay:stayTime,ease:Back.easeInOut});
	TweenMax.staggerFromTo([$('.header'),$('.kid')], 1, {marginTop:0}, {marginTop:-3000,delay:stayTime+0.6,ease:Strong.easeInOut},0.2);
}
function q9s2() {
	$(".q9a").css("background","url(img/q9_a2.png) no-repeat 0 0");
	TweenMax.staggerFromTo($('.q9a'), 0.3, {opacity:0}, {opacity:1},0.2);
}
function q9s3() {
	$(".q9a").css("background","url(img/q9_a2.png) no-repeat 0 0");
	TweenMax.staggerFromTo($('.q9a'), 0.3, {opacity:0}, {opacity:1},0.2);
}
// ******************************************************kid***************************************************//
function nextkid(){
	if(kidnum==10){
		kidnum=0;
	}else{
		kidnum++;		
	}
	setTimeout(setkid,stayTime*1000)
 }

function setkid(){
	var _n=$('.kid li').length;
	for(var i=0;i<_n;i++){
		$(".kid li:nth-child("+(i+1)+")" ).removeClass('act');
	}
	$(".kid li:nth-child("+(kidnum+1)+")" ).addClass('act');
}
