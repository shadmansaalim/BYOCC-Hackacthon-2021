import { connectToDatabase } from "@lib/mongodb"


export default async function handler(req, res) {
  // switch the methods
  switch (req.method) {
    case "GET": {
      return getOrganisations(req, res)
    }
  }
}

async function getOrganisations(req, res) {
  try {
    // connect to the database
    let { db } = await connectToDatabase()
    const organisationCollection = db.collection("organisation")
    const cursor = organisationCollection.find({})
    const result = await cursor.toArray()
    res.status(201).json(result)
  } catch (error) {
    // return the error
    res.sendStatus(error.status).send("Error getting programs")
  }
}

// const organisation = [
//   {
//     name: "Starbucks",
//     organisationID: 1,
//     img: "https://i.ibb.co/2W4ZWgX/starbucks.jpg",
//     avgRating: 0,
//     reviews: [{
//       displayName: "Saalim Shadman", photoURL: null, rating: 4, text: "Great initiative by the cafe towards sustainability"}
//     ],
//     programs: [
//       {
//         name: "Buy 5 coffees, get muffin on 6th",
//         numStamps: 5,
//         freeItem: 6
//       }
//     ]
//   },
//   {
//     name: "Gloria Jean's",
//     organisationID: 2,
//     img: "https://i.ibb.co/jLb2gNC/gloria.jpg",
//     avgRating: 0,
//     reviews: [{
//       displayName: "Saalim Shadman", photoURL: null, rating: 5, text: "Gloria Jeans Woaaaahhh"}
//     ],
//     programs: [
//       {
//         name: "Buy 9 coffees and get, the 10th one free",
//         numStamps: 9,
//         freeItem: 10
//       }
//     ]
   
//   }
// ]
