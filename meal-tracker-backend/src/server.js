import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import mealRoutes from "./routes/mealRoutes.js";

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/meals", mealRoutes);

app.get("/", (req, res) => {
  res.send("API rodando 🔥");
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});


