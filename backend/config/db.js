import mongoose from "mongoose";

export const connctDB = async () => {
    await mongoose.connect('mongodb+srv://ajinkyagavali4:ottjcXkL2RZuixlT@cluster0.sslz3.mongodb.net/foodappdb').then(() =>{console.log("DB connected")})
}