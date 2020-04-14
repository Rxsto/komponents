const CustomEvent = require('../types/CustomEvent');

class Button {

	constructor(element) {
		this.element = document.getElementById(element);
		this.events = new Map();
	}

	add(name, type = 'click', callback) {
		if (this.events.get(name)) {
			throw Error(`A listener with the name ${name} does already exist!`);
		}

		this.events.set(name, new CustomEvent(type, callback));
		this.element.addEventListener(type, callback);
	}

	remove(name) {
		if (!this.events.get(name)) {
			throw Error(`A listener with the name ${name} does not exist!`);
		}

		const event = this.events.get(name);
		this.events.delete(name);
		this.element.removeEventListener(event.type, event.callback);
	}

	dispatch(event) {
		this.element.dispatchEvent(event);
	}

}

module.exports = Button;
