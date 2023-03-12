"use strict";
function printIngredient(quantity, ingredient, extra) {
    console.log(`${quantity} ${ingredient}${extra ? `${extra}` : ""}.`);
}
printIngredient("1kg", "floor");
printIngredient("1kg", "floor", "something more");
function getEmail(user) {
    return user?.info?.email || "no email found"; //can also use ??
}
console.log(getEmail({ id: "id1", info: { email: "A@gmail.com" } }));
//if callback is not there then don't call the callback.
function addWithCallback(x, y, callback) {
    console.log([x, y]);
    callback?.();
}
