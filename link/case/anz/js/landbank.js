$(function(){

		$('body').jpreLoader({splashID: "#jSplash",loaderVPos: '41%',autoClose: true},function(){
           
          

		});

		 Resize();
         
        
   
	
});

function Resize() {
	var minW=1200;
	var minH=750;
    var viewWidth=$(window).width();
    var viewHieght=$(window).height();
    var ddW=(viewWidth-minW)/2;
    var ddH=(viewHieght-minH)/2;
    var scaleX=viewWidth/minW;
    var scaleY=viewHieght/minH;

    if (viewWidth<=minW){


         $('.main').css({'height': minH });

         

    	}else{
    	 $('.main').css({'height': viewHieght });



    	};	
}