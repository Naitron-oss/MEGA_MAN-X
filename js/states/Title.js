MyGame.Title = function(){}

MyGame.Preload.prototype = {
	create: function(){ 
		
		console.log("Title create")

		var playButton = this.game.add.button(200, 320, "play", this.playTheGame, this);
			playButton.anchor.setTo(0.5,0.5);
		
	},
  	playTheGame: function(){
  		// go to title
		this.game.state.start("Game");
	}
}
