import { Page } from '@widgets/Page';
import { Typography } from 'antd';
import styles from './styles.module.scss';

export const NotFoundPage = () => {
  return (
    <Page>
      <Typography.Title className={styles.title} level={1}>
        Not Found :(
      </Typography.Title>
    </Page>
  );
};
