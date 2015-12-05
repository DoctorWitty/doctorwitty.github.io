function placeimage(){
        var t = $('<img src="images/Bensanta.jpg" alt="image" id="' +  Math.floor(Math.random()*55)  + '" onclick="doclick(this.id);">');
        $('#div').append(t);
        t.css('left', Math.floor(Math.random()*(400 - t.width())));
        t.css('top', Math.floor(Math.random()*(250 - t.height())));
        setTimeout(placeimage, 2000);
	}

    placeimage();