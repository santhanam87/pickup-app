import Page from "@app/model/page.model";
import dbConnect from "@app/mongoose-connection";

export async function GET() {
  try {
    await dbConnect();
    const page = await Page.find();
    return Response.json(page);
  } catch (e) {
    return Response.json(e, { status: 500 });
  }
}
