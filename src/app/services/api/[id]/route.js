import { connectDB } from "@/lib/connectDB"
import { ObjectId } from "mongodb";

export const GET = async(request, {params})=>{
    const db = await connectDB()
    const servicesCollection = db.collection('services');
    try {
        const service = await servicesCollection.findOne({_id: new ObjectId(params.id)})
        return Response.json({service})
    } catch (error) {
        console.log(error);
    }
}