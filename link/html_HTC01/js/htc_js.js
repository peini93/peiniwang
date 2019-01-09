var nowNum=0;
var IntID;


$(document).ready(function() {
    $('body').jpreLoader({splashID: "#jSplash",loaderVPos: '41%',autoClose: true }, function() {
		$(".about_top").animate({
          opacity: 1,
		  top: 70,
          left: 0
          }, 800 );
		  
		  $(".about_text").delay(300).animate({
          opacity: 1
          }, 800 );
		  
		  var about_pic1 = $(".about_pic1");
		  TweenMax.to(about_pic1, 0.9, { 
		  repeat:-1 ,
		  top:"340px",
		  left:"2px",
		  yoyo:true, 
		  opacity: 1
		  });
		  	  
		  var about_pic2 = $(".about_pic2");
		  TweenMax.to(about_pic2, 0.6, { 
		  repeat:-1 ,
		  top:"605px",
		  left:"45px",
		  yoyo:true, 
		  opacity: 1
		  });
		  
		  var new_icon1 = $(".new_icon1");
		  TweenMax.to(new_icon1, 0.6, { 
		  repeat:-1 ,
		  top:"640px",
		  left:"0px",
		  yoyo:true, 
		  opacity: 1
		  });
		  
		  var new_icon2 = $(".new_icon2");
		  TweenMax.to(new_icon2, 0.6, { 
		  repeat:-1 ,
		  top:"645px",
		  left:"550px",
		  yoyo:true, 
		  opacity: 1
		  })
		  
		  

	
	});
	  
	
    setTimer();
	$('.btn_left').click(function(){
		  if(nowNum==0){
		  moveBlog(0);
		  }else if(nowNum==1){
			moveBlog(0);
		  }else if(nowNum==2){
		   moveBlog(1);
	      }
	
	});	
	$('.btn_right').click(function(){
		  if(nowNum==0){
		  moveBlog(1);
		  }else if(nowNum==1){
			moveBlog(2);
		  }else if(nowNum==2){
			moveBlog(0);
	      }
	
	});	
	$('.bb,.fb_banner,.co1').fancybox({
        width: 780,
        height: 510,
        minWidth  : 780,
        minHeight : 510,
        maxWidth  : 780,
        maxHeight : 510,
        closeBtn  : true,
        padding: 0,
        margin: 0,
        iframe: {scrolling: 'no', preload: true},
        helpers:{overlay:{ closeClick : false}}
    });

});


function setTimer(){
  
  if(nowNum==3){
	  $(".pic").css("left",0);
	  nowNum=0;
	 }
  IntID = setInterval(autoRun, 3000);
  
 
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
  }
}

function moveBlog(pNum) {
  stopRun();
  nowNum = pNum;
  var dd = -pNum * 920;
  TweenMax.to($(".pic"), 0.6, {left:dd ,onComplete:setTimer});
  
}



function AAA(){
    document.getElementById("ppl").src = "img/new_pro_l-1.png";
    }
function BBB(){
    document.getElementById("ppl").src = "img/new_pro_l-2.png";
    }
function CCC(){
    document.getElementById("ppl").src = "img/new_pro_l-3.png";
    }
function DDD(){
    document.getElementById("ppr").src = "img/new_pro_r-1.png";
	$(".comingsoon").css("opacity",0);
    }
function EEE(){
     document.getElementById("ppr").src = "img/new_pro_r-2.png";
	 TweenMax.fromTo($('.comingsoon'),0.4,{opacity:0,marginTop:250},{opacity:1,marginTop:305,delay:0.5,ease:Quint.easeInOut});
    }
	






