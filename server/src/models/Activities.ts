import mongoose from 'mongoose';

const Schema = mongoose.Schema;
// const ObjectId = mongoose.Types.ObjectId;

const ActivityListSchema = new Schema({
  name: String,
  category: String
});

const ActivityListModel = mongoose.model('ActivityList', ActivityListSchema);

export default ActivityListModel;