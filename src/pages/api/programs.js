const { connectToDatabase } = require('../../lib/mongodb');
const ObjectId = require('mongodb').ObjectId;


export default async function handler(req, res) {
    // switch the methods
    switch (req.method) {

        case 'GET': {
            return getPrograms(req, res);
        }

    }
}

async function getPrograms(req, res) {
    try {
        // connect to the database
        let { db } = await connectToDatabase();
        const programsCollection = db.collection("programs");
        const cursor = programsCollection.find({});
        const result = await cursor.toArray();
        res.status(201).json(result)
  
    }

    catch (error) {
         // return the error
    res.sendStatus(error.status).send("Error getting programs")
    }
}


// const programs = [
//   {
//     name: "Starbucks",
//     programID: 1,
//     img: "https://i.ibb.co/2W4ZWgX/starbucks.jpg",
//     rating: 0,
//     buyCount: 5,
//     buyItem: "coffees",
//     freeCount: 6,
//     freeItem: "muffin"
//   },
//   {
//     name: "Gloria Jean's",
//     programID: 2,
//     img: "https://i.ibb.co/jLb2gNC/gloria.jpg",
//     rating: 0,
//     buyCount: 9,
//     buyItem: "coffees",
//     freeCount: 10,
//     freeItem: "coffee"
//   }
// ]

