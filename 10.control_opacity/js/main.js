$(document).ready(function(){
	$("#imgHeight, #imgWidth").slider({
		min:100, max:500, slide: controlImg
	});

	$("#imgOpacity").slider({
		min:0, max:100, value:100, slide: controlImg
	});

		function controlImg(){
			var height  = $("#imgHeight").slider("value");
			var width   = $("#imgWidth").slider("value");
			var opacity = $("#imgOpacity").slider("value");

			$("#liveimg").css({
				height:height, width:width,opacity:opacity/100
			});

			$("#state").html("Height: "+height+" Pixels<br/>"+"Width: "+width+" Pixels<br/>"+"Opacity: "+opacity/100);

		}
});