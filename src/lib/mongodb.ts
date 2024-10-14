import { MongoClient, Db } from "mongodb";

const uri = process.env.MONGODB_CONNECTION_URI as string;
let client: MongoClient | null = null;
let db: Db | null = null;

export const connectToDatabase = async () => {
  if (db) return db;

  if (!client) {
    if (process.env.NODE_ENV === "development") {
      // In development mode, use a global variable so that the value
      // is preserved across module reloads caused by HMR (Hot Module Replacement).
      let globalWithMongo = global as typeof globalThis & {
        _mongoClient?: MongoClient;
      };

      if (!globalWithMongo._mongoClient) {
        globalWithMongo._mongoClient = new MongoClient(uri);
        console.log("New client dev");
      }
      client = globalWithMongo._mongoClient;
    } else {
      // In production mode, it's best to not use a global variable.
      console.log(uri);
      client = new MongoClient(uri);
      console.log("New client");
    }
    await client.connect();
    console.log("Connected");
  }

  db = client.db(process.env.MONGODB_DB);

  return db;
};
