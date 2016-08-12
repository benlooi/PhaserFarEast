var choices;
var choice;
var theseOptions;
var fader;
var thisState;
var start_item;
var Menu = {

	create: function () {
		
	
		choices=game.add.group();
		getOptions().done(function(data){
			theseOptions=data;
		
		//festive,fengshui,home,office,
		for (var x=0;x<3;x++){

			var choice=choices.create(x*200+10,300,game.cache.getBitmapData('sidebar_backing'));
			choice.scale.setTo(0.8,1);
			choice.alpha=0;
			choice.inputEnabled=true;
			choice.state=theseOptions[x].stateName;
			choice.input.useHandCursor=true;
		choice.events.onInputOver.add(highlightChoice,this);
		choice.events.onInputOut.add(dehighlightChoice,this);
		choice.events.onInputDown.add(selectChoice,this);
		
		}
		game.add.text(20,400,"Fengshui",{font:"300 32px Muli",fill:"white"});
		game.add.text(220,400,"Home",{font:"32px Muli",fill:"white"});
		game.add.text(420,400,"Office",{font:"32px Muli",fill:"white"});
		start_item=0;
		game.add.tween(choices.children[start_item]).to({alpha:1},500,"Linear",true,250).onStart.addOnce(showChoice,this);
		

fader=game.add.sprite(0,0,game.cache.getBitmapData('fadescreen'));
fader.alpha=0;
		}) 
		}
		} 

function getOptions (data) {
	var d=$.Deferred();
		$.getJSON('assets/json/optionsNames.json').done(function(p){
			console.log(p);
			d.resolve(p);

		}).fail(d.reject);
		return d.promise();
}
function highlightChoice (choice) {
	game.add.tween(choice.scale).to({x:0.8,y:1.2},300,"Linear",true,null);
}

function dehighlightChoice (choice) {
	game.add.tween(choice.scale).to({x:0.8,y:0.8},300,"Linear",true,null);
}

function selectChoice (choice){
	thisState=choice.state;
	game.add.tween(fader).to({alpha:1},1000,"Linear",1000,null).onComplete.addOnce(goToState,this);
	console.log(choice.state);
	
}
function showChoice () {

	if (start_item<2){
	start_item++;
	game.add.tween(choices.children[start_item]).to({alpha:1},500,"Linear",true,250).onStart.addOnce(showChoice,this);
		
	}
	

}
function goToState(){
	console.log(thisState);
game.state.start(thisState);
}

function goToMenu(){
	console.log(thisState);
game.state.start("menu");
}