import express, { Application} from 'express';
import { router } from './routes/routes';
import "express-async-errors";
import { errorHandler } from './shared/erros';
import mongoose from 'mongoose';
const bodyParser = require('body-parser');

const app: Application = express();

require('dotenv').config()
app.use(bodyParser.json());


const porta = process.env.PORT
const url_connect = process.env.MONGODB_URL
const msg: string = `Server Running port ${porta}`;

app.listen(porta, () => console.log(msg));

mongoose.connect(`${url_connect}`);

app.use('/users', router);

app.use(errorHandler)