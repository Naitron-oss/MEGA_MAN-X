Megaman.Game = function(){}

Megaman.Game.prototype = {
	create: function(){ 
		console.log("Game Screen")

		//crée un joueur
		this.game.player = new Megaman.Player(this.game, "Batman");

		this.game.boss = new Megaman.Boss(this.game, "Boss");

		//ajout d'un groupe de bullets pour MEGAMAN
		this.game.player.bullets = this.game.add.group();
		this.game.player.bullets.enableBody = true;
		this.game.player.bullets.physicsBodyType = Phaser.Physics.ARCADE;
		this.game.player.bullets.createMultiple(30, 'bullet');
		this.game.player.bullets.setAll('anchor.x', 1);
		this.game.player.bullets.setAll('anchor.y', 0.5);
		this.game.player.bullets.setAll('outOfBoundsKill', true);
		this.game.player.bullets.setAll('checkWorldBounds', true);

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
		this.game.debug.body(this.game.boss);

		//mise à jour globale du jeu
		this.game.player.body.velocity.x = 0;

		/* CONTROLS */
		if(this.game.keys.left.isDown || this.game.wasd.left.isDown) {
			this.game.player.scale.x = 1;
			this.game.player.play('run', null, false);
			this.game.player.body.velocity.x = -50;
		} else if(this.game.keys.right.isDown || this.game.wasd.right.isDown) {
			this.game.player.scale.x = -1;
			this.game.player.play('run', null, false);
			this.game.player.body.velocity.x = 50;
		}else {
			this.game.player.animations.stop('run');
		}

		if (this.game.jumpButtons.a.isDown || this.game.jumpButtons.space.isDown) {
			this.game.player.play('jump', null, false);
			this.game.player.jump();
		} else {
			this.game.player.animations.stop('jump');
		}

/*		if(this.game.keys.up.isDown || this.game.wasd.up.isDown) {
			//POUR LES ECHELLES			
		}*/

		if (this.game.shootButtons.e.isDown || this.game.shootButtons.shift.isDown ) {
			this.game.player.play('shoot', null, false);
			this.game.player.shoot();
		} else {
			this.game.player.animations.stop('shoot');
			//this.game.player.loadTexture('megaman',8);
		}

		/* Collisions  */
		this.game.physics.arcade.collide(this.game.boss.bullets, this.game.player, this.game.player.hit, null, this.game.player);
	}
}

