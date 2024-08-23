import { MongoClient, Db } from 'mongodb';

const uri = process.env.MONGODB_CONNECTION_URI as string
let client: MongoClient;
let db: Db;

export const connectToDatabase = async () => {
    if (db) return db;

    if (!client) {
        client = new MongoClient(uri);
        await client.connect();
    }

    db = client.db(process.env.MONGODB_DB);

    return db;
};