import { InputRef } from 'antd';
import Search, { SearchProps } from 'antd/es/input/Search';
import styles from './styles.module.scss';

type SearchTaskProps = SearchProps & React.RefAttributes<InputRef>;

export const SearchTask = ({ ...props }: SearchTaskProps) => {
  return <Search className={styles.search} {...props} />;
};
