/**Scopes determines which part of the program can access it,
 * Global can be accessed anywhere
 * Blocked can be accessed within the function only
 */

export const a = "hello";
export const b = "world";

export function functionsScope() {
  const anime: string = "Naruto"; //Global scope
  console.info(anime);

  /*Functions shows the way to organize and execute logic*/
  function favorite() {
    const anime: string = "One piece"; //Blocked scope
    console.info(anime);
  }

  favorite(); //blocked scope value within function
  console.info(anime); //call of global scope because it's not within the function
}
