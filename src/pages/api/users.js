import { connectToDatabase } from "@lib/mongodb"

export default async function handler(req, res) {
  // switch the methods
  switch (req.method) {
    case "GET":
      await getUserOrganisations(req, res)
      break

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

async function getUserOrganisations(req, res) {
  try {
    console.log(req.body)
    // connect to the database
    let { db } = await connectToDatabase()
    const usersCollection = db.collection("users")
    const organisationCollection = db.collection("organisation")
    const userEmail = req.query.email;
    const query1 = { email: userEmail };
    const user = await usersCollection.findOne(query1);
    const userOrganisations = user.addedOrganisations;
    const query2 = { organisationID: { $in: userOrganisations } };
    const organisations = await organisationCollection.find(query2).toArray();
    res.status(200).json(organisations)
  } catch (error) {
    // return the error
    res.send("Could not add user to database")
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
    res.send("Could not add user to database")
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
    res.send("Error updating user")
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

// USERS
// - _id
// - email
// - displayName
// - img
// - addedPrograms:[{
// - uniqueCode
// - maxStamps
// - numOfStamps
