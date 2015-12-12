import White from 'filters/White';

export default class Pineapple extends Phaser.Sprite {
	constructor(game, x, y) {
		super(game, x, y, 'pineapple');

		this.name = 'pineapple';
		this.anchor.set(0.5);
		this.game.layers.enemies.addChild(this);
		this.game.physics.arcade.enable(this, Phaser.Physics.ARCADE);

		this.stunned = false;
		this.health = 100;

		this.body.drag.set(400, 400);
	}

	update() {
		if(!this.stunned) {
			this.game.physics.arcade.moveToObject(this, this.game.layers.player.getAt(0), 100);
		}
	}

	onDamage(shot) {
		this.health -= 10;
		this.stunned = true;
		this.filters = [new White(this.game)];

		this.game.physics.arcade.velocityFromRotation(this.game.physics.arcade.angleBetween(this, shot), -100, this.body.velocity);

		if(this.health < 0) {
			this.kill();
		}

		setTimeout(() => {
			this.filters = null;
		}, 40);

		setTimeout(() => {
			this.stunned = false;
		}, 150);
	}
}