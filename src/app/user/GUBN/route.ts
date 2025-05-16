// GET = Read
// PUT = Update
// POST = Create
// Delete = Delete
import { NextRequest } from "next/server";

type User = {
  name: string;
  location?: string;
};
const users: User[] = [
  { name: "shravan", location: "USA" },
  { name: "navith", location: "India" },
];

function getUsersByName(name: string): User[] {
  // name = "santhanam"
  const filteredUsers: User[] = [];
  for (let userIndex = 0; userIndex < users.length; userIndex++) {
    // 0 1
    const user = users[userIndex];
    // {name:"santhanam"} {name:"shravan"}
    if (user.name === name) {
      // {name:santhanam}
      filteredUsers.push(user);
    }
  }
  return filteredUsers;
}
export async function GET(request: NextRequest) {
  const userIndex = Number(request.nextUrl.searchParams.get("index"));
  const userName = request.nextUrl.searchParams.get("userName");
  if (isNaN(userIndex) || users[userIndex] == undefined)
    return Response.json(users);
  else if (userName) {
    return Response.json(getUsersByName(userName));
  } else return Response.json(users[userIndex]);
}

// URL: user By the name, user by the location, user by the name and location, []

// Sync Async

// export async function POST(request: Request) {
//   const body = await request.json();
//   users.push(body);
//   return Response.json(users);
// }
