export default class Shot extends Phaser.Sprite {
	constructor(game, x, y) {
		super(game, x, y, 'shot');

		this.anchor.set(0.5);
		this.game.physics.arcade.enable(this, Phaser.Physics.ARCADE);
	}
}