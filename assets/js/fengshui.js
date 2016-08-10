Fengshui = {

	create: function () {
		console.log("Fengshui state");
		game.add.sprite(0,0,"fengshui_background");
		game.add.text(200,200,"Feng Shui Plants",{font:"40px Muli",fill:"#C7B691"});

		game.add.text(200,200,"Wealth",{font:"30px Muli",fill:"#C7B691"});
		game.add.text(300,400,"Health",{font:"30px Muli",fill:"#C7B691"});
		game.add.text(400,400,"Relationships",{font:"30px Muli",fill:"#C7B691"});
		game.add.text(500,400,"Tranquility",{font:"30px Muli",fill:"#C7B691"});
		game.add.text(600,400,"Contentment",{font:"30px Muli",fill:"#C7B691"});
		fader=game.add.sprite(0,0,game.cache.getBitmapData('fadescreen'));
	fader.alpha=1;
		game.add.tween(fader).to({alpha:0.2},1000,"Linear",true,0);
	}
}