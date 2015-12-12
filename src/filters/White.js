export default class White extends Phaser.Filter {
	constructor(game) {
		super(game, {});

		this.fragmentSrc = [
        "precision mediump float;",

        "varying vec2       vTextureCoord;",
        "uniform sampler2D  uSampler;",

        "void main(void) {",
            "gl_FragColor = texture2D(uSampler, vTextureCoord);",
            "if(gl_FragColor.a != 0.0) {",
            		"gl_FragColor.rgb = vec3(1.0, 1.0, 1.0);",
            "}",
        "}"
		];
	}
}