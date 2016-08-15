

var bkgrd,pot,plant;
var bg_button_base,plant_button_base,pot_button_base;
var pot_selection_panel,plant_selection_panel,bg_selection_panel;
var bgs;
var pot_btn;
var plant_key,pot_show;
var pot_is_showing;

var ChoosePot = {
	
	create: function () {
		//game.add.tween(fader).to({alpha:0.1},1000,"Linear",true,0).onComplete.AddOnce(function () {

		var defer=$.Deferred();

		$.getJSON("assets/json/bgs.json",function(data){
			bgs=data;

			bkgrd=game.add.sprite(0,0,bgs.backgrounds[0].key);
			info_panel=game.add.sprite(450,0,game.cache.getBitmapData("rect_long_backing"));
			pot=game.add.sprite(200,300,bgs.pots[0].key);
			pot_show=game.add.sprite(450,220,bgs.pots[0].key);
			pot.anchor.setTo(0.5,0);
			pot.scale.setTo(0.8);

			plant=game.add.sprite(200,200,bgs.plants[0].key);
			plant.anchor.setTo(0.5,0.1);
			plant.scale.setTo(0.7);
			plant_key=game.add.text(450,20,bgs.plants[0].key,{font:"30px Muli",fill:"#E8E1EA"})
			plant_description=game.add.text(450,50,bgs.plants[0].description,{font:"12px Muli",fill:"#E8E1EA",wordWrap:"true",wordWrapWidth:250})
			plant_description.lineSpacing=-10;
			
			pot_is_showing=false;
			pot_selection_panel=game.add.group();
			pot_selection_panel.x=750;
			pot_selection_panel.y=200;
			var pot_panel=game.add.sprite(0,0,game.cache.getBitmapData('rect_backing'));
			pot_selection_panel.add(pot_panel);
			pot_panel.inputEnabled=true;
			pot_panel.events.onInputDown.add(togglePots,this);
			//pot_panel.events.onInputDown.add(slideInPots,this);
			//pot_panel.events.onInputOut.add(slideInPots,this);
			

			plant_selection_panel=game.add.sprite(750,0,game.cache.getBitmapData('rect_backing'));
			plant_selection_panel.inputEnabled=true;
			plant_selection_panel.events.onInputOver.add(slideOutPlants,this);
			plant_selection_panel.events.onInputOut.add(slideInPlants,this);
			
			bg_selection_panel=game.add.sprite(750,400,game.cache.getBitmapData('rect_backing'));
			bg_selection_panel.inputEnabled=true;
			bg_selection_panel.events.onInputOver.add(slideOutBGs,this);
			bg_selection_panel.events.onInputOut.add(slideInBGs,this);


			var select_pot_text=game.add.text(780,310,"Select Pot",{font:"20px Arial",fill:"teal"});
			select_pot_text.anchor.setTo(0.5);
			select_pot_text.angle=-90;
			var select_plant_text=game.add.text(780,110,"Select Plant",{font:"20px Arial",fill:"teal"});
			select_plant_text.anchor.setTo(0.5);
			select_plant_text.angle=-90;
			var select_background_text=game.add.text(780,510,"Select Background",{font:"20px Arial",fill:"teal"});
			select_background_text.anchor.setTo(0.5);
			select_background_text.angle=-90;
			var back_btn=game.add.sprite(10,10,"utility_icons",2);
			back_btn.inputEnabled=true;
			back_btn.events.onInputDown.add(goToState,this);
			//var home_btn=game.add.sprite(700,10,"utility_icons",0);
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
					//pot_btn=game.add.sprite(x*40+610,y*40+60,game.cache.getBitmapData('circ_button'));
					//pot_btn.anchor.setTo(0.5);
					//game.add.tween(pot_btn.scale).to({x:1.1,y:1.1},500,"Linear",true,200);
					pot_icon=game.add.sprite(x*60+100,y*60+50,bgs.pots[start_count].key);
					pot_selection_panel.add(pot_icon);
					pot_icon.keyvalue=bgs.pots[start_count].key;
					pot_icon.inputEnabled=true;
					pot_icon.scale.setTo(0.15);
					pot_icon.anchor.setTo(0.5);
					//pot_icon.events.onInputOver.add(highlight,this);
					//pot_icon.events.onInputOut.add(dehighlight,this);
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
					//plant_btn=game.add.sprite(x*40+610,y*40+260,game.cache.getBitmapData('circ_button'));
					//plant_btn.anchor.setTo(0.5);
					//game.add.tween(plant_btn.scale).to({x:1.1,y:1.1},500,"Linear",true,200);
					plant_icon=game.add.sprite(x*60+880,y*60+60,bgs.plants[start_count].key);
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
					//bg_btn=game.add.sprite(x*100+610,y*40+460,game.cache.getBitmapData('circ_button'));
					//bg_btn.anchor.setTo(0.5);
					//game.add.tween(bg_btn.scale).to({x:1.1,y:1.1},500,"Linear",true,200);
					bg_icon=game.add.sprite(x*100+820,y*40+460,bgs.backgrounds[start_count].key);
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

function togglePots () {
	if (pot_is_showing==true) {
		slideOutPots();
	}else if (pot_is_showing==false){
		slideInPots();
	}
	pot_is_showing=!pot_is_showing;
}
function slideOutPots () {
	
	game.add.tween(pot_selection_panel).to({x:450},500,"Linear",true);
		
}
function slideOutPlants () {
	game.add.tween(plant_selection_panel).to({x:450},500,"Linear",true);
}
function slideOutBGs () {
	game.add.tween(bg_selection_panel).to({x:450},500,"Linear",true);
}

function slideInPots () {
	


	game.add.tween(pot_selection_panel).to({x:750},500,"Linear",true);
	
}
function slideInPlants () {
	game.add.tween(plant_selection_panel).to({x:750},500,"Linear",true);
}
function slideInBGs () {
	game.add.tween(bg_selection_panel).to({x:750},500,"Linear",true);
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
	pot_show.loadTexture(bgs.pots[potindex].key);
	slideInPots();
	console.log(thispot.keyvalue);

}
function changePlant (thisplant) {
var plantz=bgs.plants.map(function(plantkey){
		return plantkey.key;
	});
	plantindex=plantz.indexOf(thisplant.keyvalue);
	plant.anchor.setTo(0.5,bgs.plants[plantindex].anchor)
	plant.loadTexture(bgs.plants[plantindex].key);
	plant_key.text=bgs.plants[plantindex].key;
	plant_description.text=bgs.plants[plantindex].description;

}

function highlight (thisItem) {
	
	game.add.tween(thisItem.scale).to({x:0.2,y:0.2},500,"Linear",true,0);
}
function dehighlight (thisItem) {
	game.add.tween(thisItem.scale).to({x:0.1,y:0.1},500,"Linear",true,0);
}

