const express=require('express');
const app = express();
const port = 8080 || 8008;

app.get("/",(req,res)=>{
    res.send("Hello World!")
})

app.get('/ping',(req,res) => {
    res.json({ message: 'pong' })
})

app.listen(port,async() => {
    console.log(`Server is listening on port ${port}`);
})
