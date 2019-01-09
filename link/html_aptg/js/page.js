var vnum=0;
var nowNum=0;
var maxNum=4;
var IntID;
$(function(){
  //calling jPreLoader
	$('body').jpreLoader({
		splashID: "#jSplash",
		loaderVPos: '50%',
		splashVPos: '50%',
		autoClose: true
	}, function() { //callback function
	});

	PRODUCT();
	CHANGE();
	ARTBTN();
	TOPBTN();
});

//youtobe api設定開始
	var tag = document.createElement('script');
	tag.src = "https://www.youtube.com/iframe_api";

	var firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

	var player;
    function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '442',
          width: '660',
          videoId: 'cjE5E9UyO8o',
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }
	function onPlayerReady(event) {
        event.target.playVideo();
      }

    var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          // setTimeout(stopVideo, 6000);
          done = true;
        }
      }
      function stopVideo() {
        player.stopVideo();
      }

      function startVideo() {
        player.playVideo();
      }
//youtobe api設定結束

//輪播設定開始
function PRODUCT(){
		$('.pot0').bind("click", go0);
    	$('.pot1').bind("click", go1);
    	$('.pot2').bind("click", go2);
    	$('.pot3').bind("click", go3);
    	$('.pot4').bind("click", go4);
    	$('.pot5').bind("click", go5);
    	$('.pot6').bind("click", go6);
    	$('.pot7').bind("click", go7);
    	$('.pot8').bind("click", go8);
    	$('.pot9').bind("click", go9)
	}

function CHANGE(){
	var focus = 0;
	setInterval(function(){
		if(!focus){
			vnum++;
			if(vnum > 9){
				vnum = 0;
			}
			goApp(vnum);
		}
	}, 3000);
	// $('.tw01').hover(function(){focus = 1;},function(){focus = 0;});
}

function go0(){goApp(0);}
function go1(){goApp(1);}
function go2(){goApp(2);}
function go3(){goApp(3);}
function go4(){goApp(4);}
function go5(){goApp(5);}
function go6(){goApp(6);}
function go7(){goApp(7);}
function go8(){goApp(8);}
function go9(){goApp(9);}

function setDot(){
    var _n=$('.tw01 ul li,.tw02 ul li,.tw03 ul li').length;
    for(var i=0; i<_n; i++){
        $(".tw01 ul li:nth-child("+(i+1)+") a,.tw02 ul li:nth-child("+(i+1)+") a,.tw03 ul li:nth-child("+(i+1)+") a" ).removeClass('act');
        }
    $(".tw01 ul li:nth-child("+(vnum+1)+") a,.tw02 ul li:nth-child("+(vnum+1)+") a,.tw03 ul li:nth-child("+(vnum+1)+") a" ).addClass('act');
}

function picfadeout(){
 	$(".tw01-1,.tw01-2,.tw01-3,.tw01-4,.tw01-5,.tw01-6,.tw01-7,.tw01-8,.tw01-9,.tw01-10").fadeOut();
}

function goApp(sn){
    vnum=sn;
    setDot();
    switch(vnum) {
        case 0:
	        picfadeout();
	        $(".tw01-1").fadeIn();
	        break; 
        case 1:
	        picfadeout();
	        $(".tw01-2").fadeIn();
	        break; 
        case 2: 
	        picfadeout();
	        $(".tw01-3").fadeIn();
	        break; 
        case 3: 
	        picfadeout();
	       	$(".tw01-4").fadeIn();
	        break; 
	    case 4: 
	        picfadeout();
	       	$(".tw01-5").fadeIn();
	        break;
	   	case 5: 
	        picfadeout();
	       	$(".tw01-6").fadeIn();
	        break;
	    case 6: 
	        picfadeout();
	       	$(".tw01-7").fadeIn();
	        break;
	    case 7: 
	        picfadeout();
	       	$(".tw01-8").fadeIn();
	        break;
	   	case 8: 
	        picfadeout();
	       	$(".tw01-9").fadeIn();
	        break;
	   	case 9: 
	        picfadeout();
	       	$(".tw01-10").fadeIn();
	        break;         
        default:
    }
}

//輪播設定結束

function ARTBTN(){
	$( ".btn1" ).bind( "click", function() {
		$(".tw01").fadeIn();
		$(".tw02,.tw03").fadeOut();
		$(".btn1" ).addClass('add01');
		$(".btn2,.btn3" ).removeClass('add01');
		initShow(4)
	});
	$( ".btn2" ).bind( "click", function() {
		$(".tw02").fadeIn();
		$(".tw01,.tw03").fadeOut();
		$(".btn2" ).addClass('add01');
		$(".btn1,.btn3" ).removeClass('add01');
	});
	$( ".btn3" ).bind( "click", function() {
		$(".tw03").fadeIn();
		$(".tw01,.tw02").fadeOut();
		$(".btn3" ).addClass('add01');
		$(".btn1,.btn2" ).removeClass('add01');
		initShow(3)
	});
}

function TOPBTN(){
	$( ".kvbtn01" ).bind( "click", function() {
		$("#player").css('display','block');
		$(".paper").css('display','none');
		$(".kvbtn01" ).addClass('add');
		$(".kvbtn02" ).removeClass('add');
		startVideo();
	});
	$( ".kvbtn02" ).bind( "click", function() {
		$("#player").css('display','none');
		$(".paper").css('display','block');
		$(".kvbtn02" ).addClass('add');
		$(".kvbtn01" ).removeClass('add');
		stopVideo();
	});
}


//下方文章設定開始
setTimer();
Dota();
$('.swiper-button-next a').click(function(){
		  if(nowNum==0){
		  moveBlog(0);
		  }else if(nowNum==1){
			moveBlog(0);
		  }else if(nowNum==2){
		   moveBlog(1);
	      }else if(nowNum==3){
		   moveBlog(2);
	      }
	});	
$('.swiper-button-prev a').click(function(){
		  if(nowNum==0){
		  moveBlog(1);
		  }else if(nowNum==1){
			moveBlog(2);
		  }else if(nowNum==2){
			moveBlog(3);
	      }else if(nowNum==3){
			moveBlog(0);
	      }
	});


function initShow(num) {
	maxNum=num;
	nowNum=0;
	$(".all").css("left",0);
	setTimer();
}

function setTimer(){ 
  if(nowNum==maxNum){
	  $(".all").css("left",0);
	  nowNum=0;
	 }
   // IntID = setInterval(autoRun, 3000);
   $('.point1,.point2,.point3,.point4').removeClass("add02");
   $('.point'+(nowNum+1)).addClass('add02');
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
    moveBlog(0);
  }
}

function moveBlog(pNum) {
  stopRun();
  nowNum = pNum;
  var dd = -pNum * 822;
  TweenMax.to($(".all"), 0.6, {left:dd,onComplete:setTimer});
}

function Dota(){
	$('.point1').bind("click" ,function() {
          moveBlog(0);
});
    $('.point2').bind("click" ,function() {
		  moveBlog(1); 
});
    $('.point3').bind("click" ,function() {
          moveBlog(2); 
});
    $('.point4').bind("click" ,function() {
          moveBlog(3); 
});    
}