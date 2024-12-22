"use client";

import React from 'react';
import { useDispatch } from 'react-redux';
import Link from 'next/link';
import { deleteTask, toggleTask } from '@/store/tasksSlice';

// Define the type for a single task
interface Task {
  id: number; // or string, depending on your task id type
  title: string;
  completed: boolean;
}

// Define the props for the TaskList component
interface TaskListProps {
  tasks: Task[];
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  const dispatch = useDispatch();

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <Link href={`/tasks/${task.id}`}>
            <strong>{task.title}</strong>
          </Link>
          <span>{task.completed ? ' (выполнено)' : ' (не выполнено)'}</span>
          <button onClick={() => dispatch(toggleTask(task.id))}>
            {task.completed ? 'Не выполнено' : 'Выполнено'}
          </button>
          <button onClick={() => dispatch(deleteTask(task.id))}>Удалить</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;