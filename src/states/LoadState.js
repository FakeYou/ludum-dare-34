import pineapple from 'assets/pineapple.png';
import plant from 'assets/plant.png';
import shot from 'assets/shot.png';
import strawberry from 'assets/strawberry.png';

export default class LoadState extends Phaser.State {
	preload() {
		this.game.load.image('pineapple', pineapple);
		this.game.load.image('plant', plant);
		this.game.load.image('shot', shot);
		this.game.load.image('strawberry', strawberry);
	}

	create() {
		this.game.state.start('GameState');
	}
}