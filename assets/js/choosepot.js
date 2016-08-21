

var bkgrd,pot,plant;
var bg_button_base,plant_button_base,pot_button_base;
var pot_selection_panel,plant_selection_panel,bg_selection_panel;
var bgs;
var pot_btn;
var addToCart;
var plant_key,pot_show;
var pot_is_showing,plant_is_showing,bg_is_showing;

var ChoosePot = {
	
	create: function () {
		//game.add.tween(fader).to({alpha:0.1},1000,"Linear",true,0).onComplete.AddOnce(function () {

		var defer=$.Deferred();

		$.getJSON("assets/json/bgs.json",function(data){
			bgs=data;

			bkgrd=game.add.sprite(0,0,bgs.backgrounds[0].key);
			game.add.text(710,445,"Like this?",{font:"10px Arial",fill:"white"});

			game.add.text(710,510,"add to cart",{font:"10px Arial",fill:"white"});

			addToCart=game.add.sprite(700,450,"cart_icon",2);
			addToCart.scale.setTo(0.6);
			addToCart.inputEnabled=true;
			addToCart.input.useHandCursor=true;
			addToCart.events.onInputDown.add(addItem,this);

			info_panel_left=game.add.sprite(0,0,game.cache.getBitmapData("rect_long_backing"));
			info_panel_right=game.add.sprite(850,0,game.cache.getBitmapData("rect_long_backing"));
			
			pot=game.add.sprite(game.world.centerX,game.world.centerY-100,bgs.pots[1].key);
			
			pot.anchor.setTo(0.5,0);
			pot.scale.setTo(0.8);

			pot_show=game.add.sprite(900,100,bgs.pots[0].key);

			pot_description=game.add.text(900,game.world.centerY+5,bgs.pots[0].description,{font:"20px Muli",fill:"#ffffff"});
			pot_dimensions=game.add.text(900,game.world.centerY+30,bgs.pots[0].dimensions,{font:"15px Muli",fill:"#ffffff"});
			pot_material=game.add.text(900,game.world.centerY+55,bgs.pots[0].material,{font:"15px Muli",fill:"#ffffff"})

			var bottom_panel=game.add.sprite(0,500,game.cache.getBitmapData('bottom_panel'));

			plant=game.add.sprite(game.world.centerX,game.world.centerY-250,bgs.plants[0].key);
			plant.anchor.setTo(0.5,0.1);
			plant.scale.setTo(bgs.plants[0].scale);
			plant_key=game.add.text(80,120,bgs.plants[0].key,{font:"30px Muli",fill:"#FFFFFF"})
			plant_description=game.add.text(50,180,bgs.plants[0].description,{font:"14px Muli",fill:"#FFFFFF",wordWrap:"true",wordWrapWidth:250})
			plant_description.lineSpacing=-5;
			
			
			pot_selection_panel=game.add.group();
			pot_selection_panel.x=950;
			pot_selection_panel.y=500;
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
					pot_icon=game.add.sprite(x*60,y*60+150,bgs.pots[start_count].key);
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

			
			plant_selection_panel=game.add.group();
			plant_selection_panel.x=50;
			plant_selection_panel.y=600;
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
					plant_icon=game.add.sprite(x*80,y*60+60,bgs.plants[start_count].key);
					plant_selection_panel.add(plant_icon);
					plant_icon.keyvalue=bgs.plants[start_count].key;
					plant_icon.inputEnabled=true;
					plant_icon.scale.setTo(0.15);
					plant_icon.anchor.setTo(0.5);
					//plant_icon.events.onInputOver.add(highlight,this);
					//plant_icon.events.onInputOut.add(dehighlight,this);
					plant_icon.events.onInputDown.add(changePlant,this);
					
					start_count++;
				}

				}
			}

				
			
			
			bg_selection_panel=game.add.group();
			bg_selection_panel.x=400;
			bg_selection_panel.y=600;

			start_count=0;
			end_count=start_count+6;
			var row_count=Math.round(bgs.backgrounds.length/2+0.5);

			for (var y=0;y<row_count;y++){
					for (var x=0;x<3;x++){
						if (bgs.backgrounds[start_count]==undefined){
							break;
						} else {
					//bg_btn=game.add.sprite(x*100+610,y*40+460,game.cache.getBitmapData('circ_button'));
					//bg_btn.anchor.setTo(0.5);
					//game.add.tween(bg_btn.scale).to({x:1.1,y:1.1},500,"Linear",true,200);
					bg_icon=game.add.sprite(x*100+100,y*40+60,bgs.backgrounds[start_count].key);
					bg_selection_panel.add(bg_icon)
					bg_icon.keyvalue=bgs.backgrounds[start_count].key;
					bg_icon.inputEnabled=true;
					bg_icon.scale.setTo(0.04);
					bg_icon.anchor.setTo(0.5);
					//bg_icon.events.onInputOver.add(highlight,this);
					//bg_icon.events.onInputOut.add(dehighlight,this);
					bg_icon.events.onInputDown.add(changeBackground,this);
					
					start_count++;
				}

				}
			
			}
			

			var select_pot_text=game.add.text(150,600,"Choose Plant",{font:"20px Muli",fill:"#26262C"});
			select_pot_text.anchor.setTo(0.5);
			
			var select_plant_text=game.add.text(550,600,"Choose Background",{font:"20px Muli",fill:"#26262C"});
			select_plant_text.anchor.setTo(0.5);
			
			var select_background_text=game.add.text(950,600,"Choose Pot",{font:"20px Muli",fill:"#26262C"});
			select_background_text.anchor.setTo(0.5);
			
			var back_btn=game.add.sprite(10,10,"utility_icons",2);
			back_btn.inputEnabled=true;
			back_btn.events.onInputDown.add(goToState,this);
			
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

function togglePlants () {
	if (plant_is_showing==true) {
		slideOutPlants();
	}else if (plant_is_showing==false){
		slideInPlants();
	}
	plant_is_showing=!plant_is_showing;
}
function toggleBGs () {
	if (bg_is_showing==true) {
		slideOutBGs();
	}else if (bg_is_showing==false){
		slideInBGs();
	}
	bg_is_showing=!bg_is_showing;
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
	pot_description.text=bgs.pots[potindex].description;
	pot_dimensions.text=bgs.pots[potindex].dimensions;
	pot_material.text=bgs.pots[potindex].material;
	//slideInPots();
	console.log(thispot.keyvalue);

}
function changePlant (thisplant) {
var plantz=bgs.plants.map(function(plantkey){
		return plantkey.key;
	});
	plantindex=plantz.indexOf(thisplant.keyvalue);
	plant.anchor.setTo(0.5,bgs.plants[plantindex].anchor);
	plant.scale.setTo(bgs.plants[plantindex].scale);
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

function addItem (){
	//add items to shopping cart
	//showCart();
} 

