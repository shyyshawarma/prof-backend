import mongoose from "mongoose";
import {DB_NAME} from "./constants.js";
import connectdb from "./db/index.js";

console.log(process.env.MONGODB_URI)
connectdb()







// import mongoose from "mongoose";
// import {DB_NAME} from "./constants"
// const app = express()
// (async ()=>{
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error",(error)=>{
//             console.log("fault",error)
//             throw error
//         })
//         app.listen(process.env.PORT,()=>{
//             `APP LISTENING ON PORT ${process.env.PORT}`
//         })
//     }
//     catch(error){
//         console.log("FAULT", error)
//         throw error;

//     }

// })()

