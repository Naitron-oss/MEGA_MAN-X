Megaman.Title = function(){}

Megaman.Title.prototype = {
	create: function(){ 

		var halfPositionX = this.game.world.centerX;
		var halfPositionY = this.game.world.centerY;
		
		console.log("Title create")

		this.game.add.sprite(0,0,"mainScreen");
		this.game.add.sprite(halfPositionX, halfPositionY - 150,"logo").anchor.set(0.5);;


		var playButton = this.game.add.button(halfPositionX, halfPositionY + 150, "play", this.playTheGame, this);
			playButton.anchor.setTo(0.5,0.5);

		var creditButton = this.game.add.button(halfPositionX, halfPositionY + 180, "credit", this.playTheGame, this);
			creditButton.anchor.setTo(0.5,0.5);
		
	},
  	playTheGame: function(){
  		// go to title
		this.game.state.start("Game");
	}
}
