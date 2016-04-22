Megaman.Win = function(game){}

Megaman.Win.prototype = {
	create: function(){ 
		
		console.log("Game Over")


		var replayButton = this.game.add.button(0, 0, "Win", this.replay, this);
			// replayButton.anchor.setTo(0.5,0.5);
			replayButton.scale.x = .4;
			replayButton.scale.y = .4;
		
	},
	replay : function(){
		this.game.state.start("Title");
	}
}
