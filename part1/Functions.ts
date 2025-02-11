// FUNCTIONS

let sayHi = () => {
  console.log("Hi,welcome");
};

//sayHi ="hi"

let funcReturnString = (): string => {
  console.log("hi");
  return "lama dev";
};

let multiple = (num: number): number => {
  return num * 2;
};

let mutiple2 = (num: number): number => {
  return num * 2;
};

let mutiple3 = (num: number): void => {
  // return num*2;
  // Do something but don't return
};

let sum = (num1: number, num2: number,another?:number) => {
  return num1 + num2;
};

sum(2,3)