export function Mutation() {
  const employeeName = "santhanam";
  let userName = employeeName; //New Instance
  userName = "elumalai";
  console.info(employeeName, userName);
  // Santhanam Elumalai

  const names = ["santhanam", "elumalai"];
  const employees = names; //Same Instance
  employees.push("navith");
  console.info(employees, names);
  // Mutation;
  // s, e, n: s, e

  type TEmployee = {
    name: string;
    age: number;
    locations: string[];
  };

  const employee = {
    name: "santhanam",
    age: 38,
    locations: ["usa"],
  };

  const locations = ["usa"];

  function updateEmployeeName(employee: TEmployee) {
    employee.name = "santhanam elumalai";
  }
  console.info(JSON.stringify(employee));
  const newEmployee = JSON.parse(JSON.stringify(employee));
  updateEmployeeName(newEmployee);

  console.info(employee, newEmployee);

  function updateLocations(locations: string[]) {
    locations.push("india");
  }

  // Read more about slice, splice
  const newLocations = locations.slice();

  updateLocations(newLocations);

  console.info(locations, newLocations);
}
