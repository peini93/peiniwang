var nowPage=0;
var vd;

$(document).ready(function() {
	//setTimer();
    $('.pdot1').bind("click", go0);
    $('.pdot2').bind("click", go1);
    $('.pdot3').bind("click", go2);
});
function go0(){videoAnim(0);}
function go1(){videoAnim(1);}
function go2(){videoAnim(2);}

function next(){
	if(nowPage==2){
		nowPage=0;
	}else{
		nowPage++;		
	}
 	videoAnim(nowPage);
}

function prev(){
	if(nowPage==0){
		nowPage=2;
	}else{
		nowPage--;		
	}
 	videoAnim(nowPage);
}
function autoRun() {

  if(nowPage==0){
    videoAnim(1);
  }else if(nowPage==1){
	videoAnim(2);
  }else if(nowPage==2){
    videoAnim(0);
  }
}
//function setTimer(){ vd = setInterval(autoRun, 3000);}
function stopRun() {
    clearInterval(vd);
	
}
function setDot(){
	var _n=$('.page_dot a').length;
	for(var i=0; i<_n; i++){
		$(".page_dot a:nth-child("+(i+1)+")" ).removeClass('dselect');
	}
	$(".page_dot a:nth-child("+(nowPage+1)+")" ).addClass('dselect');	
}

function videoAnim(sn){
    nowPage=sn;
	setDot();
	switch(nowPage) {
    	case 0:
		stopRun();
		TweenMax.to($('.v1'),1,{autoAlpha:1,delay:0,ease:Quint.easeOut,onComplete:setTimer});
		TweenMax.to($('.v2,.v3'),1,{autoAlpha:0});
    	break; 
    	case 1:
		stopRun();
    	TweenMax.to($('.v2'),1,{autoAlpha:1,delay:0,ease:Quint.easeOut,onComplete:setTimer});
		TweenMax.to($('.v1,.v3'),1,{autoAlpha:0});
    	break; 
    	case 2: 
		stopRun();
    	TweenMax.to($('.v3'),1,{autoAlpha:1,delay:0,ease:Quint.easeOut,onComplete:setTimer});
		TweenMax.to($('.v1,.v2'),1,{autoAlpha:0});
		break; 
    	default:
    } 
}
function _goto(val,sec){
  $('html,body').animate({scrollTop:val},sec);
};
function v1a(){
	$(".v1a").fadeIn();
	  $(".youtube").html('<iframe width="690" height="390" src="http://mv-0.kkbox.com/hd/9/32029_2-48decb70922710919972b2c3cde8405d.mp4" frameborder="0" allowfullscreen> </iframe>');	
}
function v2a(){
	$(".v2a").fadeIn();
	$(".youtube").html('<iframe width="690" height="390" src="http://www.youtube.com/embed/MZyWJWimMCs" frameborder="0" allowfullscreen" frameborder="0" allowfullscreen> </iframe>');
}
function v3a(){
	$(".v3a").fadeIn();
	$(".youtube").html('<iframe width="690" height="390" src="http://www.youtube.com/embed/mELrAKxwjfc?rel=0" frameborder="0" allowfullscreen" frameborder="0" allowfullscreen> </iframe>');
}
function v4a(){
	$(".v4a").fadeIn();
	$(".youtube").html('<iframe width="690" height="390" src="http://www.youtube.com/embed/MENOa7S-VQY?rel=0" frameborder="0" allowfullscreen" frameborder="0" allowfullscreen> </iframe>');
}
function v5a(){
	$(".v5a").fadeIn();
	$(".youtube").html('<iframe width="690" height="390" src="http://www.youtube.com/embed/a_1lOn9-EbA?rel=0" frameborder="0" allowfullscreen" frameborder="0" allowfullscreen> </iframe>');
}
function btnx(){
	$(".v1a,.v2a,.v3a,.v4a,.v5a").fadeOut();
	$(".youtube").html('');
}
