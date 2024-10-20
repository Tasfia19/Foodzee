import mongoose from "mongoose";

export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://tasfiachy19:2326039@cluster0.gdtmp.mongodb.net/Foodie').then(() => {
        console.log("Connected to database!");
      })
      .catch((err) => {
        console.log(`Some error occured while connecing to database: ${err}`);
      });
  };