import mongoose from "mongoose";

export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://sayaksingha:Banti_2002@cluster0.hhntw.mongodb.net/Tomato').then(()=>console.log("DB connected"))
}