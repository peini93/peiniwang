// JavaScript Document

//rule//
$(document).ready(function(){
	$('body').jpreLoader({
		splashID: "#jSplash",
		loaderVPos: '41%',
		autoClose: true
     }, function() {
		  $(".container").css({visibility:"visible"});
		  $(".m1").delay(500).animate({
          opacity: 1,
          left: 540
          }, 500 );
		  
		  $(".m2").animate({
          opacity: 1,
          top: 70
          }, 500 );
		  
		  $(".m3").delay(1000).animate({
          opacity: 1,
		  top: 0,
          left: 770
          }, 500 );
		  
		  $(".index_love").delay(500).animate({
          opacity: 1,
		  top: 108,
          left: 450
          }, 500 );
		  
		  
		  $(".index_btn1 a").animate({
          opacity: 1,
          top: 283
          }, 500 );
		  
		  $(".index_btn2 a").animate({
          opacity: 1,
          top: 360
          }, 500 );
		  

		  
		  
		var m4 = $(".m4");
		TweenMax.to(m4, 0.5, { 
		repeat:-1 ,
		top:"245px",
		left:"820px",
		yoyo:true, 
		opacity: 1
	    });
		
		var m5 = $(".m5");
		TweenMax.to(m5, 5, { 
		repeat:-1 ,
		width:"1080px",
		height:"501px",
		top:"350px",
		left:"-750px",
		yoyo:true,
		repeatDelay:1, 
		opacity: 1
	    });
		
		var m6 = $(".m6");
		TweenMax.to(m6, 3, { 
		repeat:-1 ,
		width:"1080px",
		height:"501px",
		top:"350px",
		left:"1200px",
		yoyo:true,
		repeatDelay:1, 
		opacity: 1
	    });
		
		var m7 = $(".m7");
		TweenMax.to(m7, 15, { 
		repeat:-1 ,
		width:"1080px",
		height:"501px",
		top:"200px",
		left:"1400px",
		yoyo:true,
		repeatDelay:2, 
		opacity: 1
	    });
		
		var m8 = $(".m8");
		TweenMax.to(m8, 10, { 
		repeat:-1 ,
		width:"1080px",
		height:"501px",
		top:"180px",
		left:"-500px",
		yoyo:true,
		repeatDelay:2, 
		opacity: 1
	    });
		
		var m9 = $(".m9");
		TweenMax.to(m9, 10, { 
		repeat:-1 ,
		width:"460px",
		height:"430px",
		top:"-50px",
		left:"-100px",
		yoyo:true,
		repeatDelay:2, 
		opacity: 1
	    });
		
		var pie = $(".pie");
		TweenMax.to(pie, 100, { 
		repeat:0 ,
		width:"30px",
		height:"40px",
		top:"130px",
		left:"662px",
		yoyo:true,
		opacity: 1
	    });
		
		
		var map_clud1 = $(".map_clud1");
		TweenMax.to(map_clud1, 0.5, { 
		repeat:-1 ,
		top:"92px",
		left:"440px",
		yoyo:true, 
		opacity: 1
	    });
		
		var map_clud2 = $(".map_clud2");
		TweenMax.to(map_clud2, 1, { 
		repeat:-1 ,
		top:"125px",
		left:"340px",
		yoyo:true, 
		opacity: 1
	    });
		
		var map_clud3 = $(".map_clud3");
		TweenMax.to(map_clud3, 2, { 
		repeat:-1 ,
		top:"40px",
		left:"353px",
		yoyo:true, 
		opacity: 1
	    });
		
		var map_clud4 = $(".map_clud4");
		TweenMax.to(map_clud4, 1, { 
		repeat:-1 ,
		top:"40px",
		left:"650px",
		yoyo:true, 
		opacity: 1
	    });
		
		var map_clud5 = $(".map_clud5");
		TweenMax.to(map_clud5, 1.5, { 
		repeat:-1 ,
		top:"36px",
		left:"728px",
		yoyo:true, 
		opacity: 1
	    });
		 
		var map_tree1 = $(".map_tree1");
		TweenMax.to(map_tree1, 1.5, { 
		repeat:0 ,
		width:"84px",
		height:"119px",
		top:"405px",
		yoyo:true, 
		opacity: 1
	    });
		
		var map_tree2 = $(".map_tree2");
		TweenMax.to(map_tree2, 0.5, { 
		repeat:0 ,
		width:"75px",
		height:"105px",
		top:"675px",
		yoyo:true, 
		opacity: 1
	    });
		
		var map_tree3 = $(".map_tree3");
		TweenMax.to(map_tree3, 0.2, { 
		repeat:0 ,
		width:"75px",
		height:"115px",
		top:"180px",
		yoyo:true, 
		opacity: 1
	    });
		
		var map_tree4 = $(".map_tree4");
		TweenMax.to(map_tree4, 1, { 
		repeat:0 ,
		width:"100px",
		height:"150px",
		top:"100px",
		yoyo:true, 
		opacity: 1
	    });
		
		  
	    });
});