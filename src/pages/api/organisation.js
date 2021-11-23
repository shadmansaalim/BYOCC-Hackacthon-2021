import { connectToDatabase } from "@lib/mongodb"

export default async function handler(req, res) {
  // switch the methods
  switch (req.method) {
    case "GET":
      getOrganisations(req, res)
      break

    default:
      res.status(404).json({ success: false })
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
    res.status(error.status).send("Error getting programs")
  }
}

const organisations = [
  {
    name: "Starbucks",
    organisationID: "o1",
    avgRating: 0,
    reviews: [{
      displayName: "Saalim Shadman", photoURL: null, rating: 4, text: "Great initiative by the cafe towards sustainability"}
    ],
  }
]



const programs = [
  {
    name: "Starbucks",
    programName: "Starbucks Free Coffee Program",
    organisationID: "o1",
    img: "https://images.unsplash.com/photo-1542729779-11d8fe8e25f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
    description: "Starbucks is offering a free coffee program to all the coffee lovers out there. Who doesn't love free coffees and when it comes to Starbucks it's insane. We are giving away free coffees you just have to simply buy 5 coffees and guess what you will get the 6th one for free.",
    numStamps: 5,
    freeItem: 6
  },
  {
    name: "Starbucks",
    programName: "Starbucks Free Coffee Program",
    organisationID: "o1",
    img: "https://images.unsplash.com/photo-1542729779-11d8fe8e25f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
    description: "Starbucks is offering a free coffee program to all the coffee lovers out there. Who doesn't love free coffees and when it comes to Starbucks it's insane. We are giving away free coffees you just have to simply buy 5 coffees and guess what you will get the 6th one for free.",
    numStamps: 5,
    freeItem: 6
  },
  {
    name: "Starbucks",
    programName: "Starbucks Free Coffee Program",
    organisationID: "o1",
    img: "https://images.unsplash.com/photo-1542729779-11d8fe8e25f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
    description: "Starbucks is offering a free coffee program to all the coffee lovers out there. Who doesn't love free coffees and when it comes to Starbucks it's insane. We are giving away free coffees you just have to simply buy 5 coffees and guess what you will get the 6th one for free.",
    numStamps: 5,
    freeItem: 6
  },
  {
    name: "Starbucks",
    programName: "Starbucks Free Coffee Program",
    organisationID: "o1",
    img: "https://images.unsplash.com/photo-1542729779-11d8fe8e25f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
    description: "Starbucks is offering a free coffee program to all the coffee lovers out there. Who doesn't love free coffees and when it comes to Starbucks it's insane. We are giving away free coffees you just have to simply buy 5 coffees and guess what you will get the 6th one for free.",
    numStamps: 5,
    freeItem: 6
  },
]
