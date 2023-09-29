import { Dropdown, MenuProps } from 'antd';
import { DropdownButtonProps } from 'antd/es/dropdown';
import { DownOutlined } from '@ant-design/icons';
import { TaskFilterType } from '@entities/Task/model/types/task';
import styles from './styles.module.scss';

type FilterDropdownProps = DropdownButtonProps & {
  handleChoose: (filter: TaskFilterType) => void
}

const items: MenuProps['items'] = [
  {
    label: 'All',
    key: '1',
  },
  {
    label: 'Done',
    key: '2',
  },
  {
    label: 'Active',
    key: '3',
  },
];

export const FilterDropdown = ({ handleChoose, ...props }: FilterDropdownProps) => {

  const handleClick: MenuProps['onClick'] = ({ key }) => {
    if (key === '2') handleChoose(TaskFilterType.DONE);
    else if (key === '3') handleChoose(TaskFilterType.ACTIVE);
    else handleChoose(TaskFilterType.ALL);
  };

  return (
    <Dropdown.Button
      className={styles.button}
      icon={<DownOutlined />}
      menu={{ items, onClick: handleClick }}
      {...props}
    >
      Filter
    </Dropdown.Button>
  );
};
