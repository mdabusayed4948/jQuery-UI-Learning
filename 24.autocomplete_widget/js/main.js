$(document).ready(function(){
	var tech =[
		"php",
		"Java",
		"jQuery",
		"JavaScript",
		"Perl",
		"Ruby",
		"Swing",
		"Html",
		"CSS"
		
	];
	$("#gettech").autocomplete({
		source:tech,
		autoFocus:true,
		minLength:2,
		delay:800 

		
	});
});