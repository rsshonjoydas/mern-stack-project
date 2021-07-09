// ? external imports
const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

// ? internal imports
const authRouter = require("./routers/auth");


const app = express();
dotenv.config();
const PORT =  process.env.PORT || 5000;

// ? request parser
app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use(cors())

// TODO: mongodb database connection with mongoose
const uri = `${process.env.MONGO_CONNECTION_STRING}/${process.env.DB_NAME}?retryWrites=true&w=majority`;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('database connection successful!'))
.catch(err => console.log(err.message))



// ! routing setup
app.get('/', (req, res) => {
  res.send("hello RS Shonjoy")
})

app.get('/contact', (req, res) => {
  res.cookie("Test", "contact")
  res.send("hello Contact cookie")
})

app.use("/", authRouter);


app.listen(PORT, () => {
  console.log(`app listing to port ${process.env.PORT}`);
})