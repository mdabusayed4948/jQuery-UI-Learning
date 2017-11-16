$(document).ready(function(){
	$("#boxone").resizable({
		start: function(event, ui){
			$("#startDim").html(liveDim(event, ui));
		},

		resize: function(event, ui){
			$("#resizingDim").html(liveDim(event, ui));
		},

		stop: function(event, ui){
			$("#stopDim").html(liveDim(event, ui));
		}

		
	});
	function liveDim(event, ui){
			var ele = "Height"+ui.size.height+"<br/>";
			 ele += "Width"+ui.size.width;
			 return ele;
		}

});