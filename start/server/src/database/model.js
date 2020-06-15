import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const TodoSchema = new Schema({
  id: ObjectId,
  title: String,
  completed: String,
});

const TodoModel = mongoose.model('todos', TodoSchema);

export default TodoModel;
