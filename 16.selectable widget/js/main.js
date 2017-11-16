$(document).ready(function(){
	$("#javaitem").selectable({
		stop:function(){
			var output="";
			$(".ui-selected").each(function(){
			output+=$(this).text()+"<br/>";
		});
			$("#state").html(output);
		}
	});

});