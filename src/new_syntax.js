class MyNewArray{
    constructor () {
        this.length = 0;
    }

    push() {
        for (let i = 0; i < arguments.length; i++) {
            this[this.length] = arguments[i];
            this.length++;
        }
        return this.length;
    }


    pop() {
        const lastItem = this[this.length - 1];
        delete this[this.length - 1];
        this.length--;
        return lastItem;
    }


    forEach(callback) {
        for (let i = 0; i < this.length; i++) {
         callback(this[i], i, this);
        }
    }


    map(fn) {
        const arr = new MyArray();
        for (let i = 0; i < this.length; i++) {
            arr.push(fn(this[i]));
        }
        return arr
    }

    static isMyNewArray (obj) {
        return obj instanceof MyNewArray;
    }

    concat(array2) {
        for (let i = 0; i < array2.length; i++) {
            this.push(array2[i]);
        }
        return this;
    }


    flat() {
        const newArr = new MyNewArray();
        for (let i = 0; i < this.length; i++) {
            if(MyNewArray.isMyNewArray(this[i])) {
                newArr.concat(this[i].flat());
            } else {
                newArr.push(this[i]);
            }
        }
        return newArr;
    }


    reverse () {
        debugger
        for (let i = 0; i < (this.length-1) / 2; i++) {
            let tmp = this[i];
            this[i] = this[(this.length-1) - i];
            this[(this.length-1) - i] = tmp;
        }
        return this;
    }

    [Symbol.iterator] = function () {
        return {
             next: () => {
                return {
                    value: this[i++],
                    done: i > this.length,
                }
            }
        }
    }

    indexOf (elem) {
        for (let i = 0; i < this.length; i++) {
            if (elem === this[i]) {
                return i;
            } else {

            }
        }
        return -1;
    }
    includes (elem) {
        for (let i = 0; i < this.length; i++) {
            if (elem === this[i]) {
                return true;
            } else {

            }
        }
        return false;
    }
















    // indexOF(elem) {
    //     for (let i = 0; i < this.length; i++) {
    //         if(elem === this[i]) {
    //             return i;
    //         }
    //     }
    //     return -1;
    // }
    // includes(elem) {
    //     for (let i = 0; i < this.length; i++) {
    //         if(elem === this[i]) {
    //             return true;
    //         }
    //     }
    //     return false;
    // }

}

const myArr = new MyNewArray();