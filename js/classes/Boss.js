Megaman.Boss = function (game, name) {
	var _self = this;

	// on appelle Phaser.Sprite en donnant le "game" en reference
	Phaser.Sprite.call(_self, game);

	

    //this est notre sprite phaser maintenant
    _self.anchor.setTo(1, 1);

    _self.name = name;
    _self.pv = 100;
	//_self.sprite = sprite;

    _self.game.add.sprite(30, 30, 'key');
    _self.anchor.set(0.5,0.5);

	// ajout du clavier
	_self.game.keys = _self.game.input.keyboard.createCursorKeys();

	_self.game.physics.enable(_self, Phaser.Physics.ARCADE);

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
}

