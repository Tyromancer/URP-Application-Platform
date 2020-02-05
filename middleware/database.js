import { MongoClient } from 'mongodb';
import nextConnect from 'next-connect';


// create a client for connecting to mongodb
const client = new MongoClient('<CONNECTION_STRING_FOR_MONGODB>', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// connect to database "UAP"
async function database(req, res, next) {
    if (!client.isConnected()) await client.connect();
    req.dbClient = client;
    req.db = client.db('UAP');
    return next();
}

const middleware = nextConnect();
middleware.use(database);

export default middleware;
