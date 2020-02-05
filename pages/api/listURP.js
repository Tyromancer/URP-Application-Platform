import nextConnect from 'next-connect';
import dbConnect from '../../middleware/database';

const handler = nextConnect();
handler.use(dbConnect);

handler.get(async (req, res) => {

    // tested on db which had structure UAP.urp, need to change when we figure out the database structure
    //                   document name
    //                        |
    //                        v
    await req.db.collection('urp').find({}).toArray( (err, result) => {
        if (err) {
            console.log(err);
            throw(err);
        }
        
        res.json(result);
    });
});

export default handler;
