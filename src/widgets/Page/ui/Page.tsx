import { Layout } from 'antd';
import { PropsWithChildren } from 'react';
import styles from './styles.module.scss';

export const Page = ({ children }: PropsWithChildren) => {
  return (
    <Layout className={styles.layout}>
      {children}
    </Layout>
  );
};
