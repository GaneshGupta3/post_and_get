import mongoose from "mongoose";

function connectMongoDB() {
    mongoose.connect("mongodb://127.0.0.1:27017/Login_Signup_Tutorial")
        .then(() => {
            console.log("mongodb connected");
        })
        .catch((err) => {
            console.log("failed to connect" + err);
        })
}

export default connectMongoDB;