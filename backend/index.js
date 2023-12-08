const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRouter = require('./Routes/authRoute')
dotenv.config();
const app = express();

mongoose.connect(process.env.MONGO_CONNECT).then(() => {
    console.log(`Connected to MongoDB`);
});

app.use(express.json())


app.use('/api/auth',authRouter)

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
