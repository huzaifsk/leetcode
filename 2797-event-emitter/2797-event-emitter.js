class EventEmitter {
    constructor() {
        // Store event listeners in an object where keys are event names
        // and values are arrays of subscribed callback functions.
        this.events = {};
    }
    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
    subscribe(eventName, callback) {
        // Initialize the event array if it doesn't exist yet
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }

        // Add the callback to the event's list of listeners
        this.events[eventName].push(callback);

        return {
            unsubscribe: () => {
               // Remove the callback from the list of listeners
                this.events[eventName] = this.events[eventName].filter(
                    (cb) => cb !== callback
                );

                // Clean up the event if there are no more listeners
                if (this.events[eventName].length === 0) {
                    delete this.events[eventName];
                } 
            }
        };
    }
    
    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(eventName, args = []) {
        // If there are no listeners for the event, return an empty array
        if (!this.events[eventName]) {
            return [];
        }

        // Call each listener in the order they were added and collect the results
        return this.events[eventName].map((callback) => callback(...args));
    }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */