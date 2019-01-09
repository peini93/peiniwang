$(function(){

		// $('body').jpreLoader({splashID: "#jSplash",loaderVPos: '41%',autoClose: true},function(){});
// $(window).scroll(function() {
//     if ($(this).scrollTop() != 0) {
//       $('.gotop').fadeIn();
//     } else {
//       $('.gotop').fadeOut();
//     }
//   });
		$('body').jpreLoader({
			splashID: "#jSplash",
			loaderVPos: '50%',
			splashVPos: '50%',
			autoClose: true
		}, function() { //callback function
		});
		$('.btn01').on("click", function(){
			  	$('html,body').animate({scrollTop:$("#a01").offset().top},800);
			 });
		$('.btn02').on("click", function(){
			  	$('html,body').animate({scrollTop:$("#a02").offset().top},800);
			 });
		$('.btn03').on("click", function(){
			  	$('html,body').animate({scrollTop:$("#a03").offset().top},800);
			 });
		$('.btn04').on("click", function(){
			  	$('html,body').animate({scrollTop:$("#a04").offset().top},800);
			 });
		$('.btn05').on("click", function(){
			  	$('html,body').animate({scrollTop:$("#a05").offset().top},800);
			 });
		$('.gotop').on("click", function(){
			  	$('html,body').animate({scrollTop:0},800);
			 });

		// $(".m02,.m03,.m06,.m07").hover(
		// function(){
		// 	$(this).children(".arron").animate({right:10},200);
		// },
		// function(){
		// 	$(this).children(".arron").animate({right:20},200);
		// });


		// $(".m02").bind( "click", function() {
		// 	$(".m01").stop(true,false).animate({left:0},300);
		// 	$(".m02").stop(true,false).animate({left:1000},300);
		// 	$(".m03").stop(true,false).animate({left:1000},300);
	 //    });

	 //    $(".goback01").bind( "click", function() {
		// 	$(".m01").stop(true,false).animate({left:-1000},300);
		// 	$(".m02").stop(true,false).animate({left:0},300);
		// 	$(".m03").stop(true,false).animate({left:500},300);
	 //    });

	 //    $(".m03").bind( "click", function() {
		// 	$(".m04").stop(true,false).animate({left:0},300);
		// 	$(".m02").stop(true,false).animate({left:-1000},300);
		// 	$(".m03").stop(true,false).animate({left:-1000},300);
	 //    });

	 //    $(".goback02").bind( "click", function() {
		// 	$(".m04").stop(true,false).animate({left:1000},300);
		// 	$(".m02").stop(true,false).animate({left:0},300);
		// 	$(".m03").stop(true,false).animate({left:500},300);
	 //    });

	 //    $(".m06").bind( "click", function() {
		// 	$(".m05").stop(true,false).animate({left:0},300);
		// 	$(".m06").stop(true,false).animate({left:1000},300);
		// 	$(".m07").stop(true,false).animate({left:1000},300);
	 //    });

	 //    $(".goback03").bind( "click", function() {
		// 	$(".m05").stop(true,false).animate({left:-1000},300);
		// 	$(".m06").stop(true,false).animate({left:0},300);
		// 	$(".m07").stop(true,false).animate({left:500},300);
	 //    });

	 //     $(".m07").bind( "click", function() {
		// 	$(".m08").stop(true,false).animate({left:0},300);
		// 	$(".m06").stop(true,false).animate({left:-1000},300);
		// 	$(".m07").stop(true,false).animate({left:-1000},300);
	 //    });

	 //    $(".goback04").bind( "click", function() {
		// 	$(".m08").stop(true,false).animate({left:1000},300);
		// 	$(".m06").stop(true,false).animate({left:0},300);
		// 	$(".m07").stop(true,false).animate({left:500},300);
	 //    });

});