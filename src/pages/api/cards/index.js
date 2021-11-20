import { connectToDatabase } from "@lib/mongodb"

export default async function handler(req, res) {
  // switch the methods
  switch (req.method) {
    case "GET":
      await getCards(req, res)
      break

    case "PUT":
      await updateUserData(req, res)
      break

    default:
      res.status(404).json({ success: false })
  }
}

async function getCards(req, res) {
  try {
    console.log(req.query)
    // connect to the database
    let { db } = await connectToDatabase()
    const usersCollection = db.collection("users")
    const userEmail = req.query.email
    const query = { email: userEmail }
    const user = await usersCollection.findOne(query)

    console.log(userEmail)
    res.status(200).json(user)
  } catch (error) {
    // return the error
    res.status(error.status).send("Could not add user to database")
  }
}
async function updateUserData(req, res) {
  try {
    console.log(req.body)
    // connect to the database
    let { db } = await connectToDatabase()
    const usersCollection = db.collection("users")
  } catch (error) {
    // return the error
    res.send("Could not add user to database")
  }
}
