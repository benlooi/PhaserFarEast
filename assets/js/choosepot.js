

var bkgrd,pot,plant;
var bg_button_base,plant_button_base,pot_button_base;
	
var bgs;


var ChoosePot = {
	
	create: function () {
		var defer=$.Deferred();

		$.getJSON("assets/json/bgs.json",function(data){
			bgs=data;

			bkgrd=game.add.sprite(0,0,bgs.backgrounds[0].key);
			pot=game.add.sprite(300,300,bgs.pots[0].key);
			pot.anchor.setTo(0.5,0);
			pot.scale.setTo(0.8);
			plant=game.add.sprite(300,200,bgs.plants[0].key);
			plant.anchor.setTo(0.5,0.1);
			plant.scale.setTo(0.5);

			bg_button_base=game.add.sprite(500,100,game.cache.getBitmapData('circ_button'));
			bg_button_base.inputEnabled=true;
			bg_button_base.input.useHandCursor=true;
			bg_button_base.events.onInputDown.add(changeBackground,this);

			pot_button_base=game.add.sprite(500,150,game.cache.getBitmapData('circ_button'));
			pot_button_base.inputEnabled=true;
			pot_button_base.input.useHandCursor=true;
			pot_button_base.events.onInputDown.add(changePot,this);

			plant_button_base=game.add.sprite(500,200,game.cache.getBitmapData('circ_button'));
			plant_button_base.inputEnabled=true;
			plant_button_base.input.useHandCursor=true;
			plant_button_base.events.onInputDown.add(changePlant,this);
		})
		
		//draw button 
	
		
		//game.inputEnabled=true;
		//game.input.onDown.add(changePot,this);


	}
}

function changeBackground () {

	bkgrd.loadTexture(bgs.backgrounds[2].key);

}
function changePot () {

	pot.loadTexture(bgs.pots[2].key);

}
function changePlant () {

	plant.loadTexture(bgs.plants[1].key);

}

