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
  { name: "santhanam" ,location:"USA"},
  { name: "shravan",location:"Denver"},
  { name: "Naveeth",location:"India"},

];

function getUsersByName(name: string): User[] {
  const filteredUsers: User[] = [];
  for (let userIndex = 0; userIndex < users.length; userIndex++) {
    const user = users[userIndex];
    if (user.name === name) {
      filteredUsers.push(user);
    }
  }
  return filteredUsers;
}
function getUsersBylocation(location: string): User[] {
  const filteredlocation: User[] = [];
  for (let locationIndex = 0; locationIndex < users.length; locationIndex++) {
    const user = users[locationIndex];
    if (user.location === location) {
      filteredlocation.push(user);
    }
  }
  return filteredlocation;
}
export async function GET(request: NextRequest) {
  const userIndex = Number(request.nextUrl.searchParams.get("index"));
  const userName = request.nextUrl.searchParams.get("userName");
  const location = request.nextUrl.searchParams.get("location");
  if (isNaN(userIndex) || users[userIndex] == undefined )
    return Response.json(users);
  else if(location){
    return Response.json(getUsersBylocation(location));
  }
  else if (userName) {
    // true
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
