import mongoose from "mongoose";
import {DB_NAME} from "./constants.js";
import connectdb from "./db/index.js";
import { app } from "./app.js";

console.log(process.env.MONGODB_URI)
connectdb().then(()=>{
    app.listen(process.env.PORT || 3501 ,()=>{
        console.log("app listening on port", process.env.PORT)
    })
}).catch((e)=>{
    console.log("connection failed with db",e)
})







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

