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
    const organisationCollection = db.collection("organisation")
    const userEmail = req.query.email;
    const query1 = { email: userEmail };
    const user = await usersCollection.findOne(query1);
    const userOrganisations = user?.addedOrganisations;
    if(userOrganisations){
      const query2 = { organisationID: { $in: userOrganisations } };
      const organisations = await organisationCollection.find(query2).toArray();

    res.status(200).json(organisations)
    }
    else{
      res.status(200).json(0)
    }
  

  } catch (error) {
    // return the error
    res.send("Could not add user to database")
  }
}
async function updateUserData(req, res) {
  try {
    console.log(req.body)
    // connect to the database
    let { db } = await connectToDatabase()
    const usersCollection = db.collection("users")
    const userEmail = req.query.email;
    const filter = { email: userEmail };
    const options = { upsert: true };
    const updateDoc = {
      $set: {
        addedOrganisations: []
      },
    };
    const result = await usersCollection.updateOne(filter, updateDoc,options);

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
