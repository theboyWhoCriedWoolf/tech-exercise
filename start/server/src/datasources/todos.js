class Todos {
  constructor({ model }) {
    this.store = model;
  }

  async createTodo({ title, id, completed }) {
    const todo = await this.store.create({ title, id, completed });

    return todo;
  }
}

export default Todos;
