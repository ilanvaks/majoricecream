import { MongoClient } from "mongodb"
import { MONGOURI } from "./credentials.js"

// const MONGOURI = process.env.MONGOURI
export const client = new MongoClient(MONGOURI) // use the URI path


// create instance of mongo
const database = client.db("Major-Ice-Cream");

//connect to colleciton - or create if none
export const productsCollection = database.collection("products");
