import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const GET = async () => {
  const db = await connectDB();
  const servicesCollection = db.collection("services");
  try {
    const services = await servicesCollection.find().toArray();
    return NextResponse.json({ services });
  } catch (error) {
    return NextResponse.json({message: "Fail to fetch data"}, {status: 303})
    console.log(error);
  }
};
