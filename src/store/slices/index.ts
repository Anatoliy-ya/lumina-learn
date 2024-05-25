import { userInitialState } from 'types/initialStates';
import { CourseInterface, UserInterface } from 'types/types';
import { PayloadAction, combineReducers, createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: userInitialState as UserInterface,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.name = '';
    },
  },
});

const coursesSlice = createSlice({
  name: 'courses',
  initialState: [] as CourseInterface[],
  reducers: {
    addCourse: (state, action: PayloadAction<CourseInterface>) => {
      state.push(action.payload);
    },
    removeCourse: (state, action: PayloadAction<number>) => {
      return state.filter((course) => course.id !== action.payload);
    },
    updateCourse: (state, action: PayloadAction<CourseInterface>) => {
      const index = state.findIndex((course) => course.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    updateCourseFavorite: (state, action: PayloadAction<{ id: number; isFavorite: boolean }>) => {
      const index = state.findIndex((course) => course.id === action.payload.id);
      if (index !== -1) {
        state[index].isFavorite = action.payload.isFavorite;
      }
    },
  },
});

export const rootReducer = combineReducers({
  user: userSlice.reducer,
  courses: coursesSlice.reducer,
});

export const { login, logout } = userSlice.actions;
