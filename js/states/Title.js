Megaman.Title = function(){}

Megaman.Preload.prototype = {
	create: function(){ 
		
		console.log("Title create")

		Megaman.add.images(game.world.centerX, game.world.centerY, 'mainScreen').anchor.set(0.5);

		var playButton = this.game.add.button(200, 320, "play", this.playTheGame, this);
			playButton.anchor.setTo(0.5,0.5);
		
	},
  	playTheGame: function(){
  		// go to title
		this.game.state.start("Game");
	}
}
