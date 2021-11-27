import { connectToDatabase } from "@lib/mongodb"
const ObjectId = require("mongodb").ObjectId

export default async function handler(req, res) {
  // switch the methods
  switch (req.method) {
    case "GET":
      getProgramDetails(req, res)
      break
    

    default:
      res.status(404).json({ success: false })
  }
}

async function getProgramDetails(req, res) {
  try {
    // connect to the database
    let { db } = await connectToDatabase()
    const programsCollection = db.collection("programs")
    const id = req.query.id
    const query = { _id: ObjectId(id) }
    const cursor = programsCollection.find(query)
    const result = await cursor.toArray()
    res.status(201).json(result)
  } catch (error) {
    // return the error
    res.json("Error getting programs")
  }
}

