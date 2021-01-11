import { NextApiRequest, NextApiResponse } from "next";
import Post from "../../../models/Post";

export default async function(req: NextApiRequest, res: NextApiResponse) {
    
    try {

        new Post(JSON.parse(req.body.data)).save((err: any)=> {

            if (err) {
                console.error(err);
                res.status(500).json(err);
                return
            }
                
            res.status(200).send({ success: true });

        });

        
    } catch(err) {
        console.error(err);
        res.status(500).json({ err });
    }

} 