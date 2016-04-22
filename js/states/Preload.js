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
		this.game.load.spritesheet("bossRun","assets/tiles/bossRun.png", 32, 32, 5);
		this.game.load.spritesheet("bossJump","assets/tiles/bossJump.png", 32, 40, 3);
		this.game.load.spritesheet("boss","assets/tiles/boss.png", 32, 32, 2);
		this.game.load.spritesheet("bossShoot","assets/tiles/bossShoot.png", 32, 32, 2);
		this.game.load.spritesheet("bossBullets","assets/tiles/bossBullets.png", 16, 32, 3);
		this.game.load.spritesheet("nom","url_60x80.png", 60, 80, 10);
		// image (key, url)
		this.game.load.image("nom","url");
		this.game.load.image("play","url");
	},
  	create: function(){
  		console.log("Preload finished")
  		// go to title
		this.game.state.start("Title");
	}
}