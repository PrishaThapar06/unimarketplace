import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import connect from './database/conn.js';
import router from './router/route.js';
import bodyParser from 'body-parser';

const app = express();

/** middlewares */
app.use(express.json());
// Set CORS options to allow requests from http://localhost:3000
const corsOptions = {
  origin: 'http://localhost:3006',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(morgan('tiny'));
app.disable('x-powered-by'); // less hackers know about our stack

const port = 8080;

/** HTTP GET Request */
app.get('/', (req, res) => {
    res.status(201).json("Home GET Request");
});

app.use('/api', router);

/** start server only when we have valid connection */
connect().then(() => {
    app.listen(port, () => {
        console.log(`Server connected to http://localhost:${port}`);
    });
}).catch(error => {
    console.log("Invalid database connection...!");
});