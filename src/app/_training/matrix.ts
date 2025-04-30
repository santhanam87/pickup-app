// const matrixA: number[][] = [
//   [1, 2, 3],
//   [1, 3, 4],
//   [1, 3, 4],
// ];
// const matrixB: number[][] = [
//   [1, 2, 3],
//   [1, 3, 4],
//   [1, 3, 4],
// ];
// const matrixC: number[][] = [
//   [0, 0, 0],
//   [0, 0, 0],
//   [0, 0, 0],
// ];
// export function matrixAdittion() {
//   for (let matrixIndex = 0; matrixIndex < matrixA.length; matrixIndex++) {
//     for (
//       let matrixIndex2 = 0;
//       matrixIndex2 < matrixA[matrixIndex].length;
//       matrixIndex2++
//     ) {
//       const sum =
//         matrixA[matrixIndex][matrixIndex2] + matrixB[matrixIndex][matrixIndex2];
//       matrixC[matrixIndex][matrixIndex2] = sum;
//     }
//   }
//   console.log(matrixC);
// }
//Mathod 1
//  const matrix1: number[][] = [
//   [1, 2, 3],
//   [1, 3, 4],
//   [1, 3, 4],
// ];
// const matrix2: number[][] = [
//   [1, 2, 3],
//   [1, 3, 4],
//   [1, 3, 4],
// ];
// const matrix3: number[] = [];
// const matrix4: number[] = [];
// const matrix5: number[] = [];
// export function forwordDiaganal() {
//   for (
//     let forwordDiaganalIndex = 0;
//     forwordDiaganalIndex < matrix1.length;
//     forwordDiaganalIndex++
//   ) {
//     const diaganal = matrix1[forwordDiaganalIndex][forwordDiaganalIndex];
//     matrix3[forwordDiaganalIndex] = diaganal;
//   }
//   console.info(matrix3);
// }
// export function reverseDiaganal() {
//   for (
//     let reverseDiaganalIndex = 0;
//     reverseDiaganalIndex < matrix2.length;
//     reverseDiaganalIndex++
//   ) {
//     const reverse = 2 - reverseDiaganalIndex;
//     const diaganal = matrix2[reverseDiaganalIndex][reverse];
//     matrix4[reverseDiaganalIndex] = diaganal;
//   }
//   console.info(matrix4);
// }
// export function addingDiaganal() {
//   for (
//     let addingDiaganalIndex: number = 0;
//     addingDiaganalIndex < matrix2.length;
//     addingDiaganalIndex++
//   ) {
//     matrix5.push(matrix3[addingDiaganalIndex] + matrix4[addingDiaganalIndex]);
//   }
//   console.info(matrix5);
// }

function reverseDiaganal(matrix: number[][]) {
  const Matrix: number[] = [];
  for (
    let reverseDiaganalIndex = 0;
    reverseDiaganalIndex < matrix.length;
    reverseDiaganalIndex++
  ) {
    const reverse = 2 - reverseDiaganalIndex;
    Matrix.push(matrix[reverseDiaganalIndex][reverse]);
  }
  return Matrix;
}
function forwordDiaganal(matrix: number[][]) {
  const Matrix2: number[] = [];
  for (
    let forwordDiaganalIndex = 0;
    forwordDiaganalIndex < matrix.length;
    forwordDiaganalIndex++
  ) {
    Matrix2.push(matrix[forwordDiaganalIndex][forwordDiaganalIndex]);
  }
  return Matrix2;
}
export function addingDiaganal() {
  const forword: number[] = forwordDiaganal([
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
  ]);
  const reverse: number[] = reverseDiaganal([
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
  ]);
  const sumMatrix: number[] = [];
  for (let sumIndex = 0; sumIndex < reverse.length; sumIndex++) {
    sumMatrix.push(forword[sumIndex] + reverse[sumIndex]);
  }
  console.info(sumMatrix);
}
