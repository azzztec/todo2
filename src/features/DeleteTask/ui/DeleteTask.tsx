import { DeleteOutlined } from '@ant-design/icons';
import { taskActions } from '@entities/Task';
import { ITask } from '@entities/Task/model/types/task';
import { useDispatch } from 'react-redux';
import styles from './styles.module.scss';

type DeleteTaskProps = {
  task: ITask,
}

export const DeleteTask = ({ task }: DeleteTaskProps) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(taskActions.deleteTask(task.id));
  };

  return <DeleteOutlined className={styles.detele_icon} onClick={handleClick} />;
};
