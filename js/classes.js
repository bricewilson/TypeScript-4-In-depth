"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferenceItem = exports.UniversityLibrarian = void 0;
class UniversityLibrarian {
    assistCustomer(custName) {
        console.log(this.name + ' is assisting ' + custName);
    }
}
exports.UniversityLibrarian = UniversityLibrarian;
class ReferenceItem {
    constructor(title, year) {
        this.title = title;
        this.year = year;
        console.log('Creating a new ReferenceItem...');
    }
    get publisher() {
        return this._publisher.toUpperCase();
    }
    set publisher(newPublisher) {
        this._publisher = newPublisher;
    }
    printItem() {
        console.log(`${this.title} was published in ${this.year}.`);
        console.log(`Department: ${ReferenceItem.department}`);
    }
}
exports.ReferenceItem = ReferenceItem;
ReferenceItem.department = 'Research';
//# sourceMappingURL=classes.js.map