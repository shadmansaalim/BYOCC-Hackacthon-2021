import { connectToDatabase } from "@lib/mogodb"

export default async function handler(req, res) {
  // switch the methods
  switch (req.method) {
    case "POST":
      await addUser(req, res)
      break

    case "PUT":
      await updateUser(req, res)
      break

    default:
      res.status(404).json({ success: false })
  }
}

async function addUser(req, res) {
  try {
    console.log(req.body)
    // connect to the database
    let { db } = await connectToDatabase()
    const usersCollection = db.collection("users")
    const user = req.body
    console.log(user)

    const result = await usersCollection.insertOne(user)

    res.status(200).json(result)
  } catch (error) {
    // return the error
    res.sendStatus(error.status || 404).send("No user found")
  }
}
async function updateUser(req, res) {
  try {
    console.log(req.body)
    // connect to the database
    let { db } = await connectToDatabase()
    const usersCollection = db.collection("users")
    const user = req.body
    const filter = { email: user.email }
    const options = { upsert: true }
    const updateDoc = {
      $set: user,
    }
    const result = await usersCollection.updateOne(filter, updateDoc, options)

    res.status(201).json(result)
  } catch (error) {
    // return the error
    res.sendStatus(error.status).send("Error updating user")
  }
}
