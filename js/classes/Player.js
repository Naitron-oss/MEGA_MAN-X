MyGame.Player = function (game, name) {

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
MyGame.Player.prototype = Object.create(Phaser.Sprite.prototype);
// rappelle a l'objet que
MyGame.Player.prototype.constructor = MyGame.Player;

MyGame.Player.prototype.create = function (x) {
	console.log("je suis vivant !")
	//autorise la physique
	this.enableBody = true;
	this.alive = true;
}

MyGame.Player.prototype.hit = function (bomb, block) {   
	console.log("je suis touché !")
}

MyGame.Player.prototype.explode = function () {

	console.log("je suis mort !");
	this.alive = false;
	this.kill();
}


