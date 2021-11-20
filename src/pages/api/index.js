export default async function handler(req, res) {
  // switch the methods
  switch (req.method) {
      case 'GET': {
          res.send('BYOC Hackathon Project')
      }
  }
}