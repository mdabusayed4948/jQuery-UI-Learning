$(document).ready(function(){
	$("#box").click(function(){
		$("#box").effect(
			//"shake",{
			//time:10,
			//distance:100
		//},5000, function(){
		//	$(this).css("background","red");
		//}

		{
			effect:"explode",
			easing:"easeInExpo",
			pieces:4,
			duration:4000
		}
		);
	})
});