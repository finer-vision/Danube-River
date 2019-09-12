class Event {
  #events = {};

  on(name, fn) {
    if (!this.#events.hasOwnProperty(name)) {
      this.#events[name] = [];
    }
    this.#events[name].push(fn);
  }

  off(name, fn) {
    if (!this.#events.hasOwnProperty(name)) {
      return;
    }
    this.#events[name] = this.#events[name].filter(event => event !== fn);
    if (this.#events[name].length === 0) {
      delete this.#events[name];
    }
  }

  emit(name, data) {
    if (!this.#events.hasOwnProperty(name)) {
      return;
    }
    for (let i = 0; i < this.#events[name].length; i++) {
      this.#events[name][i](data);
    }
  }
}

export default new Event();
