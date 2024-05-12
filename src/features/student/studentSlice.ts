import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Course } from '../../utils/store';

const initialState: Course[] = [];

const studentSlice = createSlice({
  name: 'student',
  initialState,
  reducers: {
    enrollCourse(state, action: PayloadAction<{ course: Course }>) {
      const { course } = action.payload;
      const index = state.findIndex((course) => course.id === action.payload.course.id);
      if(index !== -1) return ;
      state.push({...course, isCompleted : false});
    },

    courseCompleted(state, action: PayloadAction<{ id: number }>) {
      const index = state.findIndex((course) => course.id === action.payload.id);
      state[index].isCompleted = true;
    }
  },
});

export const { enrollCourse, courseCompleted } = studentSlice.actions;
export default studentSlice.reducer;
