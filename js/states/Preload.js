Megaman.Preload = function(){}

Megaman.Preload.prototype = {
	preload: function(){ 

		console.log("Preload preload")

		// on crée un sprite pour la barre de chargement
        var loadingBar = this.add.sprite(160,240, "loading");
	        loadingBar.anchor.setTo(0.5,0.5);
	    // on défini la barre de chargement et phaser va gérer la bare tout seul
	        this.load.setPreloadSprite(loadingBar);

	    /* 
	    	chargement des assets
	    */

	    //spritesheet (key, url, frameWidth, frameHeight, frameMax, margin, spacing
		// this.game.load.spritesheet("nom","url_60x80.png", 60, 80, 10);
		// // image (key, url)
		// this.game.load.image("nom","url");

		//button
		this.game.load.image("play","assets/ui/play.png");
		this.game.load.image("credit","assets/ui/credit.png");
		this.game.load.image("controls","assets/ui/controls.png");
		this.game.load.image("gameOver","assets/ui/gameOver.png");

		//background
		this.game.load.image("mainScreen","assets/ui/title.jpg");
		this.game.load.image("logo","assets/ui/logo.png");


	},
  	create: function(){
  		console.log("Preload finished")
  		// go to title
		this.game.state.start("Title");
	}
}