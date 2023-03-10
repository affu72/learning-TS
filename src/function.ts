function addNumbers(a: number, b: number): number {
  return a + b;
}

export default addNumbers;

export const addStrings = (str1: string, str2: string = ""): string =>
  str1 + str2;

export const format = (title: string, param: string | number): string =>
  `${title} ${param}`;

//function returning void
export const printFormat = (title: string, param: string | number) => {
  console.log(format(title, param));
};

//function returning promises
export const fetchData = (url: string) => Promise.resolve(`data form ${url}`);

//rest parameter
function introduce(salutaton: string, ...name: string[]) {
  return `${salutaton} ${names.join(" ")}`;
}

function getName(user: { first: string; second: string }) {
  return `${user.first} ${user.second}`;
}
