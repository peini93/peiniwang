$(document).ready(function(){
	$('body').jpreLoader({
		splashID: "#jSplash",
		loaderVPos: '41%',
		autoClose: true	
	}, function() {	
		
$('#content').fadeIn(500);	

var c1 = $("#c1");
TweenMax.to(c1, 3, {
	repeat:-1 ,
    width:"670px",
	height:"670px",
	yoyo:true,
	opacity: 0.3,
	ease:Circ.easeIn
	});
var c2 = $("#c2");
TweenMax.to(c2, 1, {
	repeat:0 ,
	width:"540px",
	height:"180px",
	marginTop:"-90px",
	marginLeft:"-270px",
	opacity: 1,
	ease:Circ.easeIn
	});

var c4 = $("#c4");
TweenMax.to(c4, 1, {
	repeat:0 ,
	delay:13,
	width:"300px",
	height:"97px",
	marginTop:"-80px",
	marginLeft:"-150px",
	opacity: 1,
	ease:Circ.easeIn,
	onComplete:introFin
	});
	
$(".word").delay(2000).animate({
          opacity: 0
          }, 500 );
$(".word1").delay(2500).animate({
          opacity: 1
          }, 1000 );
$(".word1").delay(6500).animate({
          opacity: 0
          }, 1000 );
$(".word3-1").delay(3000).animate({
          opacity: 1
          }, 1000 );
$(".word3-1").delay(500).animate({
          opacity: 0,
		  width:50,
		  height:13,
		  marginTop:0,
		  marginLeft:0
          }, 2000 );
$(".word3-2").delay(4500).animate({
          opacity: 1
          }, 1000 );
$(".word3-2").delay(500).animate({
          opacity: 0,
		  width:50,
		  height:12,
		  marginTop:0,
		  marginLeft:0
          }, 2000 );
$(".word3-3").delay(5000).animate({
          opacity: 1
          }, 1000 );
$(".word3-3").delay(500).animate({
          opacity: 0,
		  width:50,
		  height:13,
		  marginTop:0,
		  marginLeft:0
          }, 2000 );
		  
$(".word2").delay(11000).animate({
          opacity: 1
          }, 1000 );
		  
$(".pro1").delay(3500).animate({
          opacity: 1
          }, 500 );
$(".pro1").delay(500).animate({
          opacity: 0,
		  width:80,
		  height:83,
		  marginTop:0,
		  marginLeft:0
          }, 1200 );
$(".pro2").delay(4500).animate({
          opacity: 1
          }, 500 );
$(".pro2").delay(500).animate({
          opacity: 0,
		  width:80,
		  height:86,
		  marginTop:0,
		  marginLeft:0
          }, 2000 );	
$(".pro3").delay(3800).animate({
          opacity: 1
          }, 500 );
$(".pro3").delay(500).animate({
          opacity: 0,
		  width:100,
		  height:150,
		  marginTop:0,
		  marginLeft:0
          }, 1000 );	
$(".pro4").delay(4800).animate({
          opacity: 1
          }, 1500 );
$(".pro4").delay(500).animate({
          opacity: 0,
		  width:80,
		  height:45,
		  marginTop:0,
		  marginLeft:0
          }, 1500 );
$(".pro5").delay(4500).animate({
          opacity: 1
          }, 500 );
$(".pro5").delay(500).animate({
          opacity: 0,
		  width:100,
		  height:57,
		  marginTop:0,
		  marginLeft:0
          }, 1500 );	
$(".pro6").delay(5000).animate({
          opacity: 1
          }, 2000 );
$(".pro6").delay(500).animate({
          opacity: 0,
		  width:100,
		  height:75,
		  marginTop:0,
		  marginLeft:0
          }, 1500 );
$(".pro7").delay(5000).animate({
          opacity: 1
          }, 2000 );
$(".pro7").delay(500).animate({
          opacity: 0,
		  width:100,
		  height:117,
		  marginTop:0,
		  marginLeft:0
          }, 1500 );
$(".pro8").delay(5500).animate({
          opacity: 1
          }, 2000 );
$(".pro8").delay(500).animate({
          opacity: 0,
		  width:100,
		  height:117,
		  marginTop:0,
		  marginLeft:0
          }, 1000 );	
$(".pro9").delay(6000).animate({
          opacity: 1
          }, 2000 );
$(".pro9").delay(500).animate({
          opacity: 0,
		  width:80,
		  height:57,
		  marginTop:0,
		  marginLeft:0
          }, 1500 );
$(".pro10").delay(6500).animate({
          opacity: 1
          }, 2000 );
$(".pro10").delay(500).animate({
          opacity: 0,
		  width:80,
		  height:61,
		  marginTop:0,
		  marginLeft:0
          }, 1500 );
});	

});	


function introFin(){
	TweenMax.delayedCall(1.5,function(){
		window.location.href="milestone.html";
	})
}