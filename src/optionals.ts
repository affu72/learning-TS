function printIngredient(quantity: string, ingredient: string, extra?: string) {
  console.log(`${quantity} ${ingredient}${extra ? `${extra}` : ""}.`);
}

printIngredient("1kg", "floor");
printIngredient("1kg", "floor", "something more");

interface User {
  id: string;
  info?: {
    email?: string;
  };
}

function getEmail(user: User) {
  return user?.info?.email || "no email found"; //can also use ??
}

console.log(getEmail({ id: "id1", info: { email: "A@gmail.com" } }));

//if callback is not there then don't call the callback.
function addWithCallback(x: number, y: number, callback?: () => void) {
  console.log([x, y]);
  callback?.();
}
