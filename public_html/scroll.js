$(document).ready(function() {
	$(window).scroll(function(){
		$("#top").css("opacity", 1 - $(window).scrollTop() / 500);
	});
	$(window).scroll(function() {
		$("#AbMeFade").css("opacity",-1 + $(window).scrollTop() / 400);
	});
	$(window).scroll(function() {
		$("#AbMeFade1").css("opacity",-1 + $(window).scrollTop() / 400);
	});
	$(window).scroll(function() {
		$("#iconFade").css("opacity",-1.5 + $(window).scrollTop() / 400);
	});
	$(window).scroll(function() {
		$("#portfolio").css("opacity",-2.50 + $(window).scrollTop() / 450);
	});
	$(window).scroll(function() {
		$("#contact").css("opacity",-3.80 + $(window).scrollTop() / 450);
	});
});
