Megaman.Player = function (game, name) {

	// on appelle Phaser.Sprite en donnant le "game" en reference
    Phaser.Sprite.call(this, game);

    this.loadTexture('megaman');

    //this est notre sprite phaser maintenant
    this.anchor.setTo(0.5, 0.5);

    this.name = name;
    this.jumpTimer = 0;

	// ajout du clavier
	console.log(this.game)
	this.game.keys = this.game.input.keyboard.createCursorKeys();
	this.game.wasd = { 	up: this.game.input.keyboard.addKey(Phaser.Keyboard.Z), 
						//down: this.game.input.keyboard.addKey(Phaser.Keyboard.S), 
						left: this.game.input.keyboard.addKey(Phaser.Keyboard.Q), 
						right: this.game.input.keyboard.addKey(Phaser.Keyboard.D)}

	this.game.physics.enable(this, Phaser.Physics.ARCADE);
	this.body.collideWorldBounds = true;
    this.create();

    return this;
}

// défini le ptototype de notre objet
Megaman.Player.prototype = Object.create(Phaser.Sprite.prototype);
// rappelle a l'objet que
Megaman.Player.prototype.constructor = Megaman.Player;

Megaman.Player.prototype.create = function (x) {
	console.log("je suis vivant !")
	this.body.health = 100;
	this.game.add.existing(this);
	//autorise la physique
	this.enableBody = true;
	this.alive = true;
}

Megaman.Player.prototype.jump = function(argument){
	if (this.body.onFloor() && this.game.time.now > this.jumpTimer)
    {
        this.body.velocity.y = -250;
        this.jumpTimer = this.game.time.now + 750;
    }
};

Megaman.Player.prototype.hit = function (damage) {   
	console.log("je suis touché !")
	this.body.health -= damage;
	if (this.body.health < 0) {
		this.explode();
	}
}

Megaman.Player.prototype.explode = function () {
	console.log("je suis mort !");
	this.alive = false;
	this.kill();
}


