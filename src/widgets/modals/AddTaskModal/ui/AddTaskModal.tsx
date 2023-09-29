import { taskActions } from '@entities/Task';
import useInput from '@shared/lib/hooks/useInput';
import { getTimestampSeconds } from '@shared/lib/utils/dateUtils';
import { generateRandomString } from '@shared/lib/utils/stringUtils';
import {
  Col, Input, Modal,
} from 'antd';
import { useDispatch } from 'react-redux';
import styles from './styles.module.scss';

type AddTaskModalProps = {
  isOpen: boolean,
  handleCancel: () => void,
}

export const AddTaskModal = ({ isOpen, handleCancel }: AddTaskModalProps) => {
  const { value: title, handleChange: handleTitleChage } = useInput('');
  const { value: description, handleChange: handleDescriptionChage } = useInput('');
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(taskActions.addTask({
      id: generateRandomString(),
      timestamp: getTimestampSeconds(),
      status: false,
      title,
      description,
    }));
  };

  return (
    <Modal
      className={styles.modal}
      title="Add Task"
      open={isOpen}
      onOk={() => {
        handleClick();
        handleCancel();
      }}
      onCancel={handleCancel}
    >
      <Col className={styles.inputs_wrapper}>
        <Input placeholder="Name" onChange={handleTitleChage} />
        <Input placeholder="Description" onChange={handleDescriptionChage} />
      </Col>
    </Modal>
  );
};
