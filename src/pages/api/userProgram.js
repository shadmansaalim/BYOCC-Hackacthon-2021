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
        const addedProgramsCollection = db.collection("addedPrograms");
        const programsCollection = db.collection("programs");
        const userEmail = req.query.email;
        const query1 = { email: userEmail };
        const cursor = addedProgramsCollection.find(query1);
        const addedProgramsDetail = await cursor.toArray();

         // Checking if user has any purchased course
         if (addedProgramsDetail.length) {
            const ids = addedProgramsDetail[0].programs;
            console.log(ids);
            const query2 = { programID: { $in: ids } };
            const programs = await programsCollection.find(query2).toArray();
            return res.json(programs)
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



