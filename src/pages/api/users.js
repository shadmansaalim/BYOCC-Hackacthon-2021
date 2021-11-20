const { connectToDatabase } = require('../../lib/mogodb');
const ObjectId = require('mongodb').ObjectId;


export default async function handler(req, res) {
    // switch the methods
    switch (req.method) {

        case 'POST': {
            return addUser(req, res);
        }

        case 'PUT': {
            return updateUser(req, res);
        }

    }
}

async function addUser(req, res) {
    try {
        console.log(req.body);
        // connect to the database
        let { db } = await connectToDatabase();
        const usersCollection = db.collection("users");
        const user = req.body;
        console.log(user);
        const result = await usersCollection.insertOne(user);
        return res.json(result);

    }

    catch (error) {
        // return the error
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}
async function updateUser(req, res) {
    try {
        console.log(req.body);
        // connect to the database
        let { db } = await connectToDatabase();
        const usersCollection = db.collection("users");
        const user = req.body;
        const filter = { email: user.email };
        const options = { upsert: true };
        const updateDoc = {
            $set: user
        };
        const result = await usersCollection.updateOne(filter, updateDoc, options);
        res.json(result);
    }

    catch (error) {
        // return the error
        return res.json({
            message: new Error(error).message,
            success: false,
        });
    }
}


