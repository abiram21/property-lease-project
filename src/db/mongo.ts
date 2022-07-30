import { MongoClient, Db } from "mongodb";
import dbConfig from "../config/db";

let dbName = dbConfig.mongo.db;
const url = dbConfig.mongo.url;
let db: Db;

const client = new MongoClient(dbConfig.mongo.url);

const connect = async () => {
    const con = await client.connect();
    db = con.db(dbName);
    console.log("Connected to MongoDB");
}

export {db, connect};