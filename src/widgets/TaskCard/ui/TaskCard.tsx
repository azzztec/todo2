import {
  Avatar, Card, Col, Typography,
} from 'antd';
import Meta from 'antd/es/card/Meta';
import { ToggleTask } from '@features/ToggleTask';
import { EditTask } from '@features/EditTask';
import { ITask } from '@entities/Task/model/types/task';
import { DeleteTask } from '@features/DeleteTask';
import { formatTaskTimestamp } from '../lib/formatDate';
import { EditTaskModal } from '@widgets/modals/EditTaskModal';
import { useState } from 'react';
import styles from './styles.module.scss';

type TaskCardProps = {
  task: ITask;
};

export const TaskCard = ({ task }: TaskCardProps) => {
  const [isShowEditTaskModal, setShowEditTaskModal] = useState(false);

  return (
    <Card
      className={styles.card}
      bordered={false}
      actions={[
        <ToggleTask key="toggle" task={task} />,
        <EditTask key="edit" onClick={() => setShowEditTaskModal(true)} />,
        <DeleteTask key="delete" task={task} />,
      ]}
    >
      <Meta
        avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2" />}
        title={task.title}
        description={(
          <Col className={styles.info_wrapper}>
            <Typography.Text className={styles.description}>
              {task.description}
            </Typography.Text>
            <Typography.Text className={styles.time}>
              {formatTaskTimestamp(task.timestamp)}
            </Typography.Text>
          </Col>
        )}
      />
      {
        isShowEditTaskModal
        && (
          <EditTaskModal
            task={task}
            isOpen={isShowEditTaskModal}
            handleCancel={() => setShowEditTaskModal(false)}
          />
        )
      }
    </Card>
  );
};
