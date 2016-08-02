var bckgrds;
var Preload = {
	preload: function () {
		

//load all the images for backgrounds,pots and plants
			game.load.pack('backgrounds', 'assets/json/bgs.json', null, this);
			game.load.pack('plants', 'assets/json/bgs.json', null, this);
			game.load.pack('pots', 'assets/json/bgs.json', null, this);

//create selection button backing
	var circle_button=game.add.bitmapData(32,32);
	circle_button.ctx.beginPath();
	//canvas draw arc method (centreX,centreY,radius, startAngle,EndAngle)
	circle_button.ctx.arc(16,16,16,0,2*Math.PI);
	circle_button.ctx.fillStyle="#ffffff";
	circle_button.ctx.fill();

	game.cache.addBitmapData('circ_button',circle_button);


	},
	create: function () {
		game.state.start('choosepot');
	}

}

