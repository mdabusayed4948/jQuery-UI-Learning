$(document).ready(function(){
	var classHandle = true;
		$("#showAnimate").click(function(){
			if(classHandle){
				$("#makeAnimate").addClass("liveDiv",500,"easeInQuart", function(){
					alert("animation completed........");
				});
			}else{
				$("#makeAnimate").removeClass("liveDiv",500,"swing");
			}
			classHandle = !classHandle;
		});


});