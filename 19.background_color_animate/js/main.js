$(document).ready(function(){
	var colorHandle = false;
		$("#showAnimate").click(function(){
			var ele = $("#makeAnimate");
			if(colorHandle){
				ele.animate({
					"font-size":"15",
					"background-color":"#444",
					"color":"#fff",
					"border-color":"#000",
					"border-width":"2",
				});
			}else{
				ele.animate({
					"font-size":"20",
					"background-color":"#fff",
					"color":"#000",
					"border-color":"green",
					"border-width":"5",
					"border-radius":"15"
				});
			}
			colorHandle =!colorHandle
		});


});