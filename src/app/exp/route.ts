import { NextRequest } from "next/server";
function et1(request: NextRequest) {
  const a = request.nextUrl.searchParams.get("a");
  const b = request.nextUrl.searchParams.get("b");
  const c = request.nextUrl.searchParams.get("c");
  return Number(a) * (Number(b) * Number(c));
}
export function et(request: NextRequest) {
  const A = et1(request);
  return A;
}
// export function GET() {
//   for (let i = 0; i < 10000; i++) {
//     console.info(i);
//   }
//   console.log("time");
//
// }

export function GET() {
  console.info("I love You !!");
  return Response.json("I love You !!");
}
setTimeout(GET, 1000);
