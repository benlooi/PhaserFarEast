

var bkgrd,pot,plant;
var bg_button_base,plant_button_base,pot_button_base;
	
var bgs;
var pot_buttons;



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
//create sidebar menu
			bg_back=game.add.sprite(600,0,game.cache.getBitmapData('sidebar_backing'));
			var bg_header=game.add.text(610,10,"Choose Pot",{font:"20px Arial"});
			plant_back=game.add.sprite(600,200,game.cache.getBitmapData('sidebar_backing'));
						var bg_header=game.add.text(610,210,"Choose Plant",{font:"20px Arial"});
			pot_back=game.add.sprite(600,400,game.cache.getBitmapData('sidebar_backing'));
						var bg_header=game.add.text(610,410,"Choose Background",{font:"20px Arial"});
//sidebar menu button sets	
	//pots
			pot_buttons= game.add.group();
			for (var pot_btns=0;pot_btns<bgs.pots.length;pot_btns++){
				var row_count=Math.floor(bgs.pots.length/3);
				for (y=1;y<row_count;y++){
					
					pot_btn_base=game.add.sprite(pot_btns*40+610,y*50+50,game.cache.getBitmapData('circ_button'));
					pot_btn_base.keyvalue=bgs.pots[pot_btns].key;
					pot_btn_base.inputEnabled=true;
					pot_btn_base.input.useHandCursor=true;
					pot_btn_base.events.onInputDown.add(changePot,this)

				}
					
				
				
			}
			pot_button_base=game.add.sprite(500,150,game.cache.getBitmapData('circ_button'));
			pot_button_base.inputEnabled=true;
			pot_button_base.input.useHandCursor=true;
			pot_button_base.events.onInputDown.add(changePot,this);
	//plants

	//backgrounds		
			bg_button_base=game.add.sprite(500,100,game.cache.getBitmapData('circ_button'));
			bg_button_base.inputEnabled=true;
			bg_button_base.input.useHandCursor=true;
			bg_button_base.events.onInputDown.add(changeBackground,this);

			

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
function changePot (thispot) {
	console.log(thispot.keyvalue);
	var potz=bgs.pots.map(function (the_pot){
		return the_pot.key;
	})
	var potindex=potz.indexOf(thispot.keyvalue);
	console.log(potindex);
	pot.loadTexture(bgs.pots[potindex].key);

}
function changePlant () {

	plant.loadTexture(bgs.plants[1].key);

}

