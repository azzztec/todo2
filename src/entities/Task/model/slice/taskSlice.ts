import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ITask } from '../types/task';

const initialState = {
  tasks: [] as ITask[],
};

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, { payload: task }: PayloadAction<ITask>) => {
      state.tasks.push(task);
    },
    deleteTask: (state, { payload: id }: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((_task) => _task.id !== id);
    },
    updateTask: (state, { payload: task }: PayloadAction<ITask>) => {
      state.tasks = state.tasks.map((_task) => (_task.id === task.id ? task : _task));
    },
    toggleTask: (state, { payload: id }: PayloadAction<string>) => {
      const task = state.tasks.find((_task) => (_task.id === id)) as ITask;
      task.status = !task.status;
    },
  },
});

export const { actions: taskActions } = taskSlice;
export const { reducer: taskReducer } = taskSlice;
