$(document).ready(function() {
  TweenMax.to($("#s2"), 0.6, {autoAlpha:0});
  $(".sale01 a").css('background', 'url("img/sale_btn2_01.png")');  
});


function showAndHide(pNum){
  if(pNum==1){
    TweenMax.to($("#s1"), 0.6, {autoAlpha:1});
    TweenMax.to($("#s2"), 0.6, {autoAlpha:0});
    $(".sale01 a").css('background', 'url("img/sale_btn2_01.png")');
    $(".sale02 a").css('background', 'url("img/sale_btn1_02.png")');

  }else if(pNum==2){
    TweenMax.to($("#s1"), 0.6, {autoAlpha:0});
    TweenMax.to($("#s2"), 0.6, {autoAlpha:1});
    $(".sale01 a").css('background', 'url("img/sale_btn1_01.png")');
    $(".sale02 a").css('background', 'url("img/sale_btn2_02.png")');
  }

}