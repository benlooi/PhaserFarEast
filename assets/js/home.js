Home = {

	create: function () {
		console.log("home state");
		var back_btn=game.add.sprite(10,10,"utility_icons",2);
			back_btn.inputEnabled=true;
			back_btn.events.onInputDown.add(goToMenu,this);
			var home_btn=game.add.sprite(700,10,"utility_icons",0);
		game.add.text(200,200,"Plants for Home",{font:"40px Muli",fill:"#C7B691"});

	}
}