const express = require('express')
const mongoose = require('mongoose')
const app = express()


//routes

app.get('/', (req, res) => {
    res.send('Hello NODE API')
})

app.get('/blog', (req, res) => {
    res.send('Hello Blog, Im Simon')
})


mongoose.set("strictQuery", false)
mongoose.connect('mongodb+srv://admin:8566520Sh!@socialblog.40tygsv.mongodb.net/?retryWrites=true&w=majority')
.then(() => {
    console.log('connected to MongoDB')
    app.listen(3000, () => {
        console.log('Node API app is running on port 3000')
    })
    
}).catch((error) =>{
    console.log(error)
})