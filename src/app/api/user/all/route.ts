import dbConnect from "@app/mongoose-connection";
import User from "@app/model/user.model";

export async function GET() {
  try {
    await dbConnect();
    const users = await User.find();
    return Response.json(users);
  } catch (e) {
    return Response.json(e, { status: 500 });
  }
}
