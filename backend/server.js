const dotenv = require('dotenv')
const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors');
const app = express();

mongoose.set('strictQuery', true);
dotenv.config({ path: './config.env' });
const PORT = process.env.PORT;

require('./db/conn.js')

app.use(cors())
app.use(express.json())

const userRouter = require('./routes/users');
const exercisesRouter = require('./routes/exercises');
app.use('/users', userRouter);
app.use('/exercises', exercisesRouter);



app.get('/', (req, res) => {
    res.send("Welcome to Server!");
})

app.listen(PORT, () =>{
    console.log(`server is running at port ${3000}`);
})

