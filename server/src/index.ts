import express, { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import { config } from 'dotenv';
import cors from 'cors';
import ActivityList from './models/Activities';
import Record from './models/Record';


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

app.get('/records', async (req: Request, res: Response, next: NextFunction) => {
  const records = await Record.find();
  res.json(records);
  next();
})




//In my request from front end. Object with name and category keys must be used
app.post("/newactivity", async (req: Request, res: Response) => {
  const newActivity = new ActivityList({
    name: req.body.name,
    category: req.body.category,
  });
  const createdActivity = await newActivity.save();
  res.json(createdActivity);
});

app.post('/newrecord', async (req: Request, res: Response) => {
  const newRecord = new Record({
    name: req.body.name,
    category: req.body.category,
    duration: req.body.duration,
    date: req.body.date,
    timestamp: req.body.timestamp,
  });
  const createdRecord = await newRecord.save();
  res.json(createdRecord);
})

app.delete('/activities/:activityId', async (req: Request, res: Response) => {
  const activityId = req.params.activityId;
  const activity = await ActivityList.findByIdAndDelete(activityId);
  res.json(activity);
})

app.delete('/records/:recordId', async (req: Request, res: Response) => {
  const recordId = req.params.recordId;
  const record = await Record.findByIdAndDelete(recordId);
  res.json(record);
})


mongoose.connect(process.env.MONGODB_URI!)
  .then(() => {
    console.log(`Listening on port ${port}`);
    app.listen(port);
  })


  export default app;

