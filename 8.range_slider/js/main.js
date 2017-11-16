$(document).ready(function(){
	var getOutput = $("#state");
	var getSlider = $("#slider");

	getSlider.slider({
		range:true,
		min:10,
		max:100,
		values:[20, 40],
		slide:function(event, ui){
			getOutput.html(ui.values[0]+" - "+ui.values[1]+" Taka");
			$("#minValue").val(ui.values[0]);
			$("#maxValue").val(ui.values[1]);
		},
		
	});

	getOutput.html(getSlider.slider("values",0)+" - "+getSlider.slider("values",1)+" Taka");
	$("#minValue").val(getSlider.slider("values",0));
	$("#maxValue").val(getSlider.slider("values",1));
});