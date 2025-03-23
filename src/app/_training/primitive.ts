// Primitive data types are the built-in data types provided by all programming languages.

import { randomBytes } from "crypto";
console.info(randomBytes);
//I did this so there will be no error
//____________
// Boolean| String | Date | number | null | undefined
//you can reassign let but not const
export function init() {
  //Boolean: Represents truth values, true or false.
  const IsAdult: boolean = true;
  console.info(IsAdult); //will print true
  //String: string is a primitive data type used to represent textual data.
  const Name: string = "santhanam";
  console.info(Name); //Will print santhanam
  //Date:In TypeScript, the Date type represents a specific moment in time.
  const DOB: Date = new Date();
  console.info(DOB); // will print a random date(DOB means date of birth)
  //Number:In TypeScript, the number type represents numeric values.
  const age: number = 123;
  console.info(age); //will print 123lklklk
  //Null:Representing an intentional absence of value.
  const degrees: null = null;
  console.info(degrees); //will print null
  //Undefined:Represents a variable that has been declared but has not been assigned a value.
  const password = undefined;
  console.info(password); //will print undefined
}
