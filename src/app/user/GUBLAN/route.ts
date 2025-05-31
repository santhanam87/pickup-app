import { NextRequest } from "next/server";

type User = {
  name: string;
  location?: string;
};
const users: User[] = [
  { name: "shravan", location: "USA" },
  { name: "navith", location: "India" },
];

function getUsersByLocation(
  location: string | null,
  name: string | null
): User[] {
  // name = "santhanam"
  const filteredUsers: User[] = [];
  for (let userIndex = 0; userIndex < users.length; userIndex++) {
    if (users[userIndex].location && users[userIndex].name) {
      const user = users[userIndex];
      // {name:"santhanam"} {name:"shravan"}
      if (user.location === location && user.name === name) {
        // {name:santhanam}
        filteredUsers.push(user);
      }
    }
  }
  return filteredUsers;
}
export async function GET(request: NextRequest) {
  const userIndex = Number(request.nextUrl.searchParams.get("index"));
  const userlocation = request.nextUrl.searchParams.get("userlocation");
  const userName = request.nextUrl.searchParams.get("userName");
  if (
    isNaN(userIndex) ||
    users[userIndex] == undefined ||
    userlocation == undefined ||
    userName == undefined
  ) {
    return Response.json(users);
  } else if (userlocation && userName) {
    return Response.json(getUsersByLocation(userlocation, userName));
  } else return Response.json(users[userIndex]);
}
