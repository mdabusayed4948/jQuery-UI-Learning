$(function(){
		$("#username_error_msg").hide();
		$("#password_error_msg").hide();
		$("#password_again_error_msg").hide();
		$("#email_error_msg").hide();

		var error_username       = false;
		var error_password       = false;
		var error_password_again = false;
		var error_email          = false;

		$("#username").focusout(function(){
			check_username();
		});

		$("#passwword").focusout(function(){
			check_password();
		});

		$("#passwword_again").focusout(function(){
			check_value_password();
		});

		$("#email").focusout(function(){
			check_email()
		});


	function check_username(){
		var username_length = $("#username").val().length;
		if (username_length < 5 || username_length >20) {
			$("#username_error_msg").html("username should be between 5-20 character");
			$("#username_error_msg").show();
			error_username = true;

		}else{
			$("#username_error_msg").hide();
		}
	}


	function check_password(){
		var password_length = $("#password").val().length;
		if (password_length < 8 ) {
			$("#password_error_msg").html("Password should be minimum 8 character");
			$("#password_error_msg").show();
			error_password = true;

		}else{
			$("#password_error_msg").hide();
		}
	}

	function check_value_password(){
		var password = $("#password").val();
		var password_again = $("#password_again").val();
		if (password != password_again) {
			$("#password_again_error_msg").html("Password did not match");
			$("#password_again_error_msg").show();
			error_password_again = true;

		}else{
			$("#password_again_error_msg").hide();
		}
	}

	function check_email(){
		var pattern = new RegExp( 	
/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
		if (pattern.test($("#email").val())) {
			$("#email_error_msg").hide();

		}else{
			
			$("#email_error_msg").html("Invalid Email Address !!");
			$("#email_error_msg").show();
			error_email = true;
		}
	}

	$("#myform").submit(function(){
		var error_username       = false;
		var error_password       = false;
		var error_password_again = false;
		var error_email          = false;

		if(error_username == false && error_password  == false && error_password_again == false && error_email == false){
			return true;
		}else{
			return false;
		}
	});
});