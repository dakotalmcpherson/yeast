import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import databaseMiddlewares from './controllers/databaseMiddleWares.ts';
import * as dotenv from 'dotenv'

dotenv.config();

const app = express()
const port = process.env.PORT
const uri = process.env.MONGODB_URI || ''

mongoose.connect(uri, {
  dbName: 'warburgProject'
})
.then(() => console.log('Connected to Mongo DB.'))
.catch(err => console.log(err));

app.use(bodyParser.json())

app.get('/profile', databaseMiddlewares.fetchUser, (req: Request, res: Response) => {
  res.status(200).send(res.locals.userData);
})

app.post('/profile', databaseMiddlewares. createTodo, (req: Request, res: Response) => {
  res.status(200).send()
})

app.put('/profile', databaseMiddlewares.completeTodo, (req: Request, res: Response) => {
  res.status(200).send()
})

app.delete('/profile', databaseMiddlewares.deleteTodo, (req: Request, res: Response) => {
  res.status(200).send()
})

app.put('/user', databaseMiddlewares.updateUser, (req: Request, res: Response) => {
  res.status(200).send()
})

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});