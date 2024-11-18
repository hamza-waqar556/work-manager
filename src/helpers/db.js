import mongoose from "mongoose";
import { User } from "@/models/user";

export const connectDb = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_DB_URL, {
      dbName: "work_manager",
    });

    console.log("DB Connected");
    // console.log(connection);

    const uuser = new User({
      name: "John",
      email: "john2@example.com",
      password: "password123",
    });

    await uuser.save();
    console.log("User created successfully!");
  } catch (error) {
    console.log("Error connecting to the database");
    console.error(error);
  }
};
