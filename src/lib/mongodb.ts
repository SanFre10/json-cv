import { MongoClient, type MongoClientOptions } from 'mongodb'

const uri = process.env.MONGODB_CONNECTION_URI as string
const options: MongoClientOptions = {}

export const mongoClient = new MongoClient(uri, options).connect()