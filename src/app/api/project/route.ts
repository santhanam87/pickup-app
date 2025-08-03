import dbConnect from "@app/mongoose-connection";
import { NextRequest } from "next/server";
import projects from "@app/model/project.model";

// CRUD
export async function PUT(request: NextRequest) {
  try {
    const ProjectsPayload = await request.json();
    const Projects = await projects.insertOne(ProjectsPayload);
    return Response.json(Projects);
  } catch (error) {
    return Response.json(error, { status: 500 });
  }
}
// url -> payload -> callback (fistinput)

export async function POST(request: NextRequest) {
  try {
    await dbConnect();
    const { _id, ...ProjectsPayload } = await request.json();
    if (!_id) {
      throw new Error("id is missing!");
    }
    const updateProjectsInfo = await projects.updateOne(
      { _id },
      ProjectsPayload
    );
    return Response.json(updateProjectsInfo);
  } catch (e) {
    return Response.json(e, { status: 500 });
  }
}

export async function GET() {
  try {
    await dbConnect();
    const Projectss = await projects.find();
    return Response.json(Projectss);
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
    const ProjectsDeleteResponse = await projects.deleteOne({ _id });
    return Response.json(ProjectsDeleteResponse);
  } catch (error) {
    console.info(error);
    return Response.json(error, { status: 500 });
  }
}
