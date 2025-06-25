import { NextRequest } from "next/server";

const Stationary: string[] = ["Pen", "Pencil", "Sharper","Scale"];

function allThings() {
  return new Promise<string[]>((resolve) => {
    resolve(Stationary);
  });
}

function addThings(ThingName: string) {
  return new Promise<string[]>((resolve) => {
    Stationary.push(ThingName);
    resolve(Stationary);
  });
}

function replaceThing(oldThingName: string, newName: string) {
  return new Promise<string[]>((resolve, rejects) => {
    for (let i = 0; i < Stationary.length; i++) {
      if (Stationary[i] == oldThingName) {
        Stationary[i] = newName;
        resolve(Stationary);
        i = Stationary.length;
      }
    }
    rejects(Stationary);
  });
}
function deleteThings(Delete1: number,Delete2: number) {
  return new Promise<string[]>((resolve) => {
    Stationary.splice(Delete1,Delete2);
    resolve(Stationary);
  });
}

function connectDB() {
  return new Promise<true>((resolve) => {
    resolve(true);
    // rejects(false);
  });
}

const StationaryDB: {
  deleteThings: (Delete1: number,Delete2: number) => Promise<string[]>;
  replaceThing:(oldThingName: string, newName: string) => Promise<string[]>;
  allThings: () => Promise<string[]>;
  connectDB: () => Promise<boolean>;
  addThings: (ThingName: string) => Promise<string[]>;
} = {
  allThings,
  connectDB,
  addThings,
  deleteThings,
  replaceThing,
};

export async function PUT(request: NextRequest) {
  try {
    await StationaryDB.connectDB();
    const requestBody = await request.json();
    const Things = await StationaryDB.addThings(requestBody.ThingName);
    return Response.json({ Things });
  } catch (error) {
    return Response.json({ error });
  }
}

export async function POST(request: NextRequest) {
  try {
    await StationaryDB.connectDB();
    const requestBody = await request.json();
    const Things = await StationaryDB.replaceThing(
      requestBody.oldThingName,
      requestBody.newName,
    );
    return Response.json({ Things });
  } catch (error) {
    return Response.json({ error });
  }
}
export async function GET() {
  try {
    await StationaryDB.connectDB();
    const Things = await StationaryDB.allThings();
    return Response.json({ Things });
  } catch (error) {
    return Response.json({ error });
  }
}

export async function DELETE(request:NextRequest) {
  try {
    await StationaryDB.connectDB();
    const requestBody = await request.json();
    const Things = await StationaryDB.deleteThings(
      requestBody.Delete1,
      requestBody.Delete2,
    );
    return Response.json({ Things });
  } catch (error) {
    return Response.json({ error });
  }
}

