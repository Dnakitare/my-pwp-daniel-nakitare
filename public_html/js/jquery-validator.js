$(document).ready(function() {
	/**
	 * jQuery Validate Function
	 *
	 * function provides front-end validation for your form. If all test set up here pass, the form data is AJAX submitted to the mailer.php file.
	 *
	 * Update file as needed for your form.
	 * All ids and name values must match up to your form here.
	 */

	/* begin validate function */
	$("form").validate({

		// setup handling of form errors
		debug: true,
		errorClass: "alert alert-danger",
		errorLabelContainer: "#output-area",
		errorElement: "div",

		// rules define what is good or bad input
		// each rule starts with the form input element's NAME attribute
		rules: {
			name: {
				required: true
			},
			email: {
				email: true,
				required: true
			},
			message: {
				required: true,
				maxlength: 280,
			}
		},

		// error messages to display to the end user when rules don't pass
		message: {
			name: {
				required: "Please enter your name."
			},
			email: {
				email: "Please enter a valid email address.",
				required: "Please enter a valid email address."
			},
			message: {
				required: "Please enter a message.",
				maxlength: "280 characters max."
			}
		},

		// AJAX submit the form data to back end if rules pass
		submitHandler: function(form) {
			$("#form").ajaxSubmit({
				type: "POST",
				url: $("#form").attr("action"),

				success: function(ajaxOutput) {
					//clear the output area's formatting
					$("#output-area").css("display", "clear");

					// write server's reply to the DOM
					$("#output-area1").html(ajaxOutput);

					// reset the form if it was successful
					if($(".alert-success").length >= 1) {
						$("#form")[0].reset();
					}
				}
			})
		}
	}); // end validate function
});	// end document.ready()