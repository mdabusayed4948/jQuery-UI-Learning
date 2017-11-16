$(document).ready(function(){
	//$("#draggablewidget").draggable({
		//containment:"parent",
		//cursor:"move",
		//opacity:0.5,
		//revert:true
	//});


	$("div").draggable({
		snap:"#outeroption",
		snapTolerance:50,
		cancel:"#outeroption"
	});



});