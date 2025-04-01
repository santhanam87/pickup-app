export function objectsAndArray() {
  const gameName: string = "BGMI";
  const ranking: number = 1;
  const forKids: boolean = false;
  const launchedOn: Date = new Date(3 - 11 - 2018);

  /*Objects means an instance that contains a set of key-value pairs */
  const Game = {
    gameName,
    ranking,
    forKids,
    launchedOn,
  };

  console.info(Game);

  const Game2 = {
    gameName,
    launchedOn,
  };

  /**Array means storing multiple values within a single variable
   * also we can say storing objects in a single variable
   */
  const game = [Game, Game2];
  console.info(game);
}
