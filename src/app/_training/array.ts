export function ArrayInit() {
  console.info("Array init");
  const name = "some thing";
  console.info("Leo" + name);
  console.info("'Leo'");
  console.info('"Leo"');
  console.info(`"Leo","${name}",'Leo'`);
  // Array
  const names: string[] = ["sam", "shravan", "leo"];
  console.info(typeof names);
  // Props
  console.info(names.length);
  // Append
  names.push("newName");
  // Remove
  names.pop();
  console.info(names[0]);
  names[0] = "santhanam";
  console.info(names[0]);
  const splicedElement = names.splice(0, 2);
  console.info(splicedElement);
  console.info(names);
  // Insert
  names.splice(5, 0, "santhanam");
  console.info(names);

  const companyEmployees = ["sam", "leo", "shravan", "john", "doe"];
  const checkEmployeeName = "shravan";

  // Init, condition, increment
  // How many times
  // I have variable set to 0
  // I will increment it by 1
  // Once it meets the condtion, it breaks loop;

  for (let i = 0; i < 5; i++) {
    if (companyEmployees[i] === checkEmployeeName) {
      console.info("employee exsist !");
    }
  }

  // Multidimenstional Array
  const twoDim = [
    [1, 2, 3],
    [1, 3, 4],
    [1, 3, 4],
  ];

  // Array manipulation
  // twoDim[1].push(5);
  // twoDim[1] = [1, 3, 4, 5];
  // twoDim[1].splice(2, 0, 5);

  // Array iteration
  for (let i = 0; i < twoDim.length; i++) {
    for (let j = 0; j < twoDim[i].length; j++) {
      console.info(twoDim[i][j]);
    }
  }

  const threedDimentionalData = [
    [
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3],
    ],
    [
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3],
    ],
    [
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3],
    ],
  ];
}

/**
 * ATM - Phase 2
 * User - userName, accountBalance
 * Users will be list of user
 * Create a method that allows user to credit or debit the money based on the username
 * Scope, Array, Object, Method, Condition, Looping
 * Create a data structure
 * Clear the requirement
 * Pseudo code
 * Create a global scope
 * Create a method that accepts usename, type and amount
 * Get the user by name
 * If type is credit update the amount return the new balance
 * If type is debit update the amount and return the new balance and debited amount.
 * Stick with sudo code.
 */
