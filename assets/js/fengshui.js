var fs_choice_info = [{
	"cat":"Health",
	"description":"Enhance health."
},
{
	"cat":"Relationships",
	"description":"Improve personal relationships."
},
{
	"cat":"Tranquility",
	"description":"Create a calming environment."
},
{
	"cat":"Wealth",
	"description":"Attract fortune and luck."
}
]

var cat_text;

Fengshui = {

	create: function () {
		console.log("Fengshui state");
		var bg=game.add.sprite(0,0,"fengshui_background");
		bg.alpha=0.4;

		//add nav controls
		var back_btn=game.add.sprite(10,10,"utility_icons",2);
			back_btn.inputEnabled=true;
			back_btn.events.onInputDown.add(goToMenu,this);
			//var home_btn=game.add.sprite(700,10,"utility_icons",0);

		//add state cta	
		game.add.text(400,200,"Feng Shui Plants",{font:"40px Muli",fill:"#FFF6FF"});
		game.add.text(400,300,"Select a category",{font:"30px Muli",fill:"#FFF6FF"});
		
		//game.add.text(250,300,"&#xf21e ",{font:"30px fontAwesome",fill:"#C7B691"});
		
		/*game.add.text(200,200,"Wealth",{font:"30px Muli",fill:"#C7B691"});
		game.add.text(300,400,"Health",{font:"30px Muli",fill:"#C7B691"});
		game.add.text(400,400,"Relationships",{font:"30px Muli",fill:"#C7B691"});
		game.add.text(500,400,"Tranquility",{font:"30px Muli",fill:"#C7B691"});
		game.add.text(600,400,"Contentment",{font:"30px Muli",fill:"#C7B691"});
		*/
		var icons=game.add.group();
		for (var i=4;i<8;i++){
			icon=icons.create(400+120*(i-4),350,"fengshui_icons",i);
			icon.index=i-4;
			icon.cat_name=fs_choice_info[i-4].cat;
			icon.description=fs_choice_info[i-4].description;
			cat_text=game.add.text(400,500,icon.cat_name,{font:"32px Muli",fill:"#F3DDB7"});
			cat_desc=game.add.text(400,550,icon.description,{font:"24px Muli",fill:"#F3E2EE"});
			cat_text.alpha=0;
			cat_desc.alpha=0;
			icon.inputEnabled=true;
			icon.events.onInputOver.add(highlight_fs,this);
			icon.events.onInputOut.add(dehighlight_fs,this);
			icon.events.onInputDown.add(selectPlant_fs,this);
		}
		

		fader=game.add.sprite(0,0,game.cache.getBitmapData('fadescreen'));
	fader.alpha=1;
		game.add.tween(fader).to({alpha:0.2},1000,"Linear",true,0);
	}
}

function highlight_fs(thisicon) {
thisicon.loadTexture('fengshui_icons',thisicon.index);
cat_text.text=thisicon.cat_name;
game.add.tween(cat_text).to({alpha:1},500,"Linear",true,0);
cat_desc.text=thisicon.description;
game.add.tween(cat_desc).to({alpha:1},500,"Linear",true,0);
}

function dehighlight_fs(thisicon) {
thisicon.loadTexture('fengshui_icons',thisicon.index+4);
game.add.tween(cat_text).to({alpha:0},500,"Linear",true,0);

game.add.tween(cat_desc).to({alpha:0},500,"Linear",true,0);
}

function selectPlant_fs(thisicon) {
game.add.tween(fader).to({alpha:1},1000,"Linear",true,0).onComplete.addOnce(function () {

game.state.start('choosepot');
},this);


}