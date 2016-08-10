WebFontConfig = {

    //  'active' means all requested fonts have finished loading
    //  We set a 1 second delay before calling 'createText'.
    //  For some reason if we don't the browser cannot render the text the first time it's created.
   active: function() { game.time.events.add(Phaser.Timer.SECOND, createText, this); },

    //  The Google Fonts we want to load (specify as many as you like in the array)
    google: {
      families: ['Muli']
    }

};
var bckgrds;
var Preload = {
	preload: function () {
		
game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');
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
//backing for selection menu
var rect_backing=game.add.bitmapData(250,200);
rect_backing.ctx.beginPath();
rect_backing.ctx.globalAlpha=0.8;
rect_backing.ctx.rect(0,0,250,200);
rect_backing.ctx.fillStyle="#eeeeee";
rect_backing.ctx.fill();

game.cache.addBitmapData('rect_backing',rect_backing);
//fadescreen mask
var fadescreen=game.add.bitmapData(800,600);
fadescreen.ctx.beginPath();

fadescreen.ctx.rect(0,0,800,600);
fadescreen.ctx.fillStyle="#000000";
fadescreen.ctx.fill();
game.cache.addBitmapData('fadescreen',fadescreen);
//create sidebar subsection backing
	var sidebar_backing=game.add.bitmapData(200,200);
	sidebar_backing.ctx.beginPath();
	sidebar_backing.ctx.globalAlpha = 0.4;
	//canvas draw arc method (centreX,centreY,radius, startAngle,EndAngle)
	sidebar_backing.ctx.rect(0,0,200,200);
	sidebar_backing.ctx.fillStyle="#ffffff";
	sidebar_backing.ctx.fill();

	game.cache.addBitmapData('sidebar_backing',sidebar_backing);

	game.load.image("fengshui_background",'assets/images/backgrounds/fengshui_background.jpg');
	},
	create: function () {
		game.state.start('splash');
	}

}

