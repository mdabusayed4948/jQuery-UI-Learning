$(document).ready(function(){
	$("#textname").tooltip({
		content: tooltip(),
		track: true,
		show:{ delay:100, duration:500, effect:"slideDown"},
		hide:{ delay:100, duration:500, effect:"slideUp"}
	
	});

	function tooltip(){
		return "Content from function...";
	}
});