//全域變數
var gVar = gVar || {};

$(document).ready(function() {
  setBgCSS();
  $(".btn").bind("mouseover", btnOve);
  $(".btn").bind("mouseout", btnOut);


  $('.fancybox').fancybox({
    width: 620,
    height: 390,
    minWidth  : 620,
    minHeight : 390,
    closeBtn  : false,
    padding: 0,
    margin: 0,
    iframe: {
      scrolling: 'no',
      preload: true
    }
  });

  $('.fancybox2').fancybox({
    width: 760,
    height: 360,
    minWidth  : 760,
    minHeight : 360,
    closeBtn  : false,
    padding: 0,
    margin: 0,
    iframe: {
      scrolling: 'no',
      preload: true
    }
  });

});


function setBgCSS() {
  for (var i = 1; i <= 5; i++) {
    gVar._tepmBtn = $(".map_b" + i + "-3");
    gVar.nowSituation = parseInt(gVar._tepmBtn.attr("situation"));
    gVar._sn = parseInt(gVar._tepmBtn.attr("sn"));
    gVar._pBtn = $(".map_b" + gVar._sn);
    gVar.nowBgMoveH = parseInt(gVar._pBtn.css("height"));

    switch (gVar.nowSituation) {
      case 1:
        gVar.bgNum = -1;
        break;
      case 2:
        gVar.bgNum = -3;
        break;
      case 3:
        gVar.bgNum = 0;
        break;
    }

    gVar._pBtn.css({
      backgroundPosition: "0 " + (gVar.nowBgMoveH * gVar.bgNum) + "px"
    });

  }

}


function btnOve(e) {
  gVar._top = parseInt($(e.target).attr("starTop"));
  gVar._left = parseInt($(e.target).attr("starLeft"));

  gVar._sn = parseInt($(e.target).attr("sn"));
  gVar._pBtn = $(".map_b" + gVar._sn);
  gVar._mc = $(".map_b" + gVar._sn + "-2");

  gVar.bgMoveH = parseInt(gVar._pBtn.css("height"));

  $(".star").css({
    display: 'block',
    top: gVar._top,
    left: gVar._left
  }).animateSprite({
    columns: 10,
    totalFrames: 10,
    duration: 700,
    complete: function() {
      $(".star").css("display", "none");
    }
  });


  gVar._mc.animateSprite({
    columns: 4,
    totalFrames: 4,
    duration: 700,
    loop: true
  });

  gVar._mc.animateSprite("restartAnimation");
  $(".star").animateSprite("restartAnimation");

  gVar.bgNum = -2;
  gVar._pBtn.css({
    backgroundPosition: "0 " + (gVar.bgMoveH * gVar.bgNum) + "px"
  });
}


function btnOut(e) {
  gVar._sn = parseInt($(e.target).attr("sn"));
  gVar._pBtn = $(".map_b" + gVar._sn);
  gVar._mc = $(".map_b" + gVar._sn + "-2");

  gVar.situation = parseInt($(e.target).attr("situation"));
  gVar.bgMoveH = parseInt(gVar._pBtn.css("height"));

  $(".star").animateSprite("stopAnimation");
  $(".star").animateSprite("frame", 0);
  $(".star").css("display", "none");
  gVar._mc.animateSprite("stopAnimation");
  gVar._mc.animateSprite("frame", 0);


  switch (gVar.situation) {
    case 1:
      gVar.bgNum = -1;
      break;
    case 2:
      gVar.bgNum = -3;
      break;
    case 3:
      gVar.bgNum = 0;
      break;
  }


  gVar._pBtn.css({
    backgroundPosition: "0 " + (gVar.bgMoveH * gVar.bgNum) + "px"
  });
}