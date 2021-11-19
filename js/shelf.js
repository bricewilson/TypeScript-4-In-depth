"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Shelf {
    constructor() {
        this._items = new Array();
    }
    add(item) {
        this._items.push(item);
    }
    getFirst() {
        return this._items[0];
    }
    find(title) {
        return this._items.filter(item => item.title === title)[0];
    }
    printTitles() {
        this._items.forEach(item => console.log(item.title));
    }
}
exports.default = Shelf;
//# sourceMappingURL=shelf.js.map