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
}
