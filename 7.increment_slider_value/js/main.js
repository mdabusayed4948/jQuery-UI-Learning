
$(document).ready(function(){
	$("#slider").slider({
		value:100,
		min:0,
		max:500,
		step:10,
		slide:function(event, ui){
			$("#amount").val("TK. "+ui.value);
		}
	});
	$("#amount").val("TK. "+$("#slider").slider("value"));
	
});