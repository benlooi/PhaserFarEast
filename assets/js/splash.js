var text;
var Splash = {

	create: function () {

		text=game.add.text(game.world.width/2,game.world.height/2,"FloraVision",{font: "42px Muli",fill:"white"});
		text.anchor.setTo(0.5);
		text.alpha=0;
		game.add.tween(text).to({alpha:1},1500,"Linear",true,0).onComplete.addOnce(fadeout,this);

	}
}

function fadeout() {
	game.add.tween(text).to({alpha:0},1500,"Linear",true,0).onComplete.addOnce(goMenu,this);

}

function goMenu () {

	game.state.start('choosepot');
}