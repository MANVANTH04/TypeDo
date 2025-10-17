"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let x = 1; //type inference
console.log(x);
let y = 3;
function addsum(firstname, lastname) {
    return firstname + lastname;
}
console.log(addsum(2, 3));
function adddsum(firstname, lastname) {
    return firstname + lastname;
}
function addingsums(one, two, three, four) {
    return adddsum(one, two) + addsum(three, four);
}
console.log(addingsums(1, 2, 3, 4));
function greet(name) {
    console.log("HELLO " + name);
}
greet("manu");
// writing the right age 
function rightage(age) {
    if (age > 18) {
        return true;
    }
    else {
        return false;
    }
}
console.log(rightage(20));
//# sourceMappingURL=Index.js.map