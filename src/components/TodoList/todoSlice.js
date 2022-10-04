import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export default createSlice({
  name: 'todoList',
  initialState: { status: 'idle', todos: [] },
  reducers: {
    addTodo(state, action) {
      state.push(action.payload);
    },
    toggleTodoStatus(state, action) {
      const currentTodo = state.find((todo) => todo.id === action.payload);
      if (currentTodo) currentTodo.completed = !currentTodo.completed;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.todos = action.payload;
        state.status = 'idle';
      });
  },
});

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const res = await fetch('/api/todos');
  const data = await res.json();
  return data.todos;
});
