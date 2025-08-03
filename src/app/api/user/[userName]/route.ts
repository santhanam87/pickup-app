import dbConnect from "@app/mongoose-connection";
import User from "@app/model/user.model";
import { NextRequest } from "next/server";

type Params = Promise<{ userName: string }>;

export async function GET(
  request: NextRequest,
  { params }: { params: Params }
) {
  try {
    const queryParameter = request.nextUrl.searchParams;
    console.info("query param", queryParameter.get("userName"));
    const { userName } = await params;
    console.info("path param", userName);

    await dbConnect();
    const users = await User.find({ userName });
    return Response.json(users);
  } catch (e) {
    return Response.json(e, { status: 500 });
  }
}
