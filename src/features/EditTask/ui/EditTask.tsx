import { EditOutlined } from '@ant-design/icons';

type EditTaskProps = {
  onClick: () => void,
}

export const EditTask = ({ onClick }: EditTaskProps) => {
  return <EditOutlined onClick={onClick} />;
};
