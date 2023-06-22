import express from 'express';
import configExpress from './config/express';
import routes from './routes';
import { createServer } from 'http';

export const app = express();

export const server = createServer(app);

//set up express
configExpress(app);

//Setup routes
routes(app);

export default app;
