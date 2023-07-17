import express from 'express';
import mongoose from 'mongoose';
const app = express();

mongoose
  .connect('mongodb+srv://simonhorrabin:xQ2xjl6ibXPS2VFM@cluster0.k08c7w1.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => app.listen(5000))
  .then(() => console.log("Connected to database and listening to localhost 5000"))
  .catch((err) => console.log(err));



