import { app } from "./app"
import dbConnect = require("./db/dbConnect");

require('dotenv').config()

//Database Connection
dbConnect.dbConnect()

//Create Server
app.listen(process.env.PORT,()=>{
  console.log(`Server Started at PORT ${process.env.PORT}`);  
})