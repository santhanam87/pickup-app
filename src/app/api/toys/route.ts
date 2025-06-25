import { NextRequest } from "next/server";

const toysInventory: string[] = ["gorgu", "choper", "darthMaul"];

function allToy() {
  return new Promise<string[]>((resolve) => {
    resolve(toysInventory);
  });
}

function addToy(toyName: string) {
  return new Promise<string[]>((resolve) => {
    toysInventory.push(toyName);
    resolve(toysInventory);
  });
}

function replaceToy(oldToyName: string, newToyName: string) {
  return new Promise<string[]>((resolve, rejects) => {
    for (let i = 0; i < toysInventory.length; i++) {
      if (toysInventory[i] == oldToyName) {
        toysInventory[i] = newToyName;
        resolve(toysInventory);
        i = toysInventory.length;
      }
    }
    rejects(toysInventory);
  });
}

function deleteToy(startDeleat: number, endDeleat: number) {
  return new Promise<string[]>((resolve) => {
    toysInventory.splice(startDeleat, endDeleat);
    resolve(toysInventory);
  });
}

function connectDB() {
  return new Promise<true>((resolve) => {
    resolve(true);
    // rejects(false);
  });
}

const toyDB: {
  deleteToy: (startDelete: number, endDelete: number) => Promise<string[]>;
  allToy: () => Promise<string[]>;
  connectDB: () => Promise<boolean>;
  addToy: (toyName: string) => Promise<string[]>;
  replaceToy: (oldToyName: string, newToyName: string) => Promise<string[]>;
} = {
  allToy,
  addToy,
  replaceToy,
  connectDB,
  deleteToy,
};
//adding toy
export async function PUT(request: NextRequest) {
  try {
    await toyDB.connectDB();
    const requestBody = await request.json();
    const toys = await toyDB.addToy(requestBody.toyName);
    return Response.json({ toys });
  } catch (error) {
    return Response.json({ error });
  }
}
//replasing toy
export async function POST(request: NextRequest) {
  try {
    await toyDB.connectDB();
    const requestBody = await request.json();
    const toys = await toyDB.replaceToy(
      requestBody.oldToyName,
      requestBody.newToyName
    );
    console.info(requestBody);
    return Response.json({ toys });
  } catch (error) {
    return Response.json({ error });
  }
}
//showing toys
export async function GET() {
  try {
    await toyDB.connectDB();
    const toys = await toyDB.allToy();
    return Response.json({ toys });
  } catch (error) {
    return Response.json({ error });
  }
}
//deleting toys
export async function DELETE(request: NextRequest) {
  try {
    await toyDB.connectDB();
    const requestBody = await request.json();
    const toys = await toyDB.deleteToy(
      requestBody.startDelete,
      requestBody.endDelete
    );
    return Response.json({ toys });
  } catch (error) {
    return Response.json({ error });
  }
}
