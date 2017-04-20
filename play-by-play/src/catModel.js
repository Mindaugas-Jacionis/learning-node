import mongoose from 'mongoose';

const catsSchema = mongoose.Schema({
  name: String,
  age: Number,
  type: String
});

export default mongoose.model('Cat', catsSchema);
