import { MongoClient, type MongoClientOptions, type Collection } from 'mongodb'

const uri = process.env.MONGODB_CONNECTION_URI as string
const options: MongoClientOptions = {}

export const collections: { cv?: Collection } = {}

export const connectToDatabase = async () =>{
    const client: MongoClient = new MongoClient(uri, options)
    await client.connect()
    const db = client.db('database')
    collections.cv = db.collection('cv')

    console.log('Connected to database')
    return client
}