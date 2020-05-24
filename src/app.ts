import express, { Application, Request, Response, NextFunction } from 'express';
import helloRoutes from './controllers/hello';
import {connectMongoDB} from './helpers/connectBD';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
// config app
const app: Application = express();
// env
dotenv.config({
    path: '.env'
});
// config body-parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
// timestamp connect
const timestamp = new Date().toISOString();
const version: string = 'v01'
// api routes
app.use(`/api/${version}/hello`, helloRoutes);





// call connect db
connectMongoDB();
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log('Server running' + ' ' + process.env.NODE_ENV + ' ' + `${timestamp}`);
})
