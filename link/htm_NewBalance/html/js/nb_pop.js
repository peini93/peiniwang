$(function(){
	
	 $(".pic").animate({ top:0,opacity:1},300);
	 $(".picdata").animate({ top:0,opacity:1},300);
	 
	 $(".popbtn").hover(function(){
		 $(".popbtnicon").stop(true,false).animate({ left:125},300);
	 },function(){
	 	 $(".popbtnicon").stop(true,false).animate({ left:120},300); 
	 });
});