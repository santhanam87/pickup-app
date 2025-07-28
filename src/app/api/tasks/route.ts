import dbConnect from "@app/mongoose-connection";
import { NextRequest } from "next/server";
import Tasks from "@app/model/task.model";

// CRUD
export async function PUT(request: NextRequest) {
  try {
    const tasksPayload = await request.json();
    const tasks = await Tasks.insertOne(tasksPayload);
    return Response.json(tasks);
  } catch (error) {
    return Response.json(error, { status: 500 });
  }
}
// url -> payload -> callback (fistinput)

export async function POST(request: NextRequest) {
  try {
    await dbConnect();
    const { _id, ...tasksPayload } = await request.json();
    if (!_id) {
      throw new Error("id is missing!");
    }
    const tasksInfo = await Tasks.updateOne({ _id }, tasksPayload);
    return Response.json(tasksInfo);
  } catch (e) {
    return Response.json(e, { status: 500 });
  }
}

export async function GET() {
  try {
    await dbConnect();
    const taskss = await Tasks.find({ email: "shravan@in.com" });
    return Response.json(taskss);
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
    const tasksDeleteResponse = await Tasks.deleteOne({ _id });
    return Response.json(tasksDeleteResponse);
  } catch (error) {
    console.info(error);
    return Response.json(error, { status: 500 });
  }
}
