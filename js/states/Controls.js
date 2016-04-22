Megaman.Controls = function(game){}

Megaman.Controls.prototype = {
	create: function(){ 
		
		console.log("Controls")


		
	},
	replay : function(){
		this.game.state.start("Title");
	}
}
