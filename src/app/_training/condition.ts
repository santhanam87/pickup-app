/**
 * ATM machine
 * Phase 1:
 * input type ( "debit" | "credit" ), amount
 * if it is debit
 * if user has a balance print debit and remaining amont.
 * if user has no balance print you dont have suffient money.
 * if it is credit
 * return your actual balance based on the available balance.
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
interface accounts{
  userID:string;
  balance:number;
}
const users: accounts[]= [
   {userID: "Leo", balance: 3000 },
   {userID:"Jeevan",balance:7000},
   {userID:"Sanjay",balance:2000}
];
function findUserByName(userID: string) {
  for (let i= 0; i<users.length; i++) {
      if (users[i].userID === userID) {
          return users[i];
      }
  }
  return null;
}

  function ATM2(userID:string,SelectType:"credit"|"debit",amount:number){
    const user=findUserByName(userID);
    if(!user){
      console.info(`${userID} is not found`);
      return ;
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
console.info(ATM2("Leo","credit",100));
console.info(ATM2("Jeevan","credit",2000));
console.info(ATM2("user3","debit",3000));
console.info(ATM2("user2","debit",4000));
 }
