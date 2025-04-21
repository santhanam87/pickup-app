const matrixA: number[][] = [
  [1, 2, 3],
  [1, 3, 4],
  [1, 3, 4],
];
const matrixB: number[][] = [
  [1, 2, 3], // 2 - 0 = 2
  [1, 3, 4], // 2 - 1 = 1
  [1, 3, 4], // 2 - 2 = 0
];
const matrixC: number[][] = [
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
        matrixA[matrixIndex][matrixIndex2] + matrixB[matrixIndex][matrixIndex];
      matrixC[matrixIndex][matrixIndex2] = sum;
    }
  }

  // for (let i = 0; i < 3; i++) {
  //   for (let j = 0; j < 3; j++) {
  //     const total = matrixA[i][j] + matrixB[i][j];
  //     matrixC[i][j] = total;
  //   }
  // }
  /**
   * const matrixB: number[][] = [
  [1, 2, 3], // 2 - 0(i) = 2
  [1, 3, 4], // 2 - 1(i) = 1
  [1, 3, 4], // 2 - 2(i) = 0
  ];
  */
  //   const matrix = [];
  //   for (let i = 0; i < 3; i++) {
  //     const dIndex = matrixA[i].length - i - 1;
  //     matrix.push(matrixA[i][dIndex] + matrixA[i][i]);
  //   }
  //   console.info(matrix);
  console.info(matrixC);
}
