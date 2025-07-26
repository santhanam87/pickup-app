import { NextRequest } from "next/server";
function get1(request: NextRequest) {
  const a = request.nextUrl.searchParams.get("a");
  const b = request.nextUrl.searchParams.get("b");
  const c = request.nextUrl.searchParams.get("c");
  return Number(a) * (Number(b) * Number(c));
}
export function get(request: NextRequest) {
  const A = get1(request);
  return A;
}
export function GET(request: NextRequest) {
  const sum = get(request);
  return Response.json({ sum });
}
