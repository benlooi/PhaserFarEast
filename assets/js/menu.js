var choices;
var Menu = {

	create: function () {
		choices=game.add.group();
		
		//festive,fengshui,home,office,
		for (var x=0;x<4;x++){

			var choice=choices.create(x*200+10,300,game.cache.getBitmapData('sidebar_backing'));
			choice.scale.setTo(0.8,1);
			choice.inputEnabled=true;
		choice.events.onInputOver.add(highlightChoice,this);
		choice.events.onInputOut.add(dehighlightChoice,this);
		}
		game.add.text(20,400,"Festive",{font:"300 32px Muli",fill:"white"});
		game.add.text(220,400,"Fengshui",{font:"32px Muli",fill:"white"});
		game.add.text(420,400,"Home",{font:"32px Muli",fill:"white"});
		game.add.text(620,400,"Office",{font:"32px Muli",fill:"white"});
	}
}

function highlightChoice (choice) {
	game.add.tween(choice.scale).to({x:0.8,y:1.2},300,"Linear",true,null);
}

function dehighlightChoice (choice) {
	game.add.tween(choice.scale).to({x:0.8,y:0.8},300,"Linear",true,null);
}