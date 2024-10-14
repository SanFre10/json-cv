import { MongoClient, Db } from "mongodb";

const uri = process.env.MONGODB_CONNECTION_URI as string;
let client: MongoClient | null = null;
let db: Db | null = null;

export const connectToDatabase = async () => {
  if (db) return db;

  if (!client) {
    let globalWithMongo = global as typeof globalThis & {
      _mongoClient?: MongoClient;
    };

    if (!globalWithMongo._mongoClient) {
      globalWithMongo._mongoClient = new MongoClient(uri);
      console.log("New client");
    }
    client = globalWithMongo._mongoClient;

    await client.connect();
    console.log("Connected");
  }

  db = client.db(process.env.MONGODB_DB);
  return db;
};
