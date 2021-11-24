import { connectToDatabase } from "@lib/mongodb"

export default async function handler(req, res) {
  // switch the methods
  switch (req.method) {
    case "GET":
      await getUserData(req, res)
      break

    case "PUT":
      await updateUserData(req, res)
      break

    default:
      res.status(404).json({ success: false })
  }
}

async function getUserData(req, res) {
  try {
    console.log(req.body)
    // connect to the database
    let { db } = await connectToDatabase()
    const usersCollection = db.collection("users")
    const programsCollection = db.collection("programs")
    const userEmail = req.query.email
    const query1 = { email: userEmail }
    const user = await usersCollection.findOne(query1)
    const userPrograms = user?.addedPrograms
    if (userPrograms) {
      const query2 = { organisationID: { $in: userPrograms } }
      const programs = await programsCollection.find(query2).toArray()
      res.status(200).json(programs)
    } else {
      res.status(200).json(0)
    }
  } catch (error) {
    // return the error
    res.status(error.status || 409).send("Could not fetch user")
  }
}
async function updateUserData(req, res) {
  try {
    // connect to the database
    let { db } = await connectToDatabase()
    const usersCollection = db.collection("users")
    const userEmail = req.query.email
    const organisationID = req.body.organisationID
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

// const users = [
//   {
//     email: "test123@gmail.com",
//     displayName: "Test Account",
//     addedOrganisations: ["o1", "o2"],
//     numOfStamps: 0
//   },
//   {
//     email: "test2@gmail.com",
//     displayName: "Test Account",
//     addedOrganisations: ["o1"],
//     numOfStamps: 0
//   }

// ]
