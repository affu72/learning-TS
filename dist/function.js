function addNumbers(a, b) {
    return a + b;
}
export default addNumbers;
export const addStrings = (str1, str2 = "") => str1 + str2;
export const format = (title, param) => `${title} ${param}`;
//function returning void
export const printFormat = (title, param) => {
    console.log(format(title, param));
};
//function returning promises
export const fetchData = (url) => Promise.resolve(`data form ${url}`);
//rest parameter
function introduce(salutaton, ...name) {
    return `${salutaton} ${name.join(" ")}`;
}
function getName(user) {
    return `${user.first} ${user.second}`;
}
