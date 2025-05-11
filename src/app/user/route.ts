import { NextRequest } from "next/server";

type User = {
  name: string;
  location?: string;
};

// GET = Read
// PUT = Update
// POST = Create
// Delete = Delete
const users: User[] = [
  { name: "santhanam" },
  { name: "shravan" },
  { name: "santhanam" },
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
  // userIndex 1
  // userName "santhanam"
  // false false
  if (isNaN(userIndex) || users[userIndex] == undefined)
    return Response.json(users);
  else if (userName) {
    // true
    return Response.json(getUsersByName(userName));
  } else return Response.json(users[userIndex]);
}

// Sync Async

// export async function POST(request: Request) {
//   const body = await request.json();
//   users.push(body);
//   return Response.json(users);
// }
