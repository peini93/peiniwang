//index
function wordingGo(){
	$("#color1").fadeIn(1000,function(){
		$("#wording1").css("display","block");
		$("#color1").animate({left:500},1000,function(){$("#color1").css("display","none");});
	});
						   
	$("#color2").delay(500).fadeIn(1000,function(){
		$("#wording2").css("display","block");
		$("#color2").animate({left:500},1000,function(){$("#color2").css("display","none");});
	});
						   
	$("#color3").delay(1000).fadeIn(1000,function(){
		$("#wording3").css("display","block");
		$("#color3").animate({left:500},1000,function(){$("#color3").css("display","none");});
	});
						   
	$("#color4").delay(1500).fadeIn(1000,function(){
		$("#wording4").css("display","block");
		$("#color4").animate({left:500},1000,function(){$("#color4").css("display","none");});
	 });
	$("#color5").delay(2000).fadeIn(1000,function(){
		$("#wording5").css("display","block");
		$("#color5").animate({left:500},1000,function(){$("#color5").css("display","none");});
	 });
}


var nowPic=1;

function chkImg(n){
	if(nowPic!=n){
		var _temp=nowPic;
		//$("#p1").animate({left:100,opacity:0},800);
	    //$("#p2").animate({left:100,opacity:0},800);
	    //$("#p3").animate({left:100,opacity:0},800);
		$("#p"+_temp).animate({left:100,opacity:0},800);
		$(".botimg li a").each(function(){$(this).removeClass('selected');});
		
		nowPic=n;
		$("#p"+n).animate({left:0,opacity:1},800);
		$(".botimg li:nth-child("+n+") a").addClass('selected');
	}
	
}


function autoChg(){
	//alert("123");
	var _temp=nowPic;
	
	if(nowPic<3){
		nowPic+=1;
	}else{
		nowPic=1;
	}
	
	$("#p"+_temp).animate({left:100,opacity:0},800);
	$("#p"+nowPic).animate({left:0,opacity:1},800);
	$(".botimg li a").each(function(){$(this).removeClass('selected');});
	$(".botimg li:nth-child("+nowPic+") a").addClass('selected');
}












//products
var nowSubP=1;
var nowSubPSub=1;

function setSubBtn(){
	$(".pro_btn li a").bind("mouseover",function(){
		$(this).animate({width:180},200);
	});
	
	$(".pro_btn li a").bind("mouseout",function(){
		$(this).animate({width:120},200);
	});
	
	$(".pro_btn li:nth-child("+nowSubP+") a").unbind("mouseout");
	$(".pro_btn li:nth-child("+nowSubP+") a").animate({width:180},200);
}



function goPro(n){
	if(nowSubP!=n){
		$(".pro_btn li:nth-child("+nowSubP+") a").animate({width:120},200);
	}
	
	$(".pro_btn li:nth-child("+nowSubP+") a").bind("mouseout",function(){
		$(this).animate({width:120},200);
	});
	
		if(nowSubP<=n){
		   switch(n){
			case 1:
			   nowSubP=n;
			   $(".pro_btn li:nth-child("+nowSubP+") a").unbind("mouseout");
			   goColor("toD","#f05a89");
			   $(".pro_btn li:nth-child("+nowSubP+") a").animate({width:180},200);    
			   break;
			case 2:
			   nowSubP=n;
			   $(".pro_btn li:nth-child("+nowSubP+") a").unbind("mouseout");
			   goColor("toD","#ef3f30");
			   $(".pro_btn li:nth-child("+nowSubP+") a").animate({width:180},200);   
			   break;
			case 3:
			   nowSubP=n;
			   $(".pro_btn li:nth-child("+nowSubP+") a").unbind("mouseout");
			   goColor("toD","#f58232");
			   $(".pro_btn li:nth-child("+nowSubP+") a").animate({width:180},200);     
			   break;
			case 4:
			   nowSubP=n;
			   $(".pro_btn li:nth-child("+nowSubP+") a").unbind("mouseout");
			   goColor("toD","#7961ab");
			    $(".pro_btn li:nth-child("+nowSubP+") a").animate({width:180},200);   
			   break;
			case 5:
			   nowSubP=n;
			   $(".pro_btn li:nth-child("+nowSubP+") a").unbind("mouseout");
			   goColor("toD","#2384c6"); 
			   $(".pro_btn li:nth-child("+nowSubP+") a").animate({width:180},200);    
			   break;
			case 6:
			   nowSubP=n;
			   $(".pro_btn li:nth-child("+nowSubP+") a").unbind("mouseout");
			   goColor("toD","#6fc054");
			   $(".pro_btn li:nth-child("+nowSubP+") a").animate({width:180},200);     
			   break;
			case 8:
			   nowSubP=n;
			   $(".pro_btn li:nth-child("+nowSubP+") a").unbind("mouseout");
			   goColor("toD","#9f1f63");
			   $(".pro_btn li:nth-child("+nowSubP+") a").animate({width:180},200);     
			   break;
			case 7:
			   nowSubP=n;
			   $(".pro_btn li:nth-child("+nowSubP+") a").unbind("mouseout");
			   goColor("toD","#1331b6");
			   $(".pro_btn li:nth-child("+nowSubP+") a").animate({width:180},200);     
			   break;
		   }	
			
		}else{
		   switch(n){
			case 1:
			   nowSubP=n;
			   $(".pro_btn li:nth-child("+nowSubP+") a").unbind("mouseout");
			   goColor("toU","#f05a89");    
			   break;
			case 2:
			   nowSubP=n;
			   $(".pro_btn li:nth-child("+nowSubP+") a").unbind("mouseout");
			   goColor("toU","#ef3f30");    
			   break;
			case 3:
			   nowSubP=n;
			   $(".pro_btn li:nth-child("+nowSubP+") a").unbind("mouseout");
			   goColor("toU","#f58232");    
			   break;
			case 4:
			   nowSubP=n;
			   $(".pro_btn li:nth-child("+nowSubP+") a").unbind("mouseout");
			   goColor("toU","#7961ab");    
			   break;
			case 5:
			   nowSubP=n;
			   $(".pro_btn li:nth-child("+nowSubP+") a").unbind("mouseout");
			   goColor("toU","#2384c6");    
			   break;
			case 6:
			   nowSubP=n;
			   $(".pro_btn li:nth-child("+nowSubP+") a").unbind("mouseout");
			   goColor("toU","#6fc054");    
			   break;
			case 8:
			   nowSubP=n;
			   $(".pro_btn li:nth-child("+nowSubP+") a").unbind("mouseout");
			   goColor("toU","#9f1f63");    
			   break;
			case 7:
			   nowSubP=n;
			   $(".pro_btn li:nth-child("+nowSubP+") a").unbind("mouseout");
			   goColor("toU","#1331b6");    
			   break;
		   }
			
		}
	
}





function goProSub(n){
	if(nowSubPSub!=n){
		//$('#pro_p'+nowSubP+' .sub_btn').css("display","block");		
		$('#pro_p'+nowSubP+' .sub_btn li a').each(function(){$(this).removeClass('selected');});
		
		if(nowSubPSub<n){
		   switch(nowSubP){
			case 1:
		       nowSubPSub=n;
		       $('#pro_p'+nowSubP+' .sub_btn li:nth-child('+(nowSubPSub-1)+') a').addClass('selected');
			   goColor("toR","#f05a89");    
			   break;
			case 2:
		       nowSubPSub=n;
		       $('#pro_p'+nowSubP+' .sub_btn li:nth-child('+(nowSubPSub-1)+') a').addClass('selected');
			   goColor("toR","#ef3f30");    
			   break;
			case 3:
		       nowSubPSub=n;
		       $('#pro_p'+nowSubP+' .sub_btn li:nth-child('+(nowSubPSub-1)+') a').addClass('selected');
			   goColor("toR","#f58232");    
			   break;
			case 4:
		       nowSubPSub=n;
		       $('#pro_p'+nowSubP+' .sub_btn li:nth-child('+(nowSubPSub-1)+') a').addClass('selected');
			   goColor("toR","#7961ab");    
			   break;
			case 5:
		       nowSubPSub=n;
		       $('#pro_p'+nowSubP+' .sub_btn li:nth-child('+(nowSubPSub-1)+') a').addClass('selected');
			   goColor("toR","#2384c6");    
			   break;
			case 6:
		       nowSubPSub=n;
		       $('#pro_p'+nowSubP+' .sub_btn li:nth-child('+(nowSubPSub-1)+') a').addClass('selected');
			   goColor("toR","#6fc054");    
			   break;
			case 8:
		       nowSubPSub=n;
		       $('#pro_p'+nowSubP+' .sub_btn li:nth-child('+(nowSubPSub-1)+') a').addClass('selected');
			   goColor("toR","#9f1f63");    
			   break;
			case 7:
		       nowSubPSub=n;
		       $('#pro_p'+nowSubP+' .sub_btn li:nth-child('+(nowSubPSub-1)+') a').addClass('selected');
			   goColor("toR","#1331b6");    
			   break;
		   }	
			
		}else{
		   switch(nowSubP){
			case 1:
		       nowSubPSub=n;
		       $('#pro_p'+nowSubP+' .sub_btn li:nth-child('+(nowSubPSub-1)+') a').addClass('selected');
			   goColor("toL","#f05a89");    
			   break;
			case 2:
		       nowSubPSub=n;
		       $('#pro_p'+nowSubP+' .sub_btn li:nth-child('+(nowSubPSub-1)+') a').addClass('selected');
			   goColor("toL","#ef3f30");    
			   break;
			case 3:
		       nowSubPSub=n;
		       $('#pro_p'+nowSubP+' .sub_btn li:nth-child('+(nowSubPSub-1)+') a').addClass('selected');
			   goColor("toL","#f58232");    
			   break;
			case 4:
		       nowSubPSub=n;
		       $('#pro_p'+nowSubP+' .sub_btn li:nth-child('+(nowSubPSub-1)+') a').addClass('selected');
			   goColor("toL","#7961ab");    
			   break;
			case 5:
		       nowSubPSub=n;
		       $('#pro_p'+nowSubP+' .sub_btn li:nth-child('+(nowSubPSub-1)+') a').addClass('selected');
			   goColor("toL","#2384c6");    
			   break;
			case 6:
		       nowSubPSub=n;
		       $('#pro_p'+nowSubP+' .sub_btn li:nth-child('+(nowSubPSub-1)+') a').addClass('selected');
			   goColor("toL","#6fc054");    
			   break;
			case 8:
		       nowSubPSub=n;
		       $('#pro_p'+nowSubP+' .sub_btn li:nth-child('+(nowSubPSub-1)+') a').addClass('selected');
			   goColor("toL","#9f1f63");    
			   break;
			case 7:
		       nowSubPSub=n;
		       $('#pro_p'+nowSubP+' .sub_btn li:nth-child('+(nowSubPSub-1)+') a').addClass('selected');
			   goColor("toL","#1331b6");    
			   break;
		   }
			
		}
	
	}
}


function showP(){
	$('#pro_p1').css("display","none");
	$('#pro_p2').css("display","none");
	$('#pro_p3').css("display","none");
	$('#pro_p4').css("display","none");
	$('#pro_p5').css("display","none");
	$('#pro_p6').css("display","none");
	$('#pro_p7').css("display","none");
	$('#pro_p8').css("display","none");
	
	nowSubPSub=1;
	$('.sub_btn').css("display","none");
	$('#pro_p'+nowSubP+' .pArea').each(function(){$(this).removeClass('show');});
	
	$('#pro_p'+nowSubP+' #p'+nowSubP+'_'+nowSubPSub+'.pArea').addClass('show');
	$('#pro_p'+nowSubP).css("display","block");
}


function showPSub(){
	$('#pro_p'+nowSubP+' .sub_btn').css("display","block");
	
	$('#pro_p'+nowSubP+' .pArea').each(function(){$(this).removeClass('show');});
	$('#pro_p'+nowSubP+' #p'+nowSubP+'_'+nowSubPSub+'.pArea').addClass('show');
}



function goColor(_to,_color){
	var _startX=$('#main').width();
	var _startY=$('#main').height();
	
    switch(_to){
    case "toL":
        $("#colorItem").css("background-color",_color);
		$("#colorItem").css('top',0);
        $("#colorItem").css('left',_startX);
        $("#colorItem").animate({left:0},600,function(){
			showPSub();
			$("#colorItem").delay(300).animate({left:-_startX},600);
        });
        break;
    case "toR":
        $("#colorItem").css("background-color",_color);
		$("#colorItem").css('top',0);
        $("#colorItem").css('left',-_startX);
        $("#colorItem").animate({left:0},600,function(){
			showPSub();
			$("#colorItem").delay(300).animate({left:_startX},600);
        });
        break;
    case "toU":
        $("#colorItem").css("background-color",_color);
		$("#colorItem").css('left',0);
        $("#colorItem").css('top',_startY);
        $("#colorItem").animate({top:0},600,function(){
			showP();
			$("#colorItem").delay(300).animate({top:-_startY},600);
        });
        break;
    case "toD":
        $("#colorItem").css("background-color",_color);
		$("#colorItem").css('left',0);
        $("#colorItem").css('top',-_startY);
        $("#colorItem").animate({top:0},600,function(){
			showP();
			$("#colorItem").delay(300).animate({top:_startY},600);
        });
        break;
	    
    }
}






//視窗大小設定
window.onresize=Resize;
function Resize(){
	var _dw=$(window).width();
	var _dh=$(window).height();
	//$('#footer').css("top",(_dh-$('#footer').height()));
	
	if (_dw<=1000){
		$('#container').css("width",1000);
		$('#header').css("width",1000);
		$('#footer').css("width",1000);
		$('#img_d').css("left",390);
		$("#colorItem").css('left',1000);
		
	}else{
		$('#container').css("width",'100%');
		$('#header').css("width",'100%');
		$('#footer').css("width",'100%');
		$('#img_d').css("left",390+(_dw-1000)/2);
		$("#colorItem").css('left',_dw);
	}
	
	if (_dh<=600){
		$('#container').css("height",600);
		$('#main').css("height",495);
		$("#colorItem").css('top',495);
	}else{
		$('#container').css("height",'100%');
		$('#main').css("height",_dh-($('#header').height()+$('#footer').height()));
		$("#colorItem").css('top',_dh-($('#header').height()+$('#footer').height()));
	}
	
	$('#index_word').css("top",($('#main').height()-$('#index_word').height())/2);

}

//rule//

$(document).ready(function(){
 $(window).scroll(function(){
  var y = $(window).scrollTop();
  if( y > 300){
   $(".bkpp").animate({marginTop: 50,opacity:1}, 800);
  } else {
  }
 });
})