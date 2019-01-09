$(document).ready(function() {
  TweenMax.to($("#s2"), 0.6, {autoAlpha:0});
  $(".store01 a").css('background', 'url("img/store_btn2_01.png")');

  $('.fancybox').fancybox({
    width: 670,
    height: 410,
    minWidth  : 670,
    minHeight : 410,
    closeBtn  : false,
    padding: 0,
    margin: 0,
    iframe: {
      scrolling: 'no',
      preload: true
    }
  });
  
});


function showAndHide(pNum){
  if(pNum==1){
    TweenMax.to($("#s1"), 0.6, {autoAlpha:1});
    TweenMax.to($("#s2"), 0.6, {autoAlpha:0});
    $(".store01 a").css('background', 'url("img/store_btn2_01.png")');
    $(".store02 a").css('background', 'url("img/store_btn1_02.png")');

  }else if(pNum==2){
    TweenMax.to($("#s1"), 0.6, {autoAlpha:0});
    TweenMax.to($("#s2"), 0.6, {autoAlpha:1});
    $(".store01 a").css('background', 'url("img/store_btn1_01.png")');
    $(".store02 a").css('background', 'url("img/store_btn2_02.png")');
  }

}