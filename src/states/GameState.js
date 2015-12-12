import { times } from 'lodash';

import Pineapple from 'entities/Pineapple';
import Shot from 'entities/Shot';
import Strawberry from 'entities/Strawberry';

export default class GameState extends Phaser.State {
	create() {
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    this.game.stage.backgroundColor = '#72aa52';

		this.game.layers = {
			player: this.game.add.group(),
			shots: this.game.add.group(),
			plants: this.game.add.group(),
			enemies: this.game.add.group()
		}

		this.game.layers.plants.z = 0;
		this.game.layers.player.z = 10;
		this.game.layers.plants.z = 20;
		this.game.layers.enemies.z = 11;

    this.game.layers.player.enableBody = true;
    this.game.layers.player.physicsBodyType = Phaser.Physics.ARCADE;

    this.game.layers.shots.enableBody = true;
    this.game.layers.shots.physicsBodyType = Phaser.Physics.ARCADE;

    this.game.layers.enemies.enableBody = true;
    this.game.layers.enemies.physicsBodyType = Phaser.Physics.ARCADE;

    times(50, (i) => {
    	let shot = new Shot(this.game, 0, 0);
    	this.game.layers.shots.add(shot);
    	shot.name = 'shot_' + i;
    	shot.kill();
    });

    this.game.layers.shots.setAll('checkWorldBounds', true);
    this.game.layers.shots.setAll('outOfBoundsKill', true);

		new Strawberry(this.game);
		new Pineapple(this.game, 600, 400);
		new Pineapple(this.game, 100, 400);
		new Pineapple(this.game, 100, 50);
	}

	update() {
		this.game.physics.arcade.collide(this.game.layers.enemies);
		this.game.physics.arcade.collide(this.game.layers.player, this.game.layers.enemies);
    this.game.physics.arcade.overlap(this.game.layers.shots, this.game.layers.enemies, this.enemyShotHandler);
	}

	enemyShotHandler(shot, enemy) {
		shot.kill();
		enemy.onDamage(shot);
	}
}