import * as express from 'express';
import * as morgan from 'morgan';

const ExpressApp = express();

ExpressApp.use(morgan('dev'));

export default ExpressApp;
