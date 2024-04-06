import { userInitialState } from 'types/initialStates';
import { UserState } from 'types/types';
import { PayloadAction, combineReducers, createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: userInitialState as UserState,
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

export const rootReducer = combineReducers({
  user: userSlice.reducer,
});

export const { login, logout } = userSlice.actions;
