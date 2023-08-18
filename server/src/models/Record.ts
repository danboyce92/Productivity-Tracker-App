import mongoose from 'mongoose';

const Schema = mongoose.Schema;
// const ObjectId = mongoose.Types.ObjectId;

const RecordSchema = new Schema({
  name: String,
  category: String,
  duration: Number,
  date: Date,
  timestamp: Number,
});

const RecordModel = mongoose.model('records', RecordSchema);

export default RecordModel;