Megaman.Game = function(){}

Megaman.Game.prototype = {
	create: function(){ 
		console.log("Game Screen")

		this.game.physics.startSystem(Phaser.Physics.ARCADE);
		//crée un joueur
		this.game.player = new Megaman.Player(this.game, "Batman");
		//this.game,"nom",type,posx,posy
		this.game.enemy = new Megaman.Enemy(this.game, "Mario", 1, 50, 200);
		// bouton a retirer juste pour passer a l'ecran suivant
		//var gameOverButton = this.game.add.button(600, 320, "play", this.stopTheGame, this);
		//gameOverButton.anchor.setTo(0.5,0.5);

		this.map = this.game.add.tilemap('plateforme');
		this.map.addTilesetImage('ground');
		this.map.setCollisionBetween(1, 1);
		
		this.layer = this.map.createLayer("Calque de Tile 1");
		this.layer.debug = true;

		console.log(this.layer);

	},
	stopTheGame : function(){
		// tue le joueur
		this.game.player.explode();
		// va a l'ecran game over
		this.game.state.start("GameOver");
	},
	update : function(){

		//console.log("bouge")
		//PATTERN DEPLACEMENT

		//mise à jour globale du jeu
		// [ TODO a changer ]
/*		if(this.game.keys.left.isDown) {
			this.game.player.body.velocity.x = -50;
		} else if(this.game.keys.right.isDown) {
			this.game.player.body.velocity.x = 50;
		} if(this.game.keys.up.isDown) {
			this.game.player.body.velocity.y = -50;
		}else if(this.game.keys.down.isDown) {
			this.game.player.body.velocity.y = 50;
		}*/

		this.game.physics.arcade.collide(this.game.enemy, this.layer);
		if(this.game.keys.left.isDown) {
			this.game.enemy.body.velocity.x = -50;
		} else if(this.game.keys.right.isDown) {
			this.game.enemy.body.velocity.x = 50;
		} if(this.game.keys.up.isDown) {
			this.game.enemy.body.velocity.y = -50;
		}else if(this.game.keys.down.isDown) {
			this.game.enemy.body.velocity.y = 50;
		}
	}
}

