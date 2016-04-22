MyGame.GameOver = function(game){}

MyGame.GameOver.prototype = {
	create: function(){ 
		
		console.log("Game Over")

		var replayButton = this.game.add.button(400, 500, "play", this.replay, this);
		replayButton.anchor.setTo(0.5,0.5);
		
	},
	replay : function(){
		this.game.state.start("Game");
	}
}

