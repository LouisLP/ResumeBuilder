import { MongoClient }  from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.MONGO_DB_URI || ""
export const client = new MongoClient(uri);
export const database = client.db('jobreel');
