$(document).ready(function() {
	$("#button2").hide();
	$("#button3").hide();
	$("form").hide();
	
	$(".button").hover(function() {
		$(this).addClass("hoverButton");
	}, function(){
		$(this).removeClass("hoverButton");
	});
	
	var i = 0;
	var r1 = "<p class='response'>Who's there?</p>"
	var s1 = "<p>Cows go.</p>";
	var r2 = "<p class='response'>Cows go who?</p>"
	var s2 = "<p>No you numpty cows go moo!</p>";
	var r3 = "<p class='response'>Nice!</p>";
	var r3neg = "<p class='response'>Hmm...</p>";
	var s3 = "<p>Thanks dude!</p>";
	var s3neg = "<p>Can you do any better??</p>";
	var r4 = "<p class='response'>Of course! Knock Knock!</p>";
	var r4neg = "<p class='response'>No, I'm useless.</p>";
	var s4 = "<p>Who's there?</p>";
	var s4neg = "<p>I thought as much.</p>";
	var whoThere;
	var punchline;
	var punchlineResponse;
	$("input[name='whoThere']").val("");
	$("input[name='punchline']").val("");
	
	var sel = Math.random() * 5;
	if (sel < 1) {
		punchlineResponse = "<p>ROFLMAO!!!!!</p>"
	}
	else if (sel < 2) {
		punchlineResponse = "<p>Haha! Nice one.</p>"
	}
	else if (sel < 3) {
		punchlineResponse = "<p>Yeah not bad...</p>"
	}
	else if (sel < 4) {
		punchlineResponse = "<p>Hmm I think mine was better.</p>"
	}
	else {
		punchlineResponse = "<p>Pffft that's rubbish!</p>"
	}
	
	$("#button1").click(function() {
		if (i === 0) {
			$("#button1").hide();
			$("#textArea").append(r1);
			$("#textArea").append($(s1).fadeIn('slow'));
			$("#button1").fadeIn();
			$("span", "#button1").text("Cows go who?");
			i++
		}
		else if (i === 1) {
			$("#button1").hide();
			$("#textArea").append(r2);
			$("#textArea").append($(s2).fadeIn('slow'));
			$("#button1").fadeIn();
			$("#button2").fadeIn();
			$("span", "#button1").text("Nice!");
			i++
		}
		else if (i === 2) {
			$("#button1").hide();
			$("#button2").hide();
			$("#textArea").append(r3);
			$("#textArea").append($(s3).fadeIn('slow'));
		}
		else if (i === statements.length -1) {
			$("#textArea").append($(statements[i]).fadeIn('slow'));
			$("#button1").hide();
			i++
		}
	});
	
	$("#button2").click(function() {
		if (i === 2) {
			$("#button1").hide();
			$("#button2").hide();
			$("#textArea").append(r3neg);
			$("#textArea").append($(s3neg).fadeIn('slow'));
			$("#button2").fadeIn();
			$("#button3").fadeIn();
			$("span", "#button2").text("Of course! Knock Knock!");
			i++
		}
		else if (i === 3) {
			$("#button2").hide();
			$("#button3").hide();
			$("#textArea").append(r4);
			$("#textArea").append($(s4).fadeIn('slow'));
			$("#form1").fadeIn();
		}
	});
	
	$("#submitButton").click(function() {
		whoThere = $("input[name='whoThere']").val();
		var whoThereFormat = "<p class='response'>" + whoThere + "</p>";
		var whoThereResponse = "<p>" + whoThere + " who?</p>";
		$("#form1").hide();
		$("#textArea").append(whoThereFormat);
		$("#textArea").append(whoThereResponse);
		$("#form2").fadeIn();
	});
	
	$("#submitButton2").click(function() {
		punchline = $("input[name='punchline']").val();
		var punchlineFormat = "<p class='response'>" + punchline + "</p>";
		$("#form2").hide();
		$("#textArea").append(punchlineFormat);
		$("#textArea").append(punchlineResponse);
	});
	
	$("#button3").click(function() {
		$("#button2").hide();
		$("#button3").hide();
		$("#textArea").append(r4neg);
		$("#textArea").append($(s4neg).fadeIn('slow'));
	});
});