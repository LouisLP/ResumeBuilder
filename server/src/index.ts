import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { database } from "./config/database";
import resumeRoutes from "./routes/resumeRoutes";
import cors from "cors"; // Import CORS

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
mongoose
	.connect(process.env.MONGO_DB_URI || "mongodb://localhost:27017/jobreel")
	.then(() => console.log("Connected to MongoDB"))
	.catch((err) => console.error("Could not connect to MongoDB", err));

app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // for parsing application/json

app.get("/", (req: Request, res: Response) => {
	res.send("Resume Builder API is running");
});

app.get("/database-test", async (req: Request, res: Response) => {
	try {
		const ping = await database.admin().ping();
		res.send(ping);
	} catch (error) {
		console.log(error);
		res.send("Database connection failed");
	}
});

// Use resume routes
app.use("/api", resumeRoutes);

app.listen(port, () => {
	console.log(`[server]: Server is running at http://localhost:${port}`);
});
