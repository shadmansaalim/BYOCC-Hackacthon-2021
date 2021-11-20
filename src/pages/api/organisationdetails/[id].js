import { connectToDatabase } from "@lib/mongodb"
const ObjectId = require("mongodb").ObjectId

export default async function handler(req, res) {
  // switch the methods
  switch (req.method) {
    case "GET":
      return getOrganisation(req, res)
      break
  }
}

async function getOrganisation(req, res) {
  try {
    // connect to the database
    let { db } = await connectToDatabase()
    const organisationCollection = db.collection("organisation")
    const id = req.query.id
    const query = { _id: ObjectId(id) }
    const cursor = organisationCollection.find(query)
    const result = await cursor.toArray()
    res.status(201).json(result)

  } catch (error) {
    // return the error
    res.json("Error getting programs")
  }
}
