// import { createStore } from "redux";
// import rootReducer from "./reducer";
// import { composeWithDevTools } from "redux-devtools-extension";

// const composeEnhancer = composeWithDevTools();

// const store = createStore(rootReducer, composeEnhancer);

// export default store;

import { configureStore } from '@reduxjs/toolkit'

import todoSlice from "../components/TodoList/todoSlice";
import filterSlice from "../components/Filters/filterSlice"

const store = configureStore({
	reducer: {
		todoList: todoSlice.reducer,
		filter: filterSlice.reducer
	}
})

export default store
