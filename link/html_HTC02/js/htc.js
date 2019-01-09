var nowNum=0;
var IntID;

$(function(){

	$('body').jpreLoader({splashID: "#jSplash",loaderVPos: '41%',autoClose: true},function(){
		$.plax.enable();
		$('.mayday').plaxify({"xRange":20,"yRange":0});
		$('.ponitbg').plaxify({"xRange":60,"yRange":10});
	 });

	  $(".gotop").click(function(){
		$("html,body").stop(true,false).animate({scrollTop:0},800);
		return false;	
	 });

	 $(window).scroll(function(){
	   var Y = $(window).scrollTop();
       if(Y>600){
		  $(".gotop").stop(true,false).animate({ bottom:100,opacity:1},800);   
	    }else{
		  $(".gotop").stop(true,false).animate({ bottom:80,opacity:0},800);  
	    }
	 });	

	 $(".rule_btn").click(function(){
		$("html,body").stop(true,false).animate({scrollTop:680},800);
		return false;	
	 }); 	

	 setTimer();
	 setDot();
	 deltime();


});

function setTimer(){
    if(nowNum==4){
	  $(".proimg").css("left",0);
	  nowNum=0;
	 } 
   	 $('.btn1,.btn2,.btn3,.btn4').removeClass("select");
	 $('.btn'+(nowNum+1)).addClass('select');
    IntID = setInterval(autoRun, 4000); 
}

function stopRun() {
    clearInterval(IntID);	
}

function autoRun() {
  if(nowNum==0){
    moveBlog(1);
  }else if(nowNum==1){
	moveBlog(2);
  }else if(nowNum==2){
    moveBlog(3);
  }else if(nowNum==3){
    moveBlog(4);
  }
}


function moveBlog(pNum) {
  stopRun();
  nowNum = pNum;
  var dd = -pNum * 460;
  TweenMax.to($(".proimg"), 0.6, {left:dd ,onComplete:setTimer});
 
}

function setDot(){
	$('.btn1').bind("click" ,function() {
          moveBlog(0);
});
    $('.btn2').bind("click" ,function() {
		  moveBlog(1); 
});
    $('.btn3').bind("click" ,function() {
          moveBlog(2); 
});
    $('.btn4').bind("click" ,function() {
          moveBlog(3); 
});
     
}

