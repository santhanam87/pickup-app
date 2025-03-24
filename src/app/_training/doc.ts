/**
 * Derieved datatypes
 * Objects
 * Array
 * -------
 * Functions
 * Scopes
 */
const gamename:string = "BGMI";
const ranking :number = 1;
const forkids:boolean= false;
const launchedOn:Date= new Date(3-11-2018);

/*Objects means an instance that contains a set of key-value pairs */
const Game = {
    gamename,
    ranking,
    forkids,
    launchedOn,
};
console.info(Game);
const Game2 = {
    gamename,
    launchedOn,
};

/**Array means storing multiple values within a single variable 
 * also we can say storing objects in a single variable
 */
const game = [Game, Game2];


/**Scopes determines which part of the program can access it,
 * Global can be accessed anywhere 
 * Blocked can be accessed within the function only
 */

const anime : string = "Naruto";//Global scope
console.info(anime);


/*Functions shows the way to organize and execute logic*/
function favorite(){
    const anime : string = "One piece";//Blocked scope
    console.info(anime);
}


favorite();//blocked scope value within function
console.info(anime);//call of global scope because it's not within the function