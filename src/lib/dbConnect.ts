import mongoose from "mongoose";

//Unlike other backend frameworks, NextJS doesn't keep connected to the DB all the time. Instead, it uses something called Edge Runtime, meaning, it will only connect to the DB when a request is being made. This is why we need to check each and every request to see if the DB is connected.
type ConnectionObject = {
  isConnected?: number;
};

const connection: ConnectionObject = {};

async function dbConnect(): Promise<void> {
  if (connection.isConnected) {
    console.log("Already connected to the Database: ", connection);
    return;
  }
  try {
    const db = await mongoose.connect(process.env.MONGODB_URI! || "");
    connection.isConnected = db?.connections[0]?.readyState;
    console.log("Connected to the Database: ", connection);
  } catch (error: any) {
    console.log("Error connecting to the Database: ", error);
    process.exit(1);
  }
}

export default dbConnect;
