import { taskReducer } from '@entities/Task/model/slice/taskSlice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  tasks: taskReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
