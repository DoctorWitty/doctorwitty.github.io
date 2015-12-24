$(document).ready(function() {
	$("#detonate").hide();
	var boom = $("#boom")[0];
	
	$("button").hover(function() {
		$(this).addClass("hover");
	}, function() {
		$(this).removeClass("hover");
	});
	
	$("button").click(function() {
		$(this).fadeOut();
	});
});

function locksOne() {
	$("#container").append($("<p>Disengaging safety locks...</p>").fadeIn('slow'));
	setTimeout(function() {
		$("#container").append($("<p>Safety locks removed...</p>").fadeIn('slow'));
	}, 2000);
	setTimeout(function() {
		$("#container").append($("#detonate").fadeIn('slow'))
	}, 4000);
};

function destroy() {
	$("#container").append($("<p>3</p>").fadeIn('slow'));
	setTimeout(function() {
		$("#container").append($("<p>2</p>").fadeIn('slow'));
	}, 2000);
	setTimeout(function() {
		$("#container").append($("<p>1</p>").fadeIn('slow'))
	}, 4000);
	setTimeout(function() {
		$("h1").hide();
		$("#container").hide();
		$("body").css('background-image', 'url(images/boom.gif)');
		boom.play();
	}, 6000);
};

