import { taskActions } from '@entities/Task';
import { ITask } from '@entities/Task/model/types/task';
import { Checkbox } from 'antd';
import { useDispatch } from 'react-redux';

type DelteTaskProps = {
  task: ITask,
}

export const ToggleTask = ({ task }: DelteTaskProps) => {
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(taskActions.toggleTask(task.id));
  };

  return <Checkbox checked={task.status} onChange={handleChange} />;
};
