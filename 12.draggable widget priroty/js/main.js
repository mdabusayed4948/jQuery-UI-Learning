$(document).ready(function(){
	//$("#draggablewidget").draggable({
		//containment:"parent",
		//cursor:"move",
		//opacity:0.5,
		//revert:true
	//});


	$(".ourDiv").draggable();
	$(".ourDiv").mousedown(function(){
		var MaxZindex = 0;
		$(this).siblings().each(function(){
			var currentZindex = Number($(this).css("z-index"));
			MaxZindex = currentZindex > MaxZindex ? currentZindex : MaxZindex;
		});
		$(this).css("z-index", MaxZindex+1);
	});



});