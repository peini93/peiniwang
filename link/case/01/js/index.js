$(document).ready(function() {
	var mc1=$('.m3');
	    mc1.animateSprite({
        columns: 5,
        totalFrames: 5,
        duration: 300,
	    loop:true 
         });
		 
		var mc2=$('.flower1');
	    mc2.animateSprite({
        columns: 5,
        totalFrames: 5,
        duration: 1000,
	    loop:true 
         });
		 
		var mc3=$('.flower2');
	    mc3.animateSprite({
        columns: 5,
        totalFrames: 5,
        duration: 1500,
	    loop:true 
         });
	
});