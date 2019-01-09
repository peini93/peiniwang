$(function(){
	 $('body').jpreLoader({splashID: "#jSplash",loaderVPos: '41%',autoClose: true }, function(){
		 
	    $(".main_top").stop(true,false).animate({ top:40,opacity: 1},300);
		var popup_btn = $(".popup_btn");
		TweenMax.to(popup_btn, 0.9, { repeat:-1, top:190, left:-10, yoyo:true, opacity: 1});
		var main_shoes = $(".main_shoes");
		TweenMax.to(main_shoes, 0.9, { repeat:-1, top:210, left:-20, yoyo:true, opacity: 1});
 
	 });
	 
	  $(".popbtn").hover(function(){
		 $(".popbtnicon").stop(true,false).animate({ left:125},300);
	 },function(){
	 	 $(".popbtnicon").stop(true,false).animate({ left:120},300); 
	 });
	 $(".pic").animate({ top:0,opacity:1},300);
	 $('#scrollbar1').tinyscrollbar();
	  $(".rule_btn").click(function(){
		$("html,body").stop(true,false).animate({scrollTop:1100},800);
		return false;	
	 });
	 
	  $(".gotop").click(function(){
		$("html,body").stop(true,false).animate({scrollTop:0},800);
		return false;	
	 });
	 
	 $(".rule_btn").hover(function(){
	  	$(".up").stop(true,false).animate({ top:53},300);
	 },function(){
	  	$(".up").stop(true,false).animate({ top:48},300);
	 });
	 
	  $(".gotop").hover(function(){
	  	$(".down").stop(true,false).animate({ top:15},300);
	 },function(){
	  	$(".down").stop(true,false).animate({ top:20},300);
	 });
	 
	 $(".btn").hover(function(){
		 $(".btn_shoe_1").stop(true,false).animate({ left:20,opacity:0},300);
		 $(".btn_shoe_2").stop(true,false).animate({ left:0,opacity:1},300);
	 },function(){
		 $(".btn_shoe_1").stop(true,false).animate({ left:0,opacity:1},300);
		 $(".btn_shoe_2").stop(true,false).animate({ left:20,opacity:0},300);
	 });
	 
	 
	 	 $(".box00").hover(function(){
		 $(this).children().stop(true,false).animate({opacity:1},300);
		 $(".name1").stop(true,false).animate({paddingTop:40,opacity:1},300); 
	 },function(){
		 $(this).children().stop(true,false).animate({opacity:0},300);
		 $(".name1").stop(true,false).animate({paddingTop:60,opacity:0},300);  
	 });
	 

	 
	 $(window).scroll(function(){
	   var Y = $(window).scrollTop();
       if(Y>1000){
		  $(".r1").stop(true,false).animate({ top:-150,opacity:1},800,"easeOutElastic"); 
		  $(".r2").stop(true,false).animate({ top:50,opacity:1},1000,"easeOutElastic"); 
		  $(".r3").stop(true,false).animate({ top:50,opacity:1},500,"easeOutElastic");  
	    }else{
		  $(".r1").stop(true,false).animate({ top:-400,opacity:0},800,"easeInElastic");
		  $(".r2").stop(true,false).animate({ top:-400,opacity:0},1000,"easeInElastic"); 
		  $(".r3").stop(true,false).animate({ top:-400,opacity:0},500,"easeInElastic");  
	    }
	 });
	 
    
	 $('.open1,.open2,.open3,.open4,.open5').fancybox({
        width: 800,
        height: 300,
        minWidth  : 800,
        minHeight : 300,
        maxWidth  : 800,
        maxHeight : 300,
        closeBtn  : true,
        padding: 0,
        margin: 0,
        iframe: {scrolling: 'no', preload: true},
        helpers:{ overlay:{closeClick : false}
        }
    });
	
	$('.btn').fancybox({
        width: 800,
        height: 300,
        minWidth  : 800,
        minHeight : 300,
        maxWidth  : 800,
        maxHeight : 300,
        closeBtn  : true,
        padding: 0,
        margin: 0,
        helpers:{ overlay:{closeClick : false}
        }
    });
	
	$(".open1 img").hover(function(){
		$(this).css({width:43,height:43});
	},
	function(){
		$(this).css({width:40,height:40});
	});
	
	$(".open2 img").hover(function(){
		$(this).css({width:43,height:43});
	},
	function(){
		$(this).css({width:40,height:40});
	});
	
	$(".open3 img").hover(function(){
		$(this).css({width:43,height:43});
	},
	function(){
		$(this).css({width:40,height:40});
	});
	
	$(".open4 img").hover(function(){
		$(this).css({width:43,height:43});
	},
	function(){
		$(this).css({width:40,height:40});
	});
	
	$(".open5 img").hover(function(){
		$(this).css({width:43,height:43});
	},
	function(){
		$(this).css({width:40,height:40});
	});

});





