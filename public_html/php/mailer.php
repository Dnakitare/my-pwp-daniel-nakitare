<?php
/**
 * mailer.php
 *
 * This file handles secure mail transport using the Swiftmailer library with Google reCAPTCHA integration
 */

ini_set('display_errors', 1);
// require all composer dependencies
require_once (dirname(__DIR__, 1) . "/vendor/autoloader.php");
require_once ("mail-config.php");
// verify user's reCAPTCHA input
$recaptcha = new \ReCaptcha\ReCaptcha($secret);
$resp = $recaptcha->verify($_POST["g-recaptcha-response"], $_SERVER["REMOTE_ADDR"]);
try {
	// if there's a reCAPTCHA error, throw and exception
	if (!$resp->isSuccess()) {
		throw(new Exception("reCAPTCHA error!"));
	}
	/**
	 * Sanitize the inputs from the form: name, email, subject, and message.
	 *
	 */
}