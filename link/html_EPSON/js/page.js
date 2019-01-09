var g={
  viewWidth:0,
  viewHieght:0,
  minW:1000,
  minH:700
}


$(document).ready(function() {
  //calling jPreLoader
  // $('body').jpreLoader({
  //   splashID: "#jSplash",
  //   loaderVPos: '40%',
  //   splashVPos: '40%',
  //   autoClose: true
  // }, function() { //callback function
  //   showIndex();
  // });

  $(".rule").mCustomScrollbar({autoDraggerLength:false});

  $(window).resize(toResize);
  toResize();


  $('.btn_rule').on('click',function(event){
    event.preventDefault();
    $('.ruleContent').fadeIn();
  });


  $('.btn_form').on('click',function(event){
    event.preventDefault();
    $('.formContent').fadeIn();
  });


  $('#sendData').on('click',function(event){
    event.preventDefault();
    $('.formContent').fadeOut();
    $('.finContent').fadeIn();
  });


  $('.close').on('click',function(event){
    event.preventDefault();
    $('.formContent').fadeOut();
    $('.finContent').fadeOut();
    $('.ruleContent').fadeOut();
  });



});


function toResize(){
  g.viewWidth=$(window).width();
  g.viewHieght=$(window).height();

}

