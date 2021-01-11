import { NextApiRequest, NextApiResponse } from "next";
import Post from "../../../models/Post";

export default async function(req: NextApiRequest, res: NextApiResponse) {
    
    try {

        new Post(JSON.parse(req.body.data)).save((err: any)=> {

            if (err)
                return console.error(err);
                
            res.send({ success: true });

        });

        
    } catch(err) {
        console.error(err);
    }

} 