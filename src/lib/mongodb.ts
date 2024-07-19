import { MongoClient, type MongoClientOptions, type Collection } from 'mongodb'

const uri = process.env.MONGODB_CONNECTION_URI as string
const options: MongoClientOptions = {}

export const collections: { cv?: Collection } = {}
export const client = new MongoClient(uri, options)

export const connectToDatabase = async () =>{
    await client.connect()
    const db = client.db('database')
    collections.cv = db.collection('cv')
    return client
}