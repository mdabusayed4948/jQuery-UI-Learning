$(document).ready(function(){
	$("#imgHeight, #imgWidth").slider({
		min:100, max:500, slide: controlImg
	});
		function controlImg(){
			var height = $("#imgHeight").slider("value");
			var width  = $("#imgWidth").slider("value");
			$("#liveimg").css({
				height:height, width:width
			});

			$("#state").html("Height: "+height+" Pixels<br/>"+"Width: "+width+" Pixels");

		}
});