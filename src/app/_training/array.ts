export function ArrayInit() {
  console.info("Array init");
  const name = "some thing";
  console.info("Leo" + name);
  console.info("'Leo'");
  console.info('"Leo"');
  console.info(`"Leo","${name}",'Leo'`);
  // Array
  const names: string[] = ["sam", "shravan", "leo"];
  console.info(typeof names);
  // Props
  console.info(names.length);
  // Append
  names.push("newName");
  // Remove
  names.pop();
  console.info(names[0]);
  names[0] = "santhanam";
  console.info(names[0]);
  const splicedElement = names.splice(0, 2);
  console.info(splicedElement);
  console.info(names);
  // Insert
  names.splice(5, 0, "santhanam");
  console.info(names);

  const companyEmployees = ["sam", "leo", "shravan", "john", "doe"];
  const checkEmployeeName = "shravan";

  // Init, condition, increment
  // How many times
  // I have variable set to 0
  // I will increment it by 1
  // Once it meets the condtion, it breaks loop;

  for (let i = 0; i < 5; i++) {
    if (companyEmployees[i] === checkEmployeeName) {
      console.info("employee exsist !");
    }
  }

  // Multidimenstional Array
  //const twoDim = [[1, 2, 3],[1, 3, 4],[1, 3, 4],];


  // Array manipulation
  // twoDim[1].push(5);
  // twoDim[1] = [1, 3, 4, 5];
  // twoDim[1].splice(2, 0, 5);

  // Array iteration

  const threeDimentionalData = [
    [
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3],
    ],
    [
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3],
    ],
    [
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3],
    ],
  ];
  for (let i=0;i<threeDimentionalData.length;i++){
    for(let j=0;j<threeDimentionalData[i].length;j++){ 
      for(let k=0;k<threeDimentionalData[i][j].length;k++){
        console.info(threeDimentionalData[i][j][k]);
      }
    }
  }
  for (let i=0;i<threeDimentionalData.length;i++){
    for(let j=0;j<threeDimentionalData[i].length;j++){   
      console.info(threeDimentionalData[i][j].join(" "));
    }
  }

/**
 * Add two martix
 *  const a = [
    [1, 2, 3],
    [1, 3, 4],
    [1, 3, 4],
  ];

  const b = [
    [1, 2, 3],
    [1, 3, 4],
    [1, 3, 4],
  ];

  Solution 
  
  [ [2, 4, 6],
    [2, 6, 8],
    [2, 6, 8],]

 * Matrix Multiplication

    [(1,1) (1,2) (1,3)
    (2,1) (2,2) (2,3)
    (3,1) (3,2) (3,3)]
 * 
 */

const r=[
  [1,3,3],
  [2,3,4],
  [0,2,4],
];
const s=[
  [1,3,3],
  [2,3,4],
  [0,2,4],
];
/*const t:number[][]=[] ;
for(let column=0 ; column<3;column++){
  for(let row=0; row<3;row++){
    t[column][row]+=r[column][row]*s[column][row];
    console.info(t[column][row]);
  }
}*/

const a=[
  [1,2,3],
  [1,3,4],
  [1,3,4]
]
const b =[
  [1,2,3],
  [1,3,4],
  [1,4,4]
]
const bt=[[0,0,0],[0,0,0],[0,0,0]];
for (let column=0;column<3;column++){
  for (let row=0;row<3;row++){
//(0,0),(0,1),(0,2)
//(1,0),(1,1),(1,2)
//(2,0),(2,1),(2,2)
   bt[column][row]=b[row][column];
  }}


let sum:number=0;
for(let row=0;row<3;row++){
  sum=0;
  for(let column=0;column<3;column++){
    sum+=a[row][column]*bt[row][column];
  }
  console.info(sum);
} 
console.info(a,bt);
}