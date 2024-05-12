
import { configureStore } from '@reduxjs/toolkit'
import studentReducer from '../features/student/studentSlice';
import coursesReducer from '../features/courses/coursesSlice';

export interface Course {
  id: number;
  name: string;
  instructor: string;
  description: string;
  enrollmentStatus: string;
  thumbnail: string;
  duration: string;
  schedule: string;
  location: string;
  prerequisites: string[];
  syllabus: {
      week: number;
      topic: string;
      content: string;
  }[];
  isCompleted?: boolean ;
}


export const store = configureStore({
    reducer: {
    student : studentReducer,
    courses : coursesReducer
    },
  })

  export type RootState = ReturnType<typeof store.getState>
  export type AppDispatch = typeof store.dispatch