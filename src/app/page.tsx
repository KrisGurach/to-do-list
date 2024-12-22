"use client";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { fetchTasks } from '@/utils/api';
import { setTasks } from '@/store/tasksSlice';
import TaskList from '@/pages/TaskList';

const HomePage: React.FC = () => {
  const dispatch = useDispatch();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const tasks = useSelector((state: any) => state.tasks.tasks);

  useEffect(() => {
    const loadTasks = async () => {
      const fetchedTasks = await fetchTasks();
      dispatch(setTasks(fetchedTasks));
    };

    loadTasks();
  }, [dispatch]);

  return (
    <div>
      <h1>Список задач</h1>
      <Link href="/add-task">Добавить задачу</Link>
      <TaskList tasks={tasks} />
    </div>
  );
};

export default HomePage;