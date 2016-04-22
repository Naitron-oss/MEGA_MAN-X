// la fonction anonyme protège la variable game
(function() {
	var game = new Phaser.Game(
			MyGame.config.width, 
			MyGame.config.height, 
			Phaser.AUTO, 
			MyGame.name
		);

	/*
		le premier argument est le nom de l'état,
		le deuxième est le nom de la fonction pour appeler cet état
	*/
	game.state.add("Splash", MyGame.Splash);
	game.state.add("Preload", MyGame.Preload);
	game.state.add("Title", MyGame.Title);
	game.state.add("Game", MyGame.Game);
	game.state.add("GameOver", MyGame.GameOver);

	// lancer l'ecran de lancement du jeu
	game.state.start("Splash");
})();    