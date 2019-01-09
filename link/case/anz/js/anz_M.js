$(function(){

		$('body').jpreLoader({splashID: "#jSplash",loaderVPos: '41%',autoClose: true},function(){
                // gogo();
                menu();
		});
         
        
   
	
});



// function gogo(){
//     TweenMax.to(".index_titel", 1, { right:"73px",opacity: 1, ease:Elastic.easeOut});
//     TweenMax.to(".kv", 1, { left:"190px",opacity: 1, delay:0.5,ease:Elastic.easeOut});
//     TweenMax.to(".kv_btn01 img", 1, { opacity: 1, delay:0.8,ease:Elastic.easeOut});
//     TweenMax.to(".kv_btn02 img", 1, { opacity: 1, delay:1.1,ease:Elastic.easeOut});
//     TweenMax.to(".kv_btn03 img", 1, { opacity: 1, delay:1.4,ease:Elastic.easeOut});
//     TweenMax.to(".kv_btn04 img", 1, { opacity: 1, delay:1.7,ease:Elastic.easeOut});
// }


function menu(){
	$('.navbar').on('click',function(event){
		 event.preventDefault();
    	$('.m_menu').slideToggle();
      });
}