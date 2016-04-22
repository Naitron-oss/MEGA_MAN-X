Megaman.Game = function(){}

Megaman.Game.prototype = {
	create: function(){ 
		console.log("Game Screen")
		//crée un joueur
		this.game.player = new Megaman.Player(this.game, "Batman");
		this.game.boss = new Megaman.Boss(this.game, "Boss");
		//this.game.add.existing(this.game.player);
		this.game.physics.arcade.gravity.y = 250;
		// bouton a retirer juste pour passer a l'ecran suivant
		var gameOverButton = this.game.add.button(600, 320, "play", this.stopTheGame, this);
		gameOverButton.anchor.setTo(0.5,0.5);
		
		
	},
	stopTheGame : function(){
		// tue le joueur
		this.game.player.explode();
		// va a l'ecran game over
		this.game.state.start("GameOver");
	},
	update : function(){
		/* DEBUG PLAYER */
		this.game.debug.body(this.game.player);

		//mise à jour globale du jeu
		this.game.player.body.velocity.x = 0;
		// [ TODO a changer ]
		if(this.game.keys.left.isDown || this.game.wasd.left.isDown) {
			this.game.player.body.velocity.x = -50;
		} else if(this.game.keys.right.isDown || this.game.wasd.right.isDown) {
			this.game.player.body.velocity.x = 50;
		} if(this.game.keys.up.isDown || this.game.wasd.up.isDown) {
			this.game.player.jump();
		}

		/*if (this.game.keys.left.isUp || this.game.keys.right.isDown) {
			this.game.player.body.velocity.x = 0;
		}*/
	}
}

