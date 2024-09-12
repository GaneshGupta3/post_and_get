import mongoose from "mongoose";

const credentialSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        }
    },
    {timestamps : true}
)

export const Credential = mongoose.model("Login",credentialSchema);