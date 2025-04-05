// goto shop if they have onion by 2 oninon
// else if there is tomoto then by tomoto.
// else return back.

import { Console } from "console";
import { Black_And_White_Picture, Coming_Soon } from "next/font/google";

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

export function ATMChallange()
 {
  function ATM1(AccountType:"credit"|"debit",amount:number){
  if (AccountType=="debit"){
    let balance:number=1000;
    if (balance>=amount){
      const remaining=balance-amount;
      console.info("amount withdrawn");
      return `remainingAmount:${remaining}`;
    }
    else{
      return "You have insufficient balance";
    }}
  else if(AccountType=="credit") {
    let balance=10000;
    const remaining=balance-amount;
    return `remainingAmount:${remaining}`;
  }
  else {
    return "Invalid Account type"
  }
}
console.info("debit",100);
}

//ATMChallenge for multiple users 
interface accounts{
  userID:string;
  balance:number;
}
const users: Record<string, accounts>={
  user1: {userID:"user1",balance:5000},
  user2: {userID:"user2",balance:10000},
  user3: {userID:"user3",balance:200}
};
export function ATMChallange2()
 {
  function ATM2(userID:string,AccountType:"credit"|"debit",amount:number){
    const user = users[userID];
    if(!user){
      console.info(`user is not found`);
      return;
  }
    let remaining =user.balance;
    if (AccountType=="debit"){
      if (user.balance>=amount){
        remaining=user.balance-amount;
        console.info("amount withdrawn");
        return `remainingAmount:${remaining}`;
    }
      else{
        return "You have insufficient balance";
    }
  }
  else if(AccountType=="credit") {
    return `remainingAmount:${remaining}`;
  }
  else {
    return "Invalid Account type"
  }
}
console.info(ATM2("user1","debit",100));
 }