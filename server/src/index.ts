import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { database } from "./config/database";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Resume Builder API is running");
});

app.get("/database-test", async (req: Request, res: Response) => {
  try {
    const ping = await database.admin().ping();
    res.send(ping)
  } catch (error) {
    console.log(error);
    res.send("Database connection failed");
  }
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});