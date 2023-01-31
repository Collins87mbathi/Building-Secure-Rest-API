const express = require('express');
const app = express();
const UserRoute = require("./routers/user");
const PostRoute = require("./routers/post");
const CONNECTDB = require("./config/config");
const PORT  =  5000 ;
require("dotenv").config();



//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Database Connection 
CONNECTDB(process.env.MONGO_DB_URL);

//Routes
app.use("/api/user",UserRoute);
app.use("/api/post",PostRoute);



//listen to the port 
app.listen(PORT, ()=> {
    console.log(`listening to port ${PORT}`);
})
