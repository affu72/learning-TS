"use strict";
// import deepEqual from "deep-equal";
// [] + [];
// "hello" - 1;
function add(a, b) {
    return a + b;
}
const list = [
    {
        id: "foo",
        display: "foo select",
    },
    {
        id: "bar",
        display: "bar select",
    },
];
console.log(list);
const fooIndex = list.map((li) => li.id).indexOf("foo");
console.log(fooIndex);
// **Null vs Undefined
//Something hasn't been initialized : undefined.
//Something is currently unavailable: null.
console.log(typeof undefined); //undefined
console.log(typeof null); //object
console.log(null == undefined); //true
//** optional
function foo(a, b) {
    if (typeof b === "number")
        return { a, b };
    return { a };
}
console.log(foo(10, 5));
console.log(foo(5));
//**this
const arrowFun = () => console.log("'this' will be the surrounding of 'this', but as I am working in strinct environment so this will be undefined " +
    this);
arrowFun();
console.log(!!"a");
