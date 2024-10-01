const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const { connection } = require('./config/db');
const { userModel } = require('./model/user');
const app = express();
const port = process.env.PORT || 8080;

dotenv.config();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get('/ping', (req, res) => {
    res.json({ message: 'pong' });
});

app.post('/signup', async (req, res) => {
    const { username, password, email, phoneno } = req.body;

    if (!username || !password || !email || !phoneno) {
        return res.status(400).json({ message: 'All fields are required' });
    }
    if (password.length < 5 || !password.includes('@')) {
        return res.status(400).json({ message: 'Password must be at least 5 characters long and include "@"' });
    }
    if (!email.includes('@')) {
        return res.status(400).json({ message: 'Email must be valid' });
    }
    if (phoneno.length !== 10) {
        return res.status(400).json({ message: 'Phone number must be 10 digits long' });
    }

    try {
        const existingUser = await userModel.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: 'Username already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new userModel({ username, password: hashedPassword, email, phoneno });
        await newUser.save();
        return res.status(201).json({ message: 'Registered successfully', user: newUser });
    } catch (error) {
        return res.status(500).json({ message: 'An error occurred', error: error.message });
    }
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    console.log("req.body",req.body)
    

    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required' });
    }

    try {
        const user = await userModel.findOne({ username });
        if (!user) {
            return res.status(401).json({ success: false, message: 'Invalid username or password' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ success: false, message: 'Invalid password' });
        }

        return res.json({ success: true, message: 'Authentication successful' });
    } catch (error) {
        console.error('Error:', error.message);
        return res.status(500).json({ success: false, message: 'An error occurred. Please try again later.' });
    }
});

app.listen(port, async () => {
    try {
        await connection;
        console.log("Connected to MongoDB")
    } catch (error) {
        console.error("Error connecting to DB", error);
    }

    console.log(`Server is listening on port ${port}`);
});
