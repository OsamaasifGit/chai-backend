// import mongoose from "mongoose";
// import { DB_Name } from "./constants";

// import express from "express"
// const app = express()

// (async ( ) => {
//     try {

//        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_Name}`)
//        app.on("error" (error) => {
//         console.log("ERRR: ", error);
//         throw error
//        })
//        app.listen(process.env.PORT, () => {
//         console.log(`App is listening on port ${process.env.PORT}`);
//        })
        
//     } catch (error) {
//         console.error("ERROR: ", error)
//         throw err
        
//     }
// })()
//require('dotenv').config({path: './env'})
import dotenv from "dotenv"

import connectDB from "./db/index.js";
import { app } from "./app.js";
dotenv.config({
    path: './env'
})

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
})
/*
import express from "express";

const app = express();

(async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_Name}`);
    console.log("Connected to MongoDB");

    // Handle app-level errors
    app.on("error", (error) => {
      console.log("APP ERROR: ", error);
      throw error;
    });

    // Start the server
    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port ${process.env.PORT}`);
    });

  } catch (error) {
    console.error("MONGO CONNECTION ERROR: ", error);
    throw error;
  }
})();
*/
