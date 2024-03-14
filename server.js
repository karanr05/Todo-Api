require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const taskroutes = require('./Routes/taskRoute'); 
const subTaskRoute = require('./Routes/subTaskRoute')
const auth = require('./auth'); 
const userRoute = require('./Routes/userRoute')

const mongooseString = process.env.DATABASE_URL;
const app = express();

app.use(express.json());

app.use('/api', auth); // Use the auth middleware
app.use('/api', taskroutes); // Use the task routes
app.use('/api', subTaskRoute); 
app.use('/api', userRoute)

mongoose.connect(mongooseString);

const database = mongoose.connection;

database.on('error',(err) => console.log(err))
database.on('connected',() => console.log('Database connected ....'));

app.get('/', (req, res) => { 
    res.json({Message: "Hello User"});
});

app.listen(3000, () => {
    console.log("Server started in port: 3000");
});
