import { createSlice } from '@reduxjs/toolkit'

export default createSlice({
  name: 'todoList',
  initialState: [
    {
      id: "8ec633e7-1ae1-47d3-a620-cb3fe7aed969",
      name: "CSS",
      priority: "Medium",
      completed: false,
    },
    {
      id: "8ec633e7-1ae1-47d3-a620-cb3fe7aed970",
      name: "JS",
      priority: "High",
      completed: true,
    },
    {
      id: "8ec633e7-1ae1-47d3-a620-cb3fe7aed971", 
      name: "HTML",
      priority: "Low",
      completed: true,
    }
  ],
  reducers: {
    addTodo(state, action) {
      state.push(action.payload)
    },
    toggleTodoStatus(state, action) {
      const currentTodo = state.find(todo => todo.id === action.payload)
      if(currentTodo) currentTodo.completed = !currentTodo.completed
    }
  }
})

// export const { addTodo, toggleTodoStatus } = todoSlice.actions

// export default todoSlice.reducer
