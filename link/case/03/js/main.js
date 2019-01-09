$(function(){

	$('body').jpreLoader({splashID: "#jSplash",loaderVPos: '41%',autoClose: true},function(){	 	
	 	$(".pop").animate({opacity:1,marginTop:-200},300);
	 	$(".pop").delay(4000).animate({opacity:0,marginTop:-300},800,pp);
	 	$(".popbg").delay(4000).animate({opacity:0},800,pp);
	 	$(".back").animate({opacity:1,marginTop:-130},300);
	 	$(".back").delay(2000).animate({opacity:0,marginTop:-160},800,pp);
	 });

	$(".ans_btn li a").hover(
		function(){
			$(this).stop(true,false).animate({opacity:0.8},300);
			$(this).children(".finger").animate({marginTop:-20},200);
		},
		function(){
	        $(this).stop(true,false).animate({opacity:1},300);
			$(this).children(".finger").animate({marginTop:-15},200);
		});

	$(".down_btn").hover(
		function(){
			$(this).stop(true,false).animate({opacity:0.8},300);
			$(this).children(".finger1").animate({marginTop:135},200);
		},
		function(){
	        $(this).stop(true,false).animate({opacity:1},300);
			$(this).children(".finger1").animate({marginTop:140},200);
		});

	$(".down_more").hover(
		function(){
			$(".down_icon").animate({marginLeft:275},200);
		},
		function(){
			$(".down_icon").animate({marginLeft:270},200);
		});
	$.plax.enable();
	$('.zoo01').plaxify({"xRange":20,"yRange":10});
	$('.zoo02').plaxify({"xRange":60,"yRange":10});
	$('.zoo03').plaxify({"xRange":20,"yRange":10});
	$('.index_main').plaxify({"xRange":30,"yRange":10});
	$('.rocket').plaxify({"xRange":20,"yRange":15});
	$('.line').plaxify({"xRange":10,"yRange":5});
	$('.down_main').plaxify({"xRange":30,"yRange":10});
	$('.down_zoo2').plaxify({"xRange":10,"yRange":5});
	$('.down_tag').plaxify({"xRange":30,"yRange":15});
	$('.rule_zoo1').plaxify({"xRange":20,"yRange":10});
	$('.rule_zoo2').plaxify({"xRange":30,"yRange":5});
	$('.rule_zoo3').plaxify({"xRange":10,"yRange":20});
	$('.rule_main').plaxify({"xRange":40,"yRange":15});
	$('.rule_rocket').plaxify({"xRange":20,"yRange":5});
	$('.rule_heart1').plaxify({"xRange":25,"yRange":10});
	$('.rule_heart2').plaxify({"xRange":20,"yRange":5});


	$(".down_btn").bind( "click", function() {
		$(".popbg").css("display", "block");
		$(".popbox").css("display", "block");
		$(".popbox").animate({opacity:1,marginTop:-200},800);
		$(".popbg").animate({opacity:1},800);
	});

	$(".close_btn").bind( "click", function() {
		$(".popbox").animate({opacity:0,marginTop:-300},800,pp);
		$(".popbg").animate({opacity:0},800,pp);
	});

});

function pp(){
	$(".pop").css("display", "none");
	$(".popbg").css("display", "none");
	$(".back").css("display", "none");
	$(".popbox").css("display", "none");
}




