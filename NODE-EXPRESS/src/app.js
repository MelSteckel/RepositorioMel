import express, { Router } from 'express';
const app = express();
const router = Router();
//Rotas
import index from './routes/index';
import personRoute from './routes/personRoute';
app.use('/', index);
app.use('/persons', personRoute);
//Rotas
app.use('/', index);
app.use('/persons', personRoute);
export default app;