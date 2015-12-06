$(document).ready(function() {
	var e = $("#e")[0];
	var bFlat = $("#bFlat")[0];
	var gInverse = $("#gInverse")[0];
	var z = $("#z")[0];
	var symbol = $("#symbol")[0];
	
	$(".button").hover(function() {
		$(this).addClass("hoverButton");
	}, function(){
		$(this).removeClass("hoverButton");
	});
	
	$("#eDiv").click(function() {
		e.play();
	});
	$("#bFlatDiv").click(function() {
		bSharp.play();
	});
	$("#gInverseDiv").click(function() {
		gInverse.play();
	});
	$("#zDiv").click(function() {
		z.play();
	});
	$("#symbolDiv").click(function() {
		symbol.play();
	});
});