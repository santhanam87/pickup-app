/**
 * Typescript
 * Variable
 * Scope
 * Functions
 * Import & Export.
 * Object Destrucutring.
 * Condition
 * Array
 * Object
 * Looping
 */

import { ArrayInit } from "./array";
import { ATMChallange } from "./condition";
import { functionsScope } from "./functions-scope";
import { Mutation } from "./mutation";
import { objectsAndArray } from "./object-arrays";
//import { primitiveDataTypes } from "./primitive";

export function trainingInit() {
  functionsScope();
  objectsAndArray();
  //primitiveDataTypes();
  ATMChallange();
  ArrayInit();
  Mutation();
}
