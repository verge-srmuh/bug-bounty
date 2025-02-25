class EventEmitter {
    constructor() {
        this.events = {};
    }

    on(event, listener) {
        if (!this.events[event]) this.events[event] = [];
        this.events[event].push(listener);
    }

    emit(event, ...args) {
        if (this.events[event]) {
            this.events[event].forEach(listener => listener(...args));
        }
    }
}

let emitter = new EventEmitter();
for (let i = 0; i < 1000000; i++) {
    emitter.on("data", () => console.log("Event triggered"));
}
emitter.emit("data");
