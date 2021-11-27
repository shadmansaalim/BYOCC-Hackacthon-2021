import { connectToDatabase } from "@lib/mongodb"
const ObjectId = require("mongodb").ObjectId

export default async function handler(req, res) {
  // switch the methods
  switch (req.method) {
    case "PUT":
      updateReviews(req, res)
      break

    default:
      res.status(404).json({ success: false })
  }
}


async function updateReviews(req, res) {
  try {
    // connect to the database
    let { db } = await connectToDatabase()
    const organisationCollection = db.collection("organisation")
    const id = req.query.id
    const review = req.body;
    console.log(review);
    const filter = { organisationID: id }
    const organisation = await organisationCollection.findOne(filter)
    const updateDoc = {
      $set: {
        reviews: [...organisation.reviews,review]
      },
    }
    const result = await organisationCollection.updateOne(filter, updateDoc)
    res.json(result)
  } catch (error) {
    // return the error
    res.send("Could not add user to database")
  }
}