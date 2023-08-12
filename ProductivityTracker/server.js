import express from 'express';
import { listOfActivities } from './data.js';
import bodyParser from 'body-parser';

const app = express();
const port = 8000;

app.use(bodyParser.json());

app.get('http://127.0.0.1:8000/api/activitylist', (req, res, next) => {
  console.log(listOfActivities);
  res.send({ activities: listOfActivities });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
