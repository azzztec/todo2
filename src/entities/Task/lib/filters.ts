import { ITask, TaskFilterType } from '../model/types/task';

export const filterTasksByTitle = (tasks: ITask[], text: string) => {
  return tasks.filter((task) => task.title.includes(text.trim()));
};

export const filterTasksByStatus = (tasks: ITask[], status: TaskFilterType) => {
  if (status === TaskFilterType.ACTIVE) return tasks.filter((task) => !task.status);
  if (status === TaskFilterType.DONE) return tasks.filter((task) => task.status);
  return tasks;
};
