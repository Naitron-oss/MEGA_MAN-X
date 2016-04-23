Megaman.Boss = function (game, name) {
	var _self = this;

	// on appelle Phaser.Sprite en donnant le "game" en reference
	Phaser.Sprite.call(_self, game);
	game.add.existing(_self);

	this.loadTexture("boss");

    //this est notre sprite phaser maintenant
    _self.anchor.setTo(0.5);

    _self.name = name;
    _self.pv = 100;
	//_self.sprite = sprite;

    _self.anchor.set(0.5,0.5);
    _self.animations.add('move');
    

	_self.game.physics.enable(_self, Phaser.Physics.ARCADE);
	_self.body.collideWorldBounds = true;
	_self.body.gravity.y = 250;

	_self.isMoving = false;
	_self.toRight = false;
	_self.movementCounter = 0;
    _self.create();

    return _self;
}

// défini le ptototype de notre objet
Megaman.Boss.prototype = Object.create(Phaser.Sprite.prototype);
// rappelle a l'objet que
Megaman.Boss.prototype.constructor = Megaman.Boss;

Megaman.Boss.prototype.create = function(x){
	//console.log("je suis vivant !")
	//autorise la physique
	this.enableBody = true;
	this.reset(3504,1248);
	this.animations.play('move', 10, true);
	//console.dir(this);

	//ajout groupe de bullet Boss
	this.bullets = this.game.add.group();
	this.bullets.enableBody = true;
	this.bullets.physicsBodyType = Phaser.Physics.ARCADE;
	this.bullets.createMultiple(75, 'bossBullets');
	this.bullets.setAll('anchor.x', 0.5);
	this.bullets.setAll('anchor.y', 0.5);
	this.bullets.setAll('damage', 25);
	this.bullets.setAll('body.allowGravity', false);
	this.bullets.setAll('checkWorldBounds', true);
	this.bullets.setAll('outOfBoundsKill', true);
	this.bullets.setAll('body.mass', 5);

	this.game.time.events.loop(Phaser.Timer.SECOND*2, this.switchPattern, this);
	//this.pattern1();

}

Megaman.Boss.prototype.hit = function (player, bullet) {   
	//console.log("je suis touché ! " + bullet.body.damage + " dégats");
	bullet.kill();
	this.pv -= bullet.body.damage;
	if (this.pv <= 0) {
		this.explode();
	}
}
Megaman.Player.prototype.explode = function () {
	console.log("FireMan : je suis mort !");
	this.kill();
}
Megaman.Boss.prototype.shoot = function(x) {
	var _self = this;
	_self.loadTexture("bossShoot");
	_self.animations.play('move', 10, true);
	//this.game.time.events.loop(Phaser.Timer.SECOND*2, this.createBullet, this);
	_self.createBullet();
	// repasse en position normale apres 0.3 sec
	setTimeout(function () {
		_self.loadTexture("boss");
		_self.animations.play('move', 10, true);
	}, 300)
}
Megaman.Boss.prototype.megaShoot = function(x) {
	var _self = this;
	_self.isMoving = true;
	_self.loadTexture("bossShoot");
	_self.animations.play('move', 10, true);
	var myLoop = this.game.time.events.loop(Phaser.Timer.SECOND/10, this.createBullet, this);
	// repasse en position normale apres 2 sec
	setTimeout(function () {
		_self.game.time.events.remove(myLoop);
		_self.loadTexture("boss");
		_self.animations.play('move', 10, true);
		_self.isMoving = false;
	}, 2000)
}


Megaman.Boss.prototype.createBullet = function(){
	
	var bullet = this.bullets.getFirstExists(false);
	if (bullet) {
		bullet.reset(this.x - 16, this.y);
		bullet.animations.add('shoot');
		bullet.animations.play('shoot',10,true);
		bullet.body.velocity.x = -400;
		
	}
	
}
Megaman.Boss.prototype.switchPattern = function(){
	var _self = this;

	if (!_self.isMoving) {
		switch (_self.movementCounter) {
			case 0 :
			case 1 :
			case 2 :
			case 3 :
				_self.moveAndShoot();
				_self.movementCounter++;
				break;
			default:
				_self.megaShoot();
				console.log('restart Boss Pattern');
				_self.movementCounter = 0;
				break;
		}
	}
}

Megaman.Boss.prototype.moveAndShoot = function(){
	var _self = this;
	_self.isMoving = true;

	var movement = -50;
	
	//console.log(_self.toRight);
	if (_self.toRight) {
		movement = -movement;
		this.scale.x = -1;
	}

	this.loadTexture("bossRun");
	this.animations.play('move', 10, true);
	var mover = this.game.add.tween(this).to( { 
			x : this.position.x + movement
		} , 500, Phaser.Easing.Linear.None, true);
	mover.onComplete.add(function(){
			_self.loadTexture("boss");
			_self.animations.play('move');
			_self.isMoving = false;
			_self.toRight = !_self.toRight;
			_self.scale.x = 1;
			_self.shoot();
		})	

}
