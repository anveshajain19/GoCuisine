import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect("TODO URL").then(() => console.log("DB connected"));
};
