import { Row, Typography } from 'antd';
import { Header } from 'antd/es/layout/layout';
import styles from './styles.module.scss';

const NavBar = () => {
  return (
    <Header className={styles.header}>
      <Typography.Title className={styles.title} level={1}>ToDo</Typography.Title>
    </Header>
  );
};

export default NavBar;
