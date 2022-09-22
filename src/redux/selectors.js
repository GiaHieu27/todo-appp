import { createSelector } from '@reduxjs/toolkit';

export const selectorSearchText = state => state.filter.search
export const selectorStatus = state => state.filter.status
export const selectorPriorities = state => state.filter.priorities
export const todoListSelector = state => state.todoList

export const todoListRemaining = createSelector(todoListSelector, selectorStatus, selectorSearchText, selectorPriorities, (todoList, status, searchText, priorities) => {
	return todoList.filter((todo) => {
		if (status === 'All') {
			return priorities.length
				? todo.name.includes(searchText) && priorities.includes(todo.priority)
				: todo.name.includes(searchText)
		}
		return (
			todo.name.includes(searchText) &&
			(status === 'Completed' ? todo.completed : !todo.completed) &&
			(priorities.length ? priorities.includes(todo.priority) : true)
		)
	})
})
