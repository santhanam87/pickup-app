const matrixA: number[][] = [
  [1, 2, 3],
  [1, 3, 4],
  [1, 3, 4],
];
const matrixB: number[][] = [
  [1, 2, 3],
  [1, 3, 4],
  [1, 3, 4],
];
const matrixC: number[][] = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];
const matrixD: number[][] = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];
export function matrixAdittion() {
  for (let matrixIndex = 0; matrixIndex < matrixA.length; matrixIndex++) {
    for (
      let matrixIndex2 = 0;
      matrixIndex2 < matrixA[matrixIndex].length;
      matrixIndex2++
    ) {
      const sum =
        matrixA[matrixIndex][matrixIndex2] + matrixB[matrixIndex][matrixIndex2];
      matrixC[matrixIndex][matrixIndex2] = sum;
    }
  }
  console.log(matrixC);
}
export function matrixMultiplcation() {
  for (let matrixIndex = 0; matrixIndex < matrixA.length; matrixIndex++) {
    for (
      let matrixIndex2 = 0;
      matrixIndex2 < matrixA[matrixIndex].length;
      matrixIndex2++
    ) {
      for (
        let prodectindex = 0;
        prodectindex < matrixA[matrixIndex].length;
        prodectindex++
      ) {
        matrixD[matrixIndex2][matrixIndex] =
          matrixA[matrixIndex][matrixIndex2] *
          matrixB[matrixIndex2][matrixIndex];
      }
    }
  }
  console.info(matrixD);
}
