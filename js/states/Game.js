Megaman.Game = function(){}

Megaman.Game.prototype = {
	create: function(){ 
		console.log("Game Screen")

		//crée un joueur
		//this.game.player = new Megaman.Player(this.game, "Batman");
		this.game.enemy = new Megaman.Enemy(this.game, "Mario");
		console.log(this.game.enemy);

		// bouton a retirer juste pour passer a l'ecran suivant
		//var gameOverButton = this.game.add.button(600, 320, "play", this.stopTheGame, this);
		//gameOverButton.anchor.setTo(0.5,0.5);
		
	},
	stopTheGame : function(){
		// tue le joueur
		this.game.player.explode();
		// va a l'ecran game over
		this.game.state.start("GameOver");
	},
	update : function(){
		//PATTERN DEPLACEMENT

		//mise à jour globale du jeu
		// [ TODO a changer ]
		if(this.game.keys.left.isDown) {
			this.game.player.body.velocity.x = -50;
		} else if(this.game.keys.right.isDown) {
			this.game.player.body.velocity.x = 50;
		} if(this.game.keys.up.isDown) {
			this.game.player.body.velocity.y = -50;
		}else if(this.game.keys.down.isDown) {
			this.game.player.body.velocity.y = 50;
		}

		this.game.enemy.body.velocity.x = 50;

	}
}

