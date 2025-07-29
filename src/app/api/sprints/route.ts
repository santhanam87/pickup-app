import dbConnect from "@app/mongoose-connection";
import { NextRequest } from "next/server";
import Sprints from "@app/model/sprint.model";

// CRUD
export async function PUT(request: NextRequest) {
  try {
    const sprintsPayload = await request.json();
    const sprints = await Sprints.insertOne(sprintsPayload);
    return Response.json(sprints);
  } catch (error) {
    return Response.json(error, { status: 500 });
  }
}
// url -> payload -> callback (fistinput)

export async function POST(request: NextRequest) {
  try {
    await dbConnect();
    const { _id, ...sprintsPayload } = await request.json();
    if (!_id) {
      throw new Error("id is missing!");
    }
    const updatesprintsInfo = await Sprints.updateOne({ _id }, sprintsPayload);
    return Response.json(updatesprintsInfo);
  } catch (e) {
    return Response.json(e, { status: 500 });
  }
}

export async function GET() {
  try {
    await dbConnect();
    const sprintss = await Sprints.find();
    return Response.json(sprintss);
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
    const sprintsDeleteResponse = await Sprints.deleteOne({ _id });
    return Response.json(sprintsDeleteResponse);
  } catch (error) {
    console.info(error);
    return Response.json(error, { status: 500 });
  }
}
