import { NextApiRequest, NextApiResponse } from "next";
import Post from "../../../models/Post";
import { connect } from "../../../utils/database";

connect();

export default async function(req: NextApiRequest, res: NextApiResponse) {
    
    try {
    
        const posts = await Post.find({});
        
        if (posts)
            res.status(200).json(posts);
        else
            res.status(500);
            
    } catch(err) {
        console.error(err);
        res.status(500).json({ err });
    }

}