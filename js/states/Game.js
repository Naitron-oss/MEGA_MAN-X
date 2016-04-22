Megaman.Game = function(){}

Megaman.Game.prototype = {
	create: function(){ 
		console.log("Game Screen")

		/*DAMIEN CODE*/
		this.mapLevel1 = this.game.add.tilemap('level1');
		this.mapLevel1.addTilesetImage('level1','tiles');

		console.log( this.mapLevel1 )
		
		this.layerBg = this.mapLevel1.createLayer("bg");
		this.layerDecor = this.mapLevel1.createLayer("decor");
		this.layerWalls = this.mapLevel1.createLayer("walls");
		this.layerLadder = this.mapLevel1.createLayer("ladder");
		this.layerSpike = this.mapLevel1.createLayer("spike");
		this.layerBg.resizeWorld();



		/*DAMIEN CODE END*/

		//crée un joueur
		this.game.player = new Megaman.Player(this.game, "Batman");

		this.game.camera.follow(this.game.player);


		this.game.boss = new Megaman.Boss(this.game, "Boss");

		//ajout d'un groupe de bullets pour MEGAMAN
		this.game.player.bullets = this.game.add.group();
		this.game.player.bullets.enableBody = true;
		this.game.player.bullets.physicsBodyType = Phaser.Physics.ARCADE;
		this.game.player.bullets.createMultiple(30, 'key');
		this.game.player.bullets.setAll('anchor.x', 1);
		this.game.player.bullets.setAll('anchor.y', 0.5);
		this.game.player.bullets.setAll('outOfBoundsKill', true);
		this.game.player.bullets.setAll('checkWorldBounds', true);


		// bouton a retirer juste pour passer a l'ecran suivant
		var gameOverButton = this.game.add.button(160, 120, "play", this.stopTheGame, this);
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
			this.game.player.body.velocity.x = -50;
		} else if(this.game.keys.right.isDown || this.game.wasd.right.isDown) {
			this.game.player.body.velocity.x = 50;
		}
		if (this.game.jumpButtons.a.isDown || this.game.jumpButtons.space.isDown) {
			this.game.player.jump();
		}

		if(this.game.keys.up.isDown || this.game.wasd.up.isDown) {
			//POUR LES ECHELLES			
		}


		/* Collisions  */
		this.game.physics.arcade.collide(this.game.boss.bullets, this.game.player, this.game.player.hit, null, this.game.player);
		this.game.physics.arcade.collide(this.game.player.bullets, this.game.boss, this.game.boss.hit, null, this.game.boss);


		/*if (this.game.keys.left.isUp || this.game.keys.right.isDown) {
			this.game.player.body.velocity.x = 0;
		}*/

		if (this.game.shootButtons.e.isDown || this.game.shootButtons.shift.isDown ) {
			this.game.player.shoot();
		}

	}
}

