WebFontConfig = {

    //  'active' means all requested fonts have finished loading
    //  We set a 1 second delay before calling 'createText'.
    //  For some reason if we don't the browser cannot render the text the first time it's created.
   active: function() { game.time.events.add(Phaser.Timer.SECOND, createText, this); },

    //  The Google Fonts we want to load (specify as many as you like in the array)
    google: {
      families: ['Muli','Tangerine']
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
//bottom selection panel
var bottom_panel=game.add.bitmapData(1200,300);
bottom_panel.ctx.beginPath();
bottom_panel.ctx.moveTo(0,0);
bottom_panel.ctx.bezierCurveTo(200,50,1000,50,1200,0);
bottom_panel.ctx.lineTo(1200,300);
bottom_panel.ctx.lineTo(0,300);
bottom_panel.ctx.lineTo(0,0);

bottom_panel.ctx.fillStyle="#BB9D67";
bottom_panel.ctx.fill();

game.cache.addBitmapData('bottom_panel',bottom_panel);
//backing for selection menu
var rect_long_backing=game.add.bitmapData(350,600);
rect_long_backing.ctx.beginPath();
rect_long_backing.ctx.globalAlpha=0.7;
rect_long_backing.ctx.rect(0,0,350,600);
rect_long_backing.ctx.fillStyle="#141417";
rect_long_backing.ctx.fill();

game.cache.addBitmapData('rect_long_backing',rect_long_backing);

var rect_backing=game.add.bitmapData(350,200);
rect_backing.ctx.beginPath();
rect_backing.ctx.globalAlpha=1;
rect_backing.ctx.rect(0,0,350,200);
rect_backing.ctx.fillStyle="#eeeeee";
rect_backing.ctx.fill();

game.cache.addBitmapData('rect_backing',rect_backing);
//fadescreen mask
var fadescreen=game.add.bitmapData(1200,800);
fadescreen.ctx.beginPath();

fadescreen.ctx.rect(0,0,1200,800);
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

	game.load.image("fengshui_background",'assets/images/backgrounds/fengshui.jpg');
	game.load.image("office_plant",'assets/images/plants/office_plant.jpg');
	game.load.image("home_plant",'assets/images/plants/home_plant.jpg');
	game.load.spritesheet('fengshui_icons','assets/images/fengshui_icons.png',100,100,8)
	game.load.spritesheet('utility_icons','assets/images/utility_icons_1.png',100,100,8)
	game.load.spritesheet('cart_icon','assets/images/cart_icon.png',100,100,2)

	},
	create: function () {
		
			game.scale.pageAlignHorizontally = true;  
		game.scale.pageAlignVertically = true;  
		resize();
		game.state.start('splash');
	}

}

