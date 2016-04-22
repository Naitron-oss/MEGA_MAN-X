Megaman.Player = function (game, name) {

	// on appelle Phaser.Sprite en donnant le "game" en reference
   
    Phaser.Sprite.call(this, game);

    //this est notre sprite phaser maintenant
    this.anchor.setTo(0.5, 0.5);

    this.name = name;

    this.game.add.sprite(30, 30, 'key');
    this.anchor.set(0.5,0.5);
	// ajout du clavier
	this.game.keys = this.game.input.keyboard.createCursorKeys();

	this.game.physics.enable(this, Phaser.Physics.ARCADE);

    this.create();

    return this;
}

// défini le ptototype de notre objet
Megaman.Player.prototype = Object.create(Phaser.Sprite.prototype);
// rappelle a l'objet que
Megaman.Player.prototype.constructor = Megaman.Player;

Megaman.Player.prototype.create = function (x) {
	console.log("je suis vivant !")
	//autorise la physique
	this.enableBody = true;
	this.alive = true;
}

Megaman.Player.prototype.hit = function () {   
	console.log("je suis touché !")
}

Megaman.Player.prototype.explode = function () {

	console.log("je suis mort !");
	this.alive = false;
	this.kill();
}


