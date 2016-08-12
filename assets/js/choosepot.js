

var bkgrd,pot,plant;
var bg_button_base,plant_button_base,pot_button_base;
	
var bgs;
var pot_btn;


var ChoosePot = {
	
	create: function () {
		//game.add.tween(fader).to({alpha:0.1},1000,"Linear",true,0).onComplete.AddOnce(function () {

		var defer=$.Deferred();

		$.getJSON("assets/json/bgs.json",function(data){
			bgs=data;

			bkgrd=game.add.sprite(0,0,bgs.backgrounds[0].key);
			pot=game.add.sprite(300,300,bgs.pots[0].key);
			pot.anchor.setTo(0.5,0);
			pot.scale.setTo(0.8);
			plant=game.add.sprite(300,200,bgs.plants[0].key);
			plant.anchor.setTo(0.5,0.1);
			plant.scale.setTo(0.7);
			plant_description=game.add.text(20,200,bgs.plants[0].description,{font:"12px Muli",fill:"#E8E1EA"})
		
			var pot_selection_panel=game.add.sprite(550,0,game.cache.getBitmapData('rect_backing'));
			var plant_selection_panel=game.add.sprite(550,200,game.cache.getBitmapData('rect_backing'));
			var bg_selection_panel=game.add.sprite(550,400,game.cache.getBitmapData('rect_backing'));

			game.add.text(560,10,"Select Pot",{font:"20px Arial",fill:"teal"});
			game.add.text(560,210,"Select Plant",{font:"20px Arial",fill:"teal"});
			game.add.text(560,410,"Select Background",{font:"20px Arial",fill:"teal"});

			var back_btn=game.add.sprite(10,10,"utility_icons",2);
			var home_btn=game.add.sprite(700,10,"utility_icons",0);
			//draw buttons for choices
			//pots
			start_count=0;
			end_count=start_count+6;
			var row_count=Math.round(bgs.pots.length/3+0.5);
			
		
				for (var y=0;y<row_count;y++){
					for (var x=0;x<4;x++){
						if (bgs.pots[start_count]==undefined){
							break;
						} else {
					pot_btn=game.add.sprite(x*40+610,y*40+60,game.cache.getBitmapData('circ_button'));
					pot_btn.anchor.setTo(0.5);
					game.add.tween(pot_btn.scale).to({x:1.1,y:1.1},500,"Linear",true,200);
					pot_icon=game.add.sprite(x*40+610,y*40+60,bgs.pots[start_count].key);
					pot_icon.keyvalue=bgs.pots[start_count].key;
					pot_icon.inputEnabled=true;
					pot_icon.scale.setTo(0.15);
					pot_icon.anchor.setTo(0.5);
					pot_icon.events.onInputOver.add(highlight,this);
					pot_icon.events.onInputOut.add(dehighlight,this);
					pot_icon.events.onInputDown.add(changePot,this);
					
					start_count++;
				}

				}
			
			}
			//plants
			start_count=0;
			end_count=start_count+6;
			var row_count=Math.round(bgs.plants.length/3+0.5);
			
		
				for (var y=0;y<row_count;y++){
					for (var x=0;x<4;x++){
						if (bgs.plants[start_count]==undefined){
							break;
						} else {
					plant_btn=game.add.sprite(x*40+610,y*40+260,game.cache.getBitmapData('circ_button'));
					plant_btn.anchor.setTo(0.5);
					game.add.tween(plant_btn.scale).to({x:1.1,y:1.1},500,"Linear",true,200);
					plant_icon=game.add.sprite(x*40+610,y*40+260,bgs.plants[start_count].key);
					plant_icon.keyvalue=bgs.plants[start_count].key;
					plant_icon.inputEnabled=true;
					plant_icon.scale.setTo(0.15);
					plant_icon.anchor.setTo(0.5);
					plant_icon.events.onInputOver.add(highlight,this);
					plant_icon.events.onInputOut.add(dehighlight,this);
					plant_icon.events.onInputDown.add(changePlant,this);
					
					start_count++;
				}

				}
			
			}
			//bg
			start_count=0;
			end_count=start_count+6;
			var row_count=Math.round(bgs.backgrounds.length/2+0.5);
			
		
				for (var y=0;y<row_count;y++){
					for (var x=0;x<2;x++){
						if (bgs.backgrounds[start_count]==undefined){
							break;
						} else {
					bg_btn=game.add.sprite(x*100+610,y*40+460,game.cache.getBitmapData('circ_button'));
					bg_btn.anchor.setTo(0.5);
					game.add.tween(bg_btn.scale).to({x:1.1,y:1.1},500,"Linear",true,200);
					bg_icon=game.add.sprite(x*100+610,y*40+460,bgs.backgrounds[start_count].key);
					bg_icon.keyvalue=bgs.backgrounds[start_count].key;
					bg_icon.inputEnabled=true;
					bg_icon.scale.setTo(0.05);
					bg_icon.anchor.setTo(0.5);
					bg_icon.events.onInputOver.add(highlight,this);
					bg_icon.events.onInputOut.add(dehighlight,this);
					bg_icon.events.onInputDown.add(changeBackground,this);
					
					start_count++;
				}

				}
			
			}
		})
		
		//draw button 
	
		
		//game.inputEnabled=true;
		//game.input.onDown.add(changePot,this);


	}
}

function changeBackground (thisbg) {
var bgz=bgs.backgrounds.map(function(bgkey){
		return bgkey.key;
	});
	bgindex=bgz.indexOf(thisbg.keyvalue);
	bkgrd.loadTexture(bgs.backgrounds[bgindex].key);

}
function changePot (thispot) {
	var potz=bgs.pots.map(function(potkey){
		return potkey.key;
	});
	potindex=potz.indexOf(thispot.keyvalue);
	pot.loadTexture(bgs.pots[potindex].key);

	console.log(thispot.keyvalue);

}
function changePlant (thisplant) {
var plantz=bgs.plants.map(function(plantkey){
		return plantkey.key;
	});
	plantindex=plantz.indexOf(thisplant.keyvalue);
	plant.anchor.setTo(0.5,bgs.plants[plantindex].anchor)
	plant.loadTexture(bgs.plants[plantindex].key);
	plant_description.text=bgs.plants[plantindex].description;

}

function highlight (thisItem) {
	
	game.add.tween(thisItem.scale).to({x:0.2,y:0.2},500,"Linear",true,0);
}
function dehighlight (thisItem) {
	game.add.tween(thisItem.scale).to({x:0.1,y:0.1},500,"Linear",true,0);
}

