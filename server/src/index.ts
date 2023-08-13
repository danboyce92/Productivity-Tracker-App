import express, { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import { config } from 'dotenv';

import ActivityList from './models/Activities';

import { listOfActivities } from './data';
import bodyParser from 'body-parser';

config();

const app = express();
const port = process.env.DEV_PORT;
 
// app.use(bodyParser.json());
app.use(express.json());

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  console.log(listOfActivities);
  res.send({ activities: listOfActivities });
});

//In my request from front end. Object with name and category keys must be used
app.post("/activity", async (req: Request, res: Response, next: NextFunction) => {
  const newActivity = new ActivityList({
    name: req.body.name,
    category: req.body.category,
  });
  const createdActivity = await newActivity.save();
  res.json(createdActivity);
});

mongoose.connect(`mongodb+srv://daarf92:${process.env.MONGO_PASSWORD}@cluster1.v4aquyg.mongodb.net/?retryWrites=true&w=majority`)
  .then(() => {
    console.log(`Listening on port ${port}`);
    app.listen(port);
  })

