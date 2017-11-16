$(document).ready(function(){
	$("#showDate").datepicker({
		//appendText:"mm/dd/yy",
		showOn:"both",
		buttonText:"Show Date",
		dateFormat:"dd/mm/yy",
		//numberOfMonths:2,
		changeMonth:true,
		changeYear:true
	});

});