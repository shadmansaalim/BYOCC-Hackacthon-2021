const { connectToDatabase } = require('../../lib/mongodb');
const ObjectId = require('mongodb').ObjectId;


export default async function handler(req, res) {
    // switch the methods
    switch (req.method) {

        case 'GET': {
            return getUserPrograms(req, res);
        }

    }
}

async function getUserPrograms(req, res) {
    try {
        // connect to the database
        let { db } = await connectToDatabase();
        const addedProgramsCollection = db.collection("added-programs");
        const userEmail = req.query.email;
        const query1 = { email: userEmail };
        const cursor = addedProgramsCollection.find(query1);
        const addedProgramsDetail = await cursor.toArray();

         // Checking if user has any purchased course
         if (addedProgramsDetail.length) {
            const keys = Object.keys(orderDetails[0].order)
            const query2 = { courseID: { $in: keys } };
            const courses = await coursesCollection.find(query2).toArray();
            return res.json(courses)
        }
        else {
            return res.json(0);
        }

    }

    catch (error) {
        // return the error
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}



