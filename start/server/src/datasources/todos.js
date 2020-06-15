import { v4 as uuidv4 } from 'uuid';

const todos = [];

const makeTodo = ({ id, title, completed = false }) => ({
  id,
  title,
  completed,
});

class Todos {
  constructor() {
    // add default todo
    todos.push(
      makeTodo({
        id: uuidv4(),
        title: 'foo',
      }),
    );
  }

  async createTodo({ title, id, completed }) {}
  async updateTodo({ title, id, completed }) {}
  async removeTodo({ title, id, completed }) {}
}

export default Todos;
