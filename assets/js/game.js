var game=new Phaser.Game(1200,800,Phaser.AUTO,'');
var resize = function(e) {  
	var aspectRatio = 1.5;  
	if ((window.innerWidth / window.innerHeight) > aspectRatio) { 
		game.scale.width = window.innerHeight * aspectRatio;
		game.scale.height = window.innerHeight;  
	} 

	else if ((window.innerWidth / window.innerHeight) < aspectRatio) { 
		game.scale.width = window.innerWidth;
		game.scale.height = window.innerWidth / aspectRatio;  
	} else {   
		game.scale.width = window.innerWidth;
		game.scale.height = window.innerHeight;
	}  
	game.scale.refresh();
	}

	window.onresize = resize;
	
game.state.add('preload',Preload);
game.state.add('splash',Splash);
game.state.add('menu',Menu);
game.state.add('fengshui',Fengshui);
game.state.add('home',Home);
game.state.add('office',Office);


game.state.add('choosepot',ChoosePot);
game.state.start('preload');