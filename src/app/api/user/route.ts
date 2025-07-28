import dbConnect from "@app/mongoose-connection";
import { NextRequest } from "next/server";
import User from "@app/model/user.model";

// CRUD
export async function PUT(request: NextRequest) {
  try {
    const userPayload = await request.json();
    const user = await User.insertone(userPayload);
    return Response.json(user);
  } catch (error) {
    return Response.json(error, { status: 500 });
  }
}
// url -> payload -> callback (fistinput)

export async function POST(request: NextRequest) {
  try {
    await dbConnect();
    const { _id, ...userPayload } = await request.json();
    if (!_id) {
      throw new Error("id is missing!");
    }
    const updateUserInfo = await User.updateone({ _id }, userPayload);
    return Response.json(updateUserInfo);
  } catch (e) {
    return Response.json(e, { status: 500 });
  }
}

export async function GET() {
  try {
    await dbConnect();
    const users = await User.find({ email: "shravan@in.com" });
    return Response.json(users);
  } catch (e) {
    return Response.json(e, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { _id } = await request.json();
    if (!_id) {
      throw new Error("ID is missing");
    }
    await dbConnect();
    const userDeleteResponse = await User.deleteOne({ _id });
    return Response.json(userDeleteResponse);
  } catch (error) {
    console.info(error);
    return Response.json(error, { status: 500 });
  }
}
