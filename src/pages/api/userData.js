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
    const programID = req?.query?.programID
    const userEmail = req.query.email
    const query1 = { email: userEmail }
    const user = await usersCollection.findOne(query1)
    const userPrograms = user?.addedPrograms
    if (userPrograms.length) {
      if(programID){
        const program = userPrograms.filter(program => program.programID === programID);
        res.status(200).json(program);
      }
      else{
        let ids = [];
      userPrograms.forEach(program => {
      ids.push(program.programID)
      });
      const query2 = { programID: { $in: ids } }
      const programs = await programsCollection.find(query2).toArray()
      res.status(200).json(programs)
      }
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
    const programID = req?.query?.programID
    const userEmail = req.query.email
    const filter = { email: userEmail }
    const user = await usersCollection.findOne(filter)
    const userPrograms = user?.addedPrograms
    let result;
    if(userPrograms){
      if(programID){
        const program = userPrograms.find(program => program.programID === programID);
        const stamp = req.body;
        program.currentStampCount = stamp;
        const programs = userPrograms.filter(program => program.programID !== programID);
      
        const updateDoc = {
            $set: {
               addedPrograms: [...programs,program],
            },
        }
        result = await usersCollection.updateOne(filter, updateDoc)
        console.log(result);
      }
      else{
        const program = req.body
        const updateDoc = {
           $set: {
             addedPrograms: [...userPrograms,program],
           },
        }
        result = await usersCollection.updateOne(filter, updateDoc)
      }
      
    }
    else{
      const updateDoc = {
        $set: {
          addedPrograms: [program],
        },
      }
      result = await usersCollection.updateOne(filter, updateDoc)
    }
    res.json(result)
  } catch (error) {
    // return the error
    res.send("Could not add user to database")
  }
}