import { PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';

type AddTaskButtonProps = {
  handleClick: () => void;
}

export const AddTaskButton = ({ handleClick }: AddTaskButtonProps) => {
  return <Button onClick={handleClick} type="primary" icon={<PlusOutlined />} />;
};
