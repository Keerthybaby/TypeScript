let func = (user: { username: String; age: number; phone?: string }) => [
  console.log(user.username),
];

// TYPE ALIASES

type UserType = {
  username: string;
  age: number;
  phone?: string;
};

let betterFunc = (user: UserType) => {
  console.log(user.username);
};

type myFunc = (a: number, b: string) => void;

let write: myFunc = (num, str) => {
  console.log(num + "times" + str);
};

type UserType2 = {
  username: string;
  age: number;
  phone?: string;
  theme: "dark" | "light";
};

const userWithTheme : UserType2 ={
username:"john",
age:43,
// theme:"pink"
theme:"dark",
}