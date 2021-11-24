import { connectToDatabase } from "@lib/mongodb"
const ObjectId = require("mongodb").ObjectId

export default async function handler(req, res) {
  // switch the methods
  switch (req.method) {
    case "GET":
      getReviews(req, res)
      break
    case "PUT":
      updateReviews(req, res)
      break

    default:
      res.status(404).json({ success: false })
  }
}

async function getReviews(req, res) {
  try {
    // connect to the database
    let { db } = await connectToDatabase()
    const organisationCollection = db.collection("organisation")
    const id = req.query.organisationID
    const query = { organisationID : id }
    const options = {
      projection: { _id: 0, reviews: 1 }
  }
    const cursor = organisationCollection.find(query,options)
    const result = await cursor.toArray()
    res.status(201).json(result)
  } catch (error) {
    // return the error
    res.json("Error getting programs")
  }
}

async function updateReviews(req, res) {
  try {
    // connect to the database
    let { db } = await connectToDatabase()
    const organisationCollection = db.collection("organisation")
    const id = req.query.id
    const filter = { email: userEmail }
    const user = await usersCollection.findOne(filter)
    console.log(user)
    const addedOrganisations = user.addedOrganisations
    const options = { upsert: true }
    const updateDoc = {
      $set: {
        addedOrganisations: [...addedOrganisations, organisationID],
        programName: req.body.programName,
        uniqueCode: req.body.uniqueCode,
        maxStamp: req.body.maxStamp,
        numOfStamps: req.body.numOfStamps,
      },
    }
    const result = await usersCollection.updateOne(filter, updateDoc, options)
    console.log(result)
    res.json(result)
  } catch (error) {
    // return the error
    res.send("Could not add user to database")
  }
}