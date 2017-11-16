$(document).ready(function(){
	$("#techlist li").draggable({
		//helper : "clone",
		helper:function(){
			return "<i><u><b>"+$(this).text()+"</b></u></i>";
		},
		revert : "invalid"
	});

	$("#phpFramwork").droppable({
		accept: 'li[data-value="php"]',
		activeClass:"widgethover",
		//activate: function(event, ui){
		//	$(this).addClass("widgethover");
		//},
		//deactivate: function(event, ui){
		//	$(this).removeClass("widgethover");
		//},
		//hoverClass:"widgethover",
		//over: function(event, ui){
		//	$(this).addClass("widgethover");
		//},
		//out: function(event, ui){
		//	$(this).removeClass("widgethover");
		//},
		drop:function(event, ui){
			$("#php").append(ui.draggable);
		}
	});

	$("#javaFramwork").droppable({
		accept: 'li[data-value="java"]',
		activeClass:"widgethover",
		//activate: function(event, ui){
		//	$(this).addClass("widgethover");
		//},
		//deactivate: function(event, ui){
		//	$(this).removeClass("widgethover");
		//},
		//hoverClass:"widgethover",
		drop:function(event, ui){
			$("#java").append(ui.draggable);
		}
	});



});