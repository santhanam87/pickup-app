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
 * How you can I do this for multiple users.
 */
let  balance=10000;
export function ATMChallange()
 {
  function ATM1(SelectType:"credit"|"debit",amount:number){
  if (SelectType=="debit"){
    if (balance>=amount){
      balance-=amount;
      console.info("Amount Withdrawn");
      return `Remaining Amount:${balance}`;
    }
    else{
      return "You have insufficient balance";
    }}
  else if(SelectType=="credit") {
    balance+=amount;
    console.info("Amount Credited");
    return `Remaining Amount:${balance}`;
  }
  else {
    return "Invalid Account type"
  }
}
console.info(ATM1("debit",100));
console.info(ATM1("credit",100));
console.info(ATM1("debit",100));

console.info("---------------------------\n");

//ATMChallenge for multiple users 
interface accounts{
  userID:string;
  balance:number;
}
const users: Record<string, accounts>={
  user1: {userID:"Leo",balance:3000},
  user2: {userID:"Jeevan",balance:7000},
  user3: {userID:"Sanjay",balance:2000}
};
 
  function ATM2(userID:string,SelectType:"credit"|"debit",amount:number){
    const user = users[userID];
    if(!user){
      console.info(`user is not found`);
      return;
  }
  if (SelectType=="debit"){
    if (user.balance>=amount){
      user.balance-=amount;
      console.info("Amount Withdrawn");
      return `Remaining Amount:${user.balance}`;
    }
    else{
      return "You have insufficient balance";
    }}
  else if(SelectType=="credit") {
    user.balance+=amount;
    console.info("Amount Credited");
    return `Total Amount:${user.balance}`;
  }
    else {
      return "Invalid Account type"
  }
}
console.info(ATM2("user1","credit",1000));
console.info(ATM2("Sanjay","credit",2000));
console.info(ATM2("user3","debit",3000));
console.info(ATM2("user2","debit",4000));
 }
