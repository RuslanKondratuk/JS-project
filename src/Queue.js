class Queue {
    constructor (...arg) {
        this._head = 0;
        this._tial = 0;
        for (const iterator of arg) {
            this.enqueue(iterator);
        }
    }

    get size() {
        return this._tial - this._head;
    }

    enqueue (value) {
        this[`_${this._tial}`] = value;
        this._tial++;
        return this.size;
    }

    dequeue () {
        if (this.size) {
            const firstItem = this[`_${this._head}`];
            delete this[`_${this._head}`];
            this._head++;
            return firstItem
        }
    }
}