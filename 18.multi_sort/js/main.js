$(document).ready(function(){
	$("#framework, #cms").sortable({
		//connectWith:"#framework, #cms"
		connectWith:'ul[data-value="connect"]'
	});

});