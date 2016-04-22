Megaman.Title = function(){}

Megaman.Title.prototype = {
	create: function(){ 

		var halfPositionX = this.game.world.centerX;
		var halfPositionY = this.game.world.centerY;
		
		console.log("Title create")

		var mainScreen = this.game.add.sprite(0,0,"mainScreen");
			mainScreen.scale.x = .4;
			mainScreen.scale.y = .4;
		var logo = this.game.add.sprite(halfPositionX, halfPositionY - 65,"logo");
			logo.scale.x = .4;
			logo.scale.y = .4;
			logo.anchor.set(0.5);

		var playButton = this.game.add.button(halfPositionX, halfPositionY + 50, "play", this.playTheGame, this);
			playButton.anchor.setTo(0.5,0.5);
			playButton.scale.x = .4;
			playButton.scale.y = .4;

		var creditButton = this.game.add.button(halfPositionX, halfPositionY + 65, "credit", this.playTheGame, this);
			creditButton.anchor.setTo(0.5,0.5);
			creditButton.scale.x = .4;
			creditButton.scale.y = .4;
		
	},
  	playTheGame: function(){
  		// go to title
		this.game.state.start("Game");
	}
}
