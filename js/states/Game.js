Megaman.Game = function(){}


var enemyArray = [];
var typeArray = [1,2,3];

Megaman.Game.prototype = {
	create: function(){ 
		console.log("Game Screen")

		this.game.physics.startSystem(Phaser.Physics.ARCADE);
		//crée un joueur

		this.game.player = new Megaman.Player(this.game, "Batman");

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

		//this.game.player = new Megaman.Player(this.game, "Batman");
		//this.game,"nom",type,posx,posy
		for (var i = 0; i < 10; i++) {
			var t = typeArray[Math.floor(Math.random()*typeArray.length)];
			enemyArray.push(new Megaman.Enemy(this.game, "Mario", t, 10*i, 20*i));
		}

		// bouton a retirer juste pour passer a l'ecran suivant
		//var gameOverButton = this.game.add.button(600, 320, "play", this.stopTheGame, this);
		//gameOverButton.anchor.setTo(0.5,0.5);

		this.map.setCollisionBetween(1, 1);

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


		//console.log("bouge")
		//PATTERN DEPLACEMENT

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

		/* Gestion des ennemies */
		for (var i = 0; i < enemyArray.length; i++) {
			this.game.physics.arcade.collide(enemyArray[i], this.layer);
			switch(enemyArray[i].type){
		    	case 1:
		    		enemyArray[i].move();
		    	break;
		    	case 2:
		    		enemyArray[i].shoot();
		    	break;
		    	case 3:
		    		enemyArray[i].fly();
		    	break;
		    }
		}
	}
}

