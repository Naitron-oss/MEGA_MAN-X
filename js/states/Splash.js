// on initialise le jeu ceci peut rester vide
MyGame.Splash = function(){
	console.log("Starting My Game");
}
  
MyGame.Splash.prototype = {
	// logo du splash screen
	preload: function(){
		console.log("Preload Splash")
        // this.game.load.image("loading","assets/images/loading.png"); 
	},
  	create: function(){
  		console.log("Create Splash")
  		// taille du jeu
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.scale.pageAlignHorizontally = true;
		//this.game.scale.pageAlignVertically = true;
		// le splash screen a été créé on peu lancer le preload
		this.game.state.start("Preload");
	}
}
