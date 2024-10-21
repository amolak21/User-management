import express from "express";
import userRoutes from "./routes/userRoutes";
import mongoose from "mongoose";
import { configDotenv } from "dotenv";

configDotenv();
const app = express();
app.use(express.json());

app.use("/users", userRoutes);

mongoose
  .connect(process.env.DATABASE_URL || "")
  .then(() =>
    app.listen(3000, () => {
      console.log("Your app is running on port 3000");
    })
  )
  .catch((err) => console.log(err));
