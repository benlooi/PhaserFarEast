var game=new Phaser.Game(800,600,Phaser.AUTO,'');

game.state.add('preload',Preload);
game.state.add('splash',Splash);
game.state.add('choosepot',ChoosePot);
game.state.start('preload');