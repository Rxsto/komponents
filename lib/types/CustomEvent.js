class CustomEvent {

	constructor(type, callback) {
		this.type = type;
		this.callback = callback;
	}

	execute() {
		this.callback();
	}

}

module.exports = CustomEvent;
