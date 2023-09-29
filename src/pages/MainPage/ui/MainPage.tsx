import {
  Layout, Divider, Row, Col,
} from 'antd';
import { Page } from '@widgets/Page';
import { NavBar } from '@widgets/NavBar';
import { TaskCard } from '@widgets/TaskCard';
import { AddTaskButton } from '@features/AddTaskButton';
import { SearchTask } from '@features/SearchTask';
import { useState } from 'react';
import { AddTaskModal } from '@widgets/modals/AddTaskModal';
import styles from './styles.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '@app/store/types';
import { ITask, TaskFilterType } from '@entities/Task/model/types/task';
import useThrottle from '@shared/lib/hooks/useThrottle';
import useInput from '@shared/lib/hooks/useInput';
import { filterTasksByStatus, filterTasksByTitle } from '@entities/Task/lib/filters';
import { FilterDropdown } from '@features/FilterDropdown';

export const MainPage = () => {
  const [filterType, setFilterType] = useState(TaskFilterType.ALL);
  const { value: searchTitle, handleChange: handleChangeSearchTitle } = useInput();
  const throttledSearchTitle = useThrottle(searchTitle);
  const tasks = useSelector<RootState, ITask[]>((state) => state.tasks.tasks);
  const [isShowAddTaskModal, setShowAddTaskModal] = useState(false);

  return (
    <>
      <NavBar />
      <Page>
        <Layout className={styles.main_layout}>
          <Row className={styles.controls}>
            <AddTaskButton handleClick={() => setShowAddTaskModal(true)} />
            <SearchTask placeholder="Search" onChange={handleChangeSearchTitle} />
          </Row>
          <Row className={styles.filter}>
            <FilterDropdown handleChoose={setFilterType} />
          </Row>
          <Divider />
          <Col className={styles.tasks_wrapper}>
            {
              filterTasksByTitle(filterTasksByStatus(tasks, filterType), throttledSearchTitle)
                .map((task) => <TaskCard key={task.id} task={task} />)
            }
          </Col>
          <AddTaskModal isOpen={isShowAddTaskModal} handleCancel={() => setShowAddTaskModal(false)} />
        </Layout>
      </Page>
    </>
  );
};

export default MainPage;
