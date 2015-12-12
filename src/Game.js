import 'phaser-shim';

import GameState from 'states/GameState';
import LoadState from 'states/LoadState';
import Strawberry from 'entities/Strawberry';

export default class Game extends Phaser.Game {
	constructor(width, height) {
		super(width, height, Phaser.AUTO, document.body);

		this.state.add('GameState', GameState, false);
		this.state.add('LoadState', LoadState, false);
		this.state.start('LoadState');

		console.log(this);
	}
}