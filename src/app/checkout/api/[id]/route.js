import { connectDB } from "@/lib/connectDB"


export const POST = async(request)=>{
    const booking = request.json()
    const db = await connectDB();
    try {
        const bookingCollection = await db.collection('bookings')
        const newBooking = bookingCollection.insertOne(booking)
        return Response.json({message: "booking successful"}, {status: 200})
    } catch (error) {
        return Response.json({message: "Something went wrong"}, {status: 400})
    }
}