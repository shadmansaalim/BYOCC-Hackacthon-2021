import { connectToDatabase } from "@lib/mongodb"

export default async function handler (req, res) {
  // switch the methods
  switch (req.method) {
    case 'GET': {
      return getOrganisations(req, res)
    }
  }
}

async function getOrganisations(req, res) {
  try {
    // connect to database
    let { db } = await connectToDatabase();
    // fetch the organisations
    const organisations = await db
      .collection('organisations')
      .find({})
      .toArray()
    // return the organisations
    return res.json(organisations);
  } catch (error) {
    // return the error
    return res.json({
        message: new Error(error).message,
        success: false,
    });
  }
}
