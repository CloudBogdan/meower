import mongoose from "mongoose";

export async function connect() {

    console.log("Connected");

    mongoose.connect("mongodb+srv://bogdanoff:123RF4Ru43568@cluster0.badug.mongodb.net/main?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

}