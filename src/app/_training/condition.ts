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
const acount = 100;
export function ATMChallange() {
  function ATM(action: string, amount: number) {
    if (action == "debit") {
      return acount + amount;
    }
    if (action == "credit" && acount > amount) {
      return acount - amount;
    } else {
      return "you don't have suffient money.";
    }
  }

  console.info(ATM("debit", 111));
}
