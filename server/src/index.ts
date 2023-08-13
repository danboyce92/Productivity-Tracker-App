import express, { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import { config } from 'dotenv';
import cors from 'cors';
import ActivityList from './models/Activities';

import { listOfActivities } from './data';
import bodyParser from 'body-parser';

config();

const app = express();
app.use(cors({
  origin: "*",
}));
const port = process.env.DEV_PORT;
 
// app.use(bodyParser.json());
app.use(express.json());

// app.get('/', (req: Request, res: Response, next: NextFunction) => {
//   console.log(listOfActivities);
//   res.send({ activities: listOfActivities });

// }); 

//Get all activities
app.get('/activities', async (req: Request, res: Response, next: NextFunction) => {
  const activities = await ActivityList.find();
  res.json(activities)
  next();
});

//In my request from front end. Object with name and category keys must be used
app.post("/newactivity", async (req: Request, res: Response, next: NextFunction) => {
  const newActivity = new ActivityList({
    name: req.body.name,
    category: req.body.category,
  });
  const createdActivity = await newActivity.save();
  res.json(createdActivity);
});

mongoose.connect(process.env.MONGO_URL!)
  .then(() => {
    console.log(`Listening on port ${port}`);
    app.listen(port);
  })

