var choices;
var theseOptions
var Menu = {

	create: function () {
		choices=game.add.group();
		getOptions().done(function(data){
			theseOptions=data;
		
		//festive,fengshui,home,office,
		for (var x=0;x<3;x++){

			var choice=choices.create(x*200+10,300,game.cache.getBitmapData('sidebar_backing'));
			choice.scale.setTo(0.8,1);
			choice.inputEnabled=true;
			choice.state=theseOptions[x].stateName;
		choice.events.onInputOver.add(highlightChoice,this);
		choice.events.onInputOut.add(dehighlightChoice,this);
		choice.events.onInputDown.add(selectChoice,this);
		}
		game.add.text(20,400,"Fengshui",{font:"300 32px Muli",fill:"white"});
		game.add.text(220,400,"Home",{font:"32px Muli",fill:"white"});
		game.add.text(420,400,"Office",{font:"32px Muli",fill:"white"});
		

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
	console.log(choice.state);
	//game.state.start(choice.state);
}