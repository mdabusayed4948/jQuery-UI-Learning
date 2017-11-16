$(document).ready(function(){
	$("#phpitems").sortable({
		placeholder:"selecteditem",
		axis:"y",
		opacity:.4,
		items:'li[data-value="framework"]'
	});

});