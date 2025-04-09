// goto shop if they have onion by 2 oninon
// else if there is tomoto then by tomoto.
// else return back.
export function shop() {
  const onion = 3;
  const isOnionIsGood = true;
  const tomoto = 3;
  if (onion > 0 || tomoto > 0) {
    console.info("enter a shope");
    if (onion > 0 && isOnionIsGood) {
      return "I got oninons";
    } else if (tomoto > 0) {
      return "I got tomoto";
    }
  } else {
    return "Home";
  }
}

/**
 * ATM machine
 * Phase 1:
 * input type ( "debit" | "credit" ), amount
 * if it is debit
 * if user has a balance print debit and remaining amont.
 * if user has no balance print you dont have suffient money.
 * if it is credit
 * return your actual balance based on the available balance.
 * Phase 2:
 * See or think about how you can do this for multiple users.
 */
//
// const account = 100;
// export function ATMChallange() {
//   function ATM(action: string, amount: number) {
//     if (action == "debit") {
//       return `you deposited $${amount}", your new balace is $${
//         account + amount
//       }.`;
//     }
//     if (action == "credit" && account > amount) {
//       return `you credited $${amount},your new balence is $${
//         account - amount
//       }.`;
//     } else {
//       return `you don't have suffient money.You wish to take out $${amount} but you only have $${account}.`;
//     }
//   }
//   console.info(ATM("credit", 111));
//   console.info("your transation is complete. Have a good day.");
// }
/**Phase 2
 * multi user
 * credit is -
 * debit is +
 */
const users = [
  { name: "Shravan", accountBalence: 100 },
  { name: "Leo", accountBalence: 500 },
  { name: "Santhanam", accountBalence: 2000 },
];
export function ATMChallange2() {
  function ATM(user: string, action: string, amount: number) {
    for (let userIndex = 0; userIndex < users.length; userIndex++) {
      if (users[userIndex].name === user) {
        if (action === "credit" && users[userIndex].accountBalence >= amount) {
          console.info(
            `${user} wishis to credit ${amount}$.${user}'s new balence is ${
              users[userIndex].accountBalence - amount
            }$  `
          );
        } else if (users[userIndex].accountBalence < amount)
          console.info(`${user} doesn't have suffitiont money`);
        if (action === "debit") {
          console.info(
            `${user} wishis to credit ${amount}$.${user}'s new balence is ${
              users[userIndex].accountBalence + amount
            }`
          );
        }
      }
    }
  }
  ATM("Santhanam", "debit", 100);
}
