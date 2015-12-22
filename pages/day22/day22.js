$(document).ready(function() {
	var boing = $("#boing")[0];
	
	$(".button").hover(function() {
		$(this).addClass("hoverButton");
	}, function(){
		$(this).removeClass("hoverButton");
	});
	
	$("#monkey").click(function() {
		boing.play();
	});
});