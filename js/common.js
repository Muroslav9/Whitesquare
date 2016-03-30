$(document).ready(function() {
	$(".menu_button").click(function(){
		$(".main_menu ul").stop(false, true).slideToggle();	
	});
});