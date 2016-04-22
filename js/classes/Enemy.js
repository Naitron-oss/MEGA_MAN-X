Megaman.Enemy = function (game, name, type, x, y) {

	// on appelle Phaser.Sprite en donnant le "game" en reference
    Phaser.Sprite.call(this, game);
    game.add.existing(this);

    console.log(type);
    this.type = type || 1;

    switch(this.type){
    	case 1:
    		this.loadTexture("enemy1");
    	break;
    	case 2:
    		this.loadTexture("enemy2");
    	break;
    	case 3:
    		this.loadTexture("enemy3");
    	break;
    }

    //this est notre sprite phaser maintenant
    this.anchor.setTo(0.5, 0.5);

    this.name = name; 

    this.anchor.set(0.5,0.5);
	// ajout du clavier
	this.game.keys = this.game.input.keyboard.createCursorKeys();

	this.game.physics.enable(this, Phaser.Physics.ARCADE);

    this.create(x,y);
    this.move();

    return this;
}

// défini le ptototype de notre objet
Megaman.Enemy.prototype = Object.create(Phaser.Sprite.prototype);
// rappelle a l'objet que
Megaman.Enemy.prototype.constructor = Megaman.Enemy;

Megaman.Enemy.prototype.create = function (x,y) {
	console.log("je suis vivant !")
	//autorise la physique
	this.enableBody = true;
	this.alive = true;
	//ajout de la position aleatoire
    this.position.x = x;
    this.position.y = y;
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
	this.body.velocity.x = 20;
}


