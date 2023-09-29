import { taskActions } from '@entities/Task';
import { ITask } from '@entities/Task/model/types/task';
import useInput from '@shared/lib/hooks/useInput';
import {
  Col, Input, Modal,
} from 'antd';
import { useDispatch } from 'react-redux';
import styles from './styles.module.scss';

type EditTaskModalProps = {
  task: ITask,
  isOpen: boolean,
  handleCancel: () => void,
}

export const EditTaskModal = ({ task, isOpen, handleCancel }: EditTaskModalProps) => {
  const { value: title, handleChange: handleTitleChage } = useInput(task.title);
  const { value: description, handleChange: handleDescriptionChage } = useInput(task.description);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(taskActions.updateTask({
      id: task.id,
      timestamp: task.timestamp,
      status: task.status,
      title,
      description,
    }));
  };

  return (
    <Modal
      className={styles.modal}
      title="Edit Task"
      open={isOpen}
      onOk={() => {
        handleClick();
        handleCancel();
      }}
      onCancel={handleCancel}
    >
      <Col className={styles.inputs_wrapper}>
        <Input value={title} onChange={handleTitleChage} />
        <Input value={description} onChange={handleDescriptionChage} />
      </Col>
    </Modal>
  );
};
