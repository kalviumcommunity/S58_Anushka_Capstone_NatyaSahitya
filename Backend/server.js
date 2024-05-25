const express=require('express');
const app = express();
const port = 8080 || 8008;
const dotenv=require('dotenv')
dotenv.config()
const { connection }=require('./Config/db')
const { userModel } = require('./Model/user')
const cors=require('cors');

app.use(cors())

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Hello World!")
})

app.get('/ping',(req,res) => {
    res.json({ message: 'pong' })
})

app.post('/SignUP', async(req,res)=>{
    const {username, password, Email,phoneno} = req.body;

    if (!username || !password || !Email || !phoneno) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    if (password.length < 5 || !password.includes('@')) {
        return res.status(400).json({ message: 'Password must be at least 5 characters long and include "@"' });
    }
    if (!Email.includes('@')) {
        return res.status(400).json({ message: 'Email must be valid' });
    }
    if (phoneno.length !== 10) {
        return res.status(400).json({ message: 'Phone number must be 10 digits long' });
    }

    try{
        const newUser = new userModel({username, password, Email, phoneno}); 
        await newUser.save();
        res.status(201).json({ message: req.body, user: newUser });
    } catch(error){
        res.status(500).json({ message: 'Error registering user', error: error.message });
    }
})

app.listen(port,async() => { 
  try {
    console.log(connection)
    await connection;
    console.log("Connected to DB successfully");
    
  } catch (error) {
     console.log("Error connecting to DB");
     console.log(error);
  }

  console.log(`Server is listening on port ${port}`);


})
