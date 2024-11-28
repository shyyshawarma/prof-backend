import mongoose from "mongoose";
import {DB_NAME} from "../constants.js"

const connectdb=async ()=>{
    try{    
        const a= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log("connected",a.connection.host);
    }
    catch(error){
        console.log("faUlt",error);
        process.exit(1)
    }
}

export default connectdb
// ${process.env.MONGODB_URI}