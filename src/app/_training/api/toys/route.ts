import { NextRequest } from "next/server";

const toysInventory: string[] = ["gorgu", "choper", "darthMaul"];

function getToys() {
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

function connectDB() {
  return new Promise<true>((resolve) => {
    resolve(true);
    // rejects(false);
  });
}

const toyDB: {
  getToys: () => Promise<string[]>;
  connectDB: () => Promise<boolean>;
  addToy: (toyName: string) => Promise<string[]>;
} = {
  getToys,
  connectDB,
  addToy,
};

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

export async function GET() {
  try {
    await toyDB.connectDB();
    const toys = await toyDB.getToys();
    return Response.json({ toys });
  } catch (error) {
    return Response.json({ error });
  }
}

// Create a shop to add, edit, delete and list the products
