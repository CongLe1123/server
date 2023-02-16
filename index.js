import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import postRoutes from './routes/posts.js';

const app = express();

app.use('/post', postRoutes);

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

const CONECTION_URL = 'mongodb+srv://ning:192837465Aa@cluster0.kanohsl.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.connect(CONECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`litening on port ${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set('strictQuery', true);