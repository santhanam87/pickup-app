/**
 * Typescript
 * Variable
 * Scope
 * Functions
 * Condition
 * Array
 * Object
 * Looping
 */

/* Typescript */

// var a = "hello";
// a = 123
// console.info(a);

// String | Number | Date | Boolean  | null | undefined (Privitive)
// Array | Object (Derived)
// Let or Const

/** String: string is a primitive data type used to represent textual data. */
const name: string = "santhanam";
let age: number = 123;
age = 20;
/** Boolean */
const isAdult: boolean = true;
console.info(isAdult, age);
/** Date */
const dob: Date = new Date();
console.info(dob);

/** Object */
type Employee = {
  name: string;
  age: number;
  isAdult: boolean;
  dob: Date;
};
const employee: Employee = {
  name,
  age,
  isAdult,
  dob,
};
/** Array */
const employees: Employee[] = [employee];
console.info(employees);

/**Function */
function printHelloWorld(prefix: string, suffix: string) {
  const name = "shravan";
  console.info(name);
  const fullName: string = prefix + suffix;
  return fullName;
}
console.info(name);
// Shravan | Santhanam
printHelloWorld("hello", "world");
console.info(name);

const leftSide = 0;
const rightSide = 0;

function add() {
  // Blocked Scope
  const leftSide = 10;
  const rightSide = 20;
  console.info(leftSide + rightSide);
}

console.info(leftSide, rightSide);
add();
console.info(leftSide, rightSide);

export function trainingInit() {
  console.info("initialization.");
  console.info("adding some thing new");
  console.info("*********");
  // const name = printHelloWorld("hello", "world");
  // console.info("*****", name);
  //   console.info("*********");
  //   printHelloWorld();
}
