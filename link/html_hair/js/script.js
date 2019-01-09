var strUrl = location.search;
var getPara, ParaVal;
var aryPara = [];
var sx=0;
var nowNum=1;
var totalNum;

$(window).load(function(){
    $(window).scroll(chkSX);
    ac();
  	totalNum = $('.pdlist ul li').length;
  	$('.pdlist ul').css({width:180 * totalNum, height:110});

    opening();

    $(".nav ul li.nav3").hover(function(){
      $(this).children("a:nth-of-type(1)").toggleClass("touch");
      $(this).children(".subnav").stop(true,false).fadeIn(800);
    },function(){
      $(this).children("a:nth-of-type(1)").toggleClass("touch");
      $(this).children(".subnav").stop(true,false).fadeOut(300); 
    });
  	
	
});

function opening(){
  // $( ".kv1" ).animate({
  //   opacity: 1,
  //   left: 2
  // }, 800, function() {
  //   $(this).delay(500).animate({
  //     opacity: 0,
  //     left: -40
  //   }, 600).fadeOut();
  // });

  // $( ".kv2" ).delay(1500).animate({
  //   opacity: 1,
  //   left: 178
  // }, 1000, function() {
  //   $(this).delay(800).animate({
  //     opacity: 0,
  //     left: 220
  //   }, 500).fadeOut();
  // });

  // $( ".kv2_circle" ).delay(1500).animate({
  //   opacity: 1,
  //   top: 90,
  //   left: 30,
  //   height: 220,
  //   width: 220
  // }, 1000, 'easeOutElastic', function() {
  //   $(this).delay(800).animate({
  //     opacity: 0,
  //     left: -10
  //   }, 500).fadeOut();
  // });

  $( ".kv3,.kv4" ).animate({
    opacity: 1
  }, 1500);

}

function ac(){
  if (strUrl.indexOf("?") != -1) {
    var getSearch = strUrl.split("?");
    getPara = getSearch[1].split("&");
    for (i = 0; i < getPara.length; i++) {
      ParaVal = getPara[i].split("=");
      aryPara.push(ParaVal[0]);
      aryPara[ParaVal[0]] = ParaVal[1];
    }


    if ( aryPara['pd'] == '1' ) {
      $('html,body').animate({scrollTop:$(".product1").offset().top},1200);
    } else if( aryPara['pd'] == '2' ){
      $('html,body').animate({scrollTop:$(".product2").offset().top},1200);
    } else if( aryPara['pd'] == '3' ){
      $('html,body').animate({scrollTop:$(".product3").offset().top},1200);
    } else if( aryPara['pd'] == '4' ){
      $('html,body').animate({scrollTop:$(".product4").offset().top},1200);
    } else if( aryPara['pd'] == '5' ){
      $('html,body').animate({scrollTop:$(".product5").offset().top},1200);
    } else if( aryPara['pd'] == '6' ){
      $('html,body').animate({scrollTop:$(".product6").offset().top},1200);
    } else if( aryPara['pd'] == '7' ){
      $('html,body').animate({scrollTop:$(".product7").offset().top},1200);
    } else if( aryPara['pd'] == '8' ){
      $('html,body').animate({scrollTop:$(".product8").offset().top},1200);
    }
  }
}
function chkSX(){
	sx = $(this).scrollTop();
	
	$(".circle1").css({top:95-sx*1});
	$(".circle2").css({top:190-sx*0.1});
	$(".circle3").css({top:435-sx*0.5});
	$(".circle4").css({top:3700-sx*1.5});
	$(".circle5").css({top:130-sx*0.2});
	$(".circle6").css({top:15-sx*0.6});
	$(".circle7").css({top:2000-sx*0.8});
	$(".circle8").css({top:2500-sx*0.4});
	$(".circle9").css({top:3000-sx*1.3});
	$(".circle10").css({top:2700-sx*0.8});
	$(".circle11").css({top:2300-sx*1.2});
	$(".circle12").css({top:200-sx*0.05});
	$(".circle13").css({top:350-sx*0.08});
	$(".circle14").css({top:2380-sx*0.02});

}

function prev(){
  if(nowNum==4){
    runPic(3);
  }else if(nowNum==3){
	runPic(2);
  }else if(nowNum==2){
  runPic(1);
  }
}

function next(){
  if(nowNum==0){
    runPic(1);
  }else if(nowNum==1){
	runPic(2);
  }else if(nowNum==2){
    runPic(3);
  }else if(nowNum==3){
    runPic(4);
  }

}

function runPic(n){
	nowNum = n;
	var dd=180 * (n-1);
    $(".pdlist ul").animate({							 
       left:-dd
    },600);
	
}
