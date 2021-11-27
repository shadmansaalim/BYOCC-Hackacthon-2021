import { connectToDatabase } from "@lib/mongodb"

export default async function handler(req, res) {
  // switch the methods
  switch (req.method) {
    case "GET":
      getPrograms(req, res)
      break

    default:
      res.status(404).json({ success: false })
  }
}

async function getPrograms(req, res) {
  try {
    // connect to the database
    let { db } = await connectToDatabase()
    const programsCollection = db.collection("programs")
    const cursor = programsCollection.find({})
    const result = await cursor.toArray()

    res.status(201).json(result)
  } catch (error) {
    // return the error
    res.status(error.status).send("Error getting programs")
  }
}