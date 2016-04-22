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
    

	// ajout du clavier
	_self.game.keys = _self.game.input.keyboard.createCursorKeys();

	_self.game.physics.enable(_self, Phaser.Physics.ARCADE);
	this.body.collideWorldBounds = true;

    _self.create();

    return _self;
}

// défini le ptototype de notre objet
Megaman.Boss.prototype = Object.create(Phaser.Sprite.prototype);
// rappelle a l'objet que
Megaman.Boss.prototype.constructor = Megaman.Boss;

Megaman.Boss.prototype.create = function(x){
	console.log("je suis vivant !")
	//autorise la physique
	this.enableBody = true;
	this.reset(750,600-16);
	this.animations.play('move', 10, true);
	console.dir(this);
	this.shoot();

}

Megaman.Boss.prototype.shoot = function(x) {
	this.loadTexture("bossShoot");
	this.animations.play('move', 10, true);
	this.createBullet();
}

Megaman.Boss.prototype.createBullet = function(){
	// this.bullet.loadTexture("bossShoot");
	this.bullet = this.game.add.sprite(this.x -16,this.y, "bossBullets");
	this.bullet.damage = 25;
	this.bullet.animations.add('shoot');
	this.bullet.animations.play('shoot',10,true);
	this.bullet.anchor.set(0.5,0.5);
	this.game.physics.enable(this.bullet, Phaser.Physics.ARCADE);
	this.bullet.enableBody = true;	
	this.bullet.body.collideWorldBounds = true;
	this.bullet.body.velocity.x = -150;

}