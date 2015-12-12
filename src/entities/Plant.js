export default class Plant extends Phaser.Sprite {
	constructor(game, x, y) {
		super(game, x, y, 'plant');

		this.anchor.set(0.5);
		this.z = 0;
		this.game.physics.arcade.enable(this, Phaser.Physics.ARCADE);
		this.game.layers.plants.addChild(this);
	}
}