import { createSlice } from '@reduxjs/toolkit'

const coursesSlice = createSlice({
  name: 'courses',
  initialState: [],
  reducers: {
    // todoAdded(state, action) {
    //   state.push({
    //     id: action.payload.id,
    //     text: action.payload.text,
    //     completed: false,
    //   })
    // },
    // todoToggled(state, action) {
    //   const todo = state.find((todo) => todo.id === action.payload)
    //   todo.completed = !todo.completed
    // },
  },
})

// export const { todoAdded, todoToggled } = todosSlice.actions
export default coursesSlice.reducer