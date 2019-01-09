var vnum=0;

$(function(){
	
	$('body').jpreLoader({splashID: "#jSplash",loaderVPos: '41%',autoClose: true},function(){     
	});

	$( ".boxmain a" ).hover(
  		function() {
  			var upbtn = $(this).find(".up")
			var downbtn = $(this).find(".down")
    		TweenMax.to(upbtn, 1, {left:-10, top:-10 , ease:Elastic.easeOut});
    		TweenMax.to(downbtn, 1, {right:-10, bottom:-10 , ease:Elastic.easeOut});
  		}, function() {
  			var upbtn = $(this).find(".up")
			var downbtn = $(this).find(".down")
    		TweenMax.to(upbtn, 1, {left:-6, top:-6 , ease:Elastic.easeOut});
    		TweenMax.to(downbtn, 1, {right:-6, bottom:-6 , ease:Elastic.easeOut});
  		});

	PRODUCT();
	CHANGE();
  GOTOP();
});


function PRODUCT(){
    $(".previous").bind("click", preApp);
    $(".next").bind("click", nextApp);
    $('.pot0').bind("click", go0);
    $('.pot1').bind("click", go1);
    $('.pot2').bind("click", go2);
    $('.pot3').bind("click", go3);
    $( ".previous" ).hover(
  		function() {
    		TweenMax.to(this, 0.3, {left:-46 });
  		}, function() {
  			TweenMax.to(this, 0.3, {left:-36 });
  		}
	);

	$( ".next" ).hover(
  		function() {
    		TweenMax.to(this, 0.3, {right:-46 });
  		}, function() {
  			TweenMax.to(this, 0.3, {right:-36 });
  		}
	);
}

function CHANGE(){
	var focus = 0;
	setInterval(function(){
		if(!focus){
			vnum++;
			if(vnum > 3){
				vnum = 0;
			}
			goApp(vnum);
		}
	}, 3000);

	$('.toppic').hover(function(){focus = 1;},function(){focus = 0;});
}

function go0(){goApp(0);}
function go1(){goApp(1);}
function go2(){goApp(2);}
function go3(){goApp(3);}

function setDot(){
    var _n=$('.area01 ul li').length;
    for(var i=0; i<_n; i++){
        $(".area01 ul li:nth-child("+(i+1)+") a" ).removeClass('act');
        }
    $(".area01 ul li:nth-child("+(vnum+1)+") a" ).addClass('act');
}

function preApp(){
    if(vnum==0){
        vnum=3;
    }else{
        vnum--;     
    }
    goApp(vnum);
}

function nextApp(){
    if(vnum==3){
        vnum=0;
    }else{
        vnum++;     
    }
    goApp(vnum);
}

function picfadeout(){
 	$(".img1,.img2,.img3,.img4").fadeOut();
}


function goApp(sn){
    vnum=sn;
    setDot();
    switch(vnum) {
        case 0:
	        picfadeout();
	        $(".img1").fadeIn();
	        break; 
        case 1:
	        picfadeout();
	        $(".img2").fadeIn();
	        break; 
        case 2: 
	        picfadeout();
	        $(".img3").fadeIn();
	        break; 
        case 3: 
	        picfadeout();
	       	$(".img4").fadeIn();
	        break;  
        default:
    }
}



function GOTOP(){
    $(".gotop").click(function(){
      $("html,body").stop(true,false).animate({scrollTop:0},800);
      return false; 
   });

    $(window).scroll(function(){
     var Y = $(window).scrollTop();
       if(Y>1000){
        $(".gotop").stop(true,false).animate({ bottom:40,opacity:1},500); 
        }else{
        $(".gotop").stop(true,false).animate({ bottom:80,opacity:0},500); 
        }
     });

}
