import { MongoClient } from 'mongodb';

const URI = "mongodb+srv://matheus07hs:3011Mhs%21@cluster0.xzd6a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db('Spotify')
//const songCollection = await db.collection('songs').find({}).toArray();


//console.log(songCollection)