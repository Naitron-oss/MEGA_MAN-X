Megaman.Enemy = function (game, name) {

	// on appelle Phaser.Sprite en donnant le "game" en reference
   
    Phaser.Sprite.call(this, game);

    //this est notre sprite phaser maintenant
    this.anchor.setTo(0.5, 0.5);

    this.name = name;
    console.log(this.name);

    //spwan enemy position
    var _x = 0;
    var _y = 200; 

    this.game.add.sprite(_x, _y, 'enemy');
    this.anchor.set(0.5,0.5);
	// ajout du clavier
	this.game.keys = this.game.input.keyboard.createCursorKeys();

	this.game.physics.enable(this, Phaser.Physics.ARCADE);

    this.create();
    this.move();

    return this;
}

// défini le ptototype de notre objet
Megaman.Enemy.prototype = Object.create(Phaser.Sprite.prototype);
// rappelle a l'objet que
Megaman.Enemy.prototype.constructor = Megaman.Enemy;

Megaman.Enemy.prototype.create = function (x) {
	console.log("je suis vivant !")
	//autorise la physique
	this.enableBody = true;
	this.alive = true;
}

Megaman.Enemy.prototype.hit = function () {   
	console.log("je suis touché !")
}

Megaman.Enemy.prototype.explode = function () {

	console.log("je suis mort !");
	this.alive = false;
	this.kill();
}

Megaman.Enemy.prototype.move = function () {
	console.log("je bouge!");
	this.body.velocity.x = 50;
	//console.log(this.body);

}


