import Plant from 'entities/Plant';
import Shot from 'entities/Shot';

export default class Strawberry extends Phaser.Sprite {
	constructor(game) {
		super(game, 200, 200, 'strawberry');

		this.z = 10;

		this.fireRate = 100;
		this.nextFire = 0;

		this.plantRate = 1000;
		this.nextPlant = 0;

		this.anchor.set(0.5);
		this.game.layers.player.addChild(this);
		this.game.physics.arcade.enable(this, Phaser.Physics.ARCADE);

    this.body.fixedRotation = true;

    this.cursors = this.game.input.keyboard.createCursorKeys();
    this.wasd = {
			up: this.game.input.keyboard.addKey(Phaser.Keyboard.W),
			down: this.game.input.keyboard.addKey(Phaser.Keyboard.S),
			left: this.game.input.keyboard.addKey(Phaser.Keyboard.A),
			right: this.game.input.keyboard.addKey(Phaser.Keyboard.D),
		};
    this.actionKey = this.game.input.keyboard.addKey(Phaser.Keyboard.X);
	}

	update() {
		this.body.velocity.set(0, 0);

		if(this.cursors.left.isDown || this.wasd.left.isDown) {
				this.body.velocity.x = -150;
		} 
		else if(this.cursors.right.isDown || this.wasd.right.isDown) {
				this.body.velocity.x = 150;
		}

		if(this.cursors.up.isDown || this.wasd.up.isDown) {
				this.body.velocity.y = -150;
		}
		else if(this.cursors.down.isDown || this.wasd.down.isDown) {
				this.body.velocity.y = 150;
		}

    if(this.game.input.activePointer.isDown) {
      this.fire();
    }

    if(this.actionKey.isDown) {
    	this.plant();
    }
	}

	fire() {
    if(this.game.time.now > this.nextFire && this.game.layers.shots.countDead() > 0) {
      this.nextFire = this.game.time.now + this.fireRate;

		  let shot = this.game.layers.shots.getFirstDead();
	    shot.reset(this.x, this.y);
	    shot.rotation = this.game.physics.arcade.angleToPointer(shot);
	    this.game.physics.arcade.moveToPointer(shot, 500);
    }
	}

	plant() {
    if(this.game.time.now > this.nextPlant) {
      this.nextPlant = this.game.time.now + this.plantRate;
			
			new Plant(this.game, this.x, this.y);
		}
	}
}