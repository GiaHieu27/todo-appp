import { createSlice } from '@reduxjs/toolkit'

export default createSlice({
  name: 'filter',
  initialState: {
    search: "",
    status: "All",
    priorities: [],
  },
  reducers: {
    searchFilter(state, action) {
      state.search = action.payload
    },
    statusFilter(state, action) {
      state.status = action.payload
    },
    prioritiesFilter(state, action) {
      state.priorities = action.payload
    },
  }
})

// export const { searchFilter, statusFilter, prioritiesFilter } = filterSlice.actions

// export default filterSlice.reducer
