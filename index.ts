// tslint:disable-next-line: no-var-requires
require('dotenv').config();
import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'
import db from './config/database'
import helmet from 'helmet'
import Admin from './api/Admin/routes'
import Email from './api/emailManagement/routes';
import Record from './api/manage-records/routes';

const app = express();
app.use(express.json());

db.authenticate().then(() => {
    console.log('Database Connected');
}).catch((err: Error) => {
    console.log(err, 'error');
})

app.set('port', process.env.port);

// Security helmet
app.use(helmet({
    frameguard: false
}))

app.use(cors({
    exposedHeaders: ['Content-Disposition']
}));

// Morgan Middleware for logging
app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));
app.use(bodyParser.json({ limit: '100mb' }));

app.get("/", (req, res) => {
    res.json({ message: "Welcome to sample application." });
});

app.get("/Email-management", (req, res) => {
    res.json({ message: "Welcome to Email management application." });
});

app.use("/dev", Admin)

app.use("/Email-management", Email);

app.use("/Manage-records", Record);


export default app



