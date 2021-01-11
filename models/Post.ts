import { model, models, Schema } from "mongoose";

const PostShema = new Schema({
    text: String,
    date: String,
    author: String,
    avatar: String
});

export default models.Post || model("Post", PostShema);