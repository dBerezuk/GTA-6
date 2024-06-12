class PublicUrl {
	image = `/images`;
	audio = `/audio`;

	constructor() {}

	getImage(path) {
		return `${this.image}${path}`;
	}

	getAudio(path) {
		return `${this.audio}${path}`;
	}
}

export default new PublicUrl;