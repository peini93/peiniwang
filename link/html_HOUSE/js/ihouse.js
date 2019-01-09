window.onresize = Resize;
var tnum=0;
$(function(){

	$('body').jpreLoader({splashID: "#jSplash",loaderVPos: '41%',autoClose: true},function(){	
		Twmax();
		Gogo();
		List();
	 });
        $('.tbtn').bind("click", nextApp);
	    Resize();
	    Navbtn();

});
function Twmax() {
    TweenMax.to($(".index_top"), 1, {delay:0.2, left:0,opacity:1,ease:Elastic.easeOut});
    TweenMax.to($(".index_btn"), 1, {delay:1, left:300,opacity:1,ease:Elastic.easeOut});	
	TweenMax.to($(".index_icon"), 0.3, {repeat:-1 ,yoyo:true,repeatDelay:0, marginTop:40,ease:"Cubic.easeInOut"});
	TweenMax.to($(".tbtn"), 0.3, {repeat:-1 ,yoyo:true,repeatDelay:0,right:10,ease:"Cubic.easeInOut"});
}

function Resize() {	
  var ww=$(window).width();
  var wh=$(window).height();

  if(ww<1280){
    $(".main").css('width',1000);
    $(".ttbg").css('top',300);
    $(".imgbg1,.imgbg2,.imgbg3,.imgbg4").css('height',500);
    $(".imgbg1,.imgbg2,.imgbg3,.imgbg4").css('margin-top',0);
    $(".main_txt").css('top',520);
    $(".mbtn").css('top',510);
  }
else{
    $(".main").css('width',1000);
    $(".ttbg").css('top',535);
    $(".imgbg1,.imgbg2,.imgbg3,.imgbg4").css('height',1000);
    $(".imgbg1,.imgbg2,.imgbg3,.imgbg4").css('margin-top',-265);
    $(".main_txt").css('top',760);
    $(".mbtn").css('top',750);
  };

if(wh<800){
   $(".main").css('height',600);
   $(".box").css('height',600);
   $(".measurebox").css('margin-top',-200);
   $(".formbox").css('margin-top',-150);
}
else{
    $(".main").css('height',wh);
	$(".box").css('height',1080);
	$(".measurebox").css('margin-top',-350);
	$(".formbox").css('margin-top',-350);
  };

}

function Navbtn() {
    $('.sharebtn').hover(function(){
    	$(".bicon").stop(true,false).animate({marginLeft:120},300);
    },function(){
    	$(".bicon").stop(true,false).animate({marginLeft:115},300);
    });
	
	$('.n1').bind("click", function(){
		goApp(0);
	  });
	 
	  $('.n2').bind("click", function(){
		goApp(1);
	  });
	  
	  $('.n3').bind("click", function(){
		goApp(2);
	  });
	   
	  $('.n4').bind("click",function(){
		goApp(3);
	  });
}


function nextApp(){
	if(tnum==3){
		tnum=0;
	}else{
		tnum++;		
	}
 	goApp(tnum);
}

function goApp(nu){
	
	tnum=nu;
	
	switch(tnum) {
    	case 0:   
		$('.imgbg1').fadeIn('slow');
		$('.imgbg2,.imgbg3,.imgbg4').fadeOut('slow');
		$('.b1').addClass('sec a');
		$('.b2,.b3,.b4').removeClass('sec a');
		$(".sharebtn").stop(true,false).animate({marginLeft:-40,opacity:0},1000);
		$(".m01").stop(true,false).delay(1000).animate({marginLeft:-330,opacity:1},1000);
		$(".m02,.m03,.m04").stop(true,false).animate({marginLeft:-220,opacity:0},300);
		$(".ttbg").stop(true,false).animate({left:-100,opacity:0},0);
		$(".ttbg").stop(true,false).delay(1000).animate({left:0,opacity:1},500);
    	break; 
    	case 1:
		$('.imgbg1,.imgbg3,.imgbg4').fadeOut('slow');
		$('.imgbg2').fadeIn('slow');
		$('.b2').addClass('sec a');
		$('.b1,.b3,.b4').removeClass('sec a');
		$(".sharebtn").stop(true,false).animate({marginLeft:-40,opacity:0},1000);
		$(".m02").stop(true,false).delay(1000).animate({marginLeft:-330,opacity:1},1000);
		$(".m01,.m03,.m04").stop(true,false).animate({marginLeft:-220,opacity:0},300);
		$(".ttbg").stop(true,false).animate({left:-100,opacity:0},0);
		$(".ttbg").stop(true,false).delay(1000).animate({left:0,opacity:1},500);
    	break; 
    	case 2:    	
		$('.imgbg1,.imgbg2,.imgbg4').fadeOut('slow');
		$('.imgbg3').fadeIn('slow');
		$('.b3').addClass('sec a');
		$('.b1,.b2,.b4').removeClass('sec a');
		$(".sharebtn").stop(true,false).animate({marginLeft:-40,opacity:0},1000);
		$(".m03").stop(true,false).delay(1000).animate({marginLeft:-330,opacity:1},1000);
		$(".m02,.m01,.m04").stop(true,false).animate({marginLeft:-220,opacity:0},300);
		$(".ttbg").stop(true,false).animate({left:-100,opacity:0},0);
		$(".ttbg").stop(true,false).delay(1000).animate({left:0,opacity:1},500);
    	break; 
    	case 3: 
		$('.imgbg1,.imgbg2,.imgbg3').fadeOut('slow');
		$('.imgbg4').fadeIn('slow');
		$('.b4').addClass('sec a');
		$('.b1,.b2,.b3').removeClass('sec a');
		$(".sharebtn").stop(true,false).delay(1000).animate({marginLeft:-60,opacity:1},1000);
		$(".m04").stop(true,false).delay(1000).animate({marginLeft:-330,opacity:1},1000);
		$(".m02,.m03,.m01").stop(true,false).animate({marginLeft:-220,opacity:0},300);
		$(".ttbg").stop(true,false).animate({left:-100,opacity:0},0);
		$(".ttbg").stop(true,false).delay(1000).animate({left:0,opacity:1},500);
    	break; 
    } 
		
	
}

function Gogo() {
	TweenMax.to($(".ttbg"), 1, {delay:0.5, left:0,opacity:1,ease:"Cubic.easeInOut"});
	TweenMax.to($(".m01"), 1, {delay:1, marginLeft:-330,opacity:1,ease:"Cubic.easeInOut"});
    TweenMax.to($(".tbtn"), 1.5, {delay:1, right:0,opacity:1,onComplete:Twmax});
}

function List() {
	$(".list").stop(true,false).animate({marginTop:-200,opacity:1},300);
	$(".listbtn").bind("click",function(){
	$(".list,.listbg").stop(true,false).animate({opacity:0},300,ko);
	  });
}

function ko(){
     $(".list,.listbg").css("display","none");
}
