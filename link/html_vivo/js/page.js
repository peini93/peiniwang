var min=1200;
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
	// $.plax.enable();
	// $('.ml').plaxify({"xRange":20,"yRange":10});
	// $('.mr').plaxify({"xRange":10,"yRange":20});
	// $('.r_title').plaxify({"xRange":20,"yRange":10});
	// $('.l_title').plaxify({"xRange":10,"yRange":20});
	
});

//滑鼠事件
function PRODUCT(){
	$(".btn2").hover(function(){
		TweenMax.to($('.ml img'), 0.3, {scale: 1.05});
		TweenMax.to($('.mr img'), 0.3, {scale: 0.95});
	},function(){
		TweenMax.to($('.ml img'), 0.3, {scale: 1});
		TweenMax.to($('.mr img'), 0.3, {scale: 1});
	});

	$(".btn3").hover(function(){
		TweenMax.to($('.ml img'), 0.3, {scale: 0.95});
		TweenMax.to($('.mr img'), 0.3, {scale: 1.05});
	},function(){
		TweenMax.to($('.ml img'), 0.3, {scale: 1});
		TweenMax.to($('.mr img'), 0.3, {scale: 1});
	});
}

