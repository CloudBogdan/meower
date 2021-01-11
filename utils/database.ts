import mongoose from "mongoose";
import config from "./config";

export async function connect() {

    console.log("Connected");

    await mongoose.connect(config.mongo_url, {
        useNewUrlParser: true
    });

}