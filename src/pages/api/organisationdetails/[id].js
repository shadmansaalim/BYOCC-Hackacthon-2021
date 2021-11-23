import { connectToDatabase } from "@lib/mongodb"
const ObjectId = require("mongodb").ObjectId

export default async function handler(req, res) {
  // switch the methods
  switch (req.method) {
    case "GET":
      getOrganisation(req, res)
      break
    case "PUT":
      updateOrganisation(req, res)
      break

    default:
      res.status(404).json({ success: false })
  }
}

async function getOrganisation(req, res) {
  try {
    // connect to the database
    let { db } = await connectToDatabase()
    const organisationCollection = db.collection("organisation")
    const organisationID = req.query.organisationID
    const query = { _id: ObjectId(id) }
    const cursor = organisationCollection.find(query)
    const result = await cursor.toArray()
    res.status(201).json(result)
  } catch (error) {
    // return the error
    res.json("Error getting programs")
  }
}

async function updateOrganisation(req, res) {
  try {
    // connect to the database
    let { db } = await connectToDatabase()
    const organisationCollection = db.collection("organisation")
    const id = req.query.id
    const review = req.body
    const filter = { _id: ObjectId(id) }
    const organisation = await organisationCollection.findOne(filter)
    const options = { upsert: true }
    const updateDoc = {
      $set: {
        reviews: [...organisation.reviews, review],
      },
    }
    const result = await organisationCollection.updateOne(
      filter,
      updateDoc,
      options
    )
    res.json(result)
  } catch (error) {
    // return the error
    res.sendStatus(error.status).send("Error getting programs")
  }
}
