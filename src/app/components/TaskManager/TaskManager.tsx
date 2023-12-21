'use client';

import { useEffect, useState } from 'react';
import { NewTaskButton } from '../NewTaskButton/NewTaskButton';
import { Task } from '../Task/Task';
import { taskListStyle, taskManagerStyle, timeStampStyle } from './TaskManager.css';
import { getToday } from '../../../utility/date';

export function TaskManager() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    httpGetTasks(getToday()).then(setTasks);
  }, []);

  return (
    <div className={taskManagerStyle}>
      <div className={timeStampStyle}>
        {Array.from({ length: 25 }).map((_, i) => (
          <span key={`time-${i}`}>{`${i.toString().padStart(2, '0')}:00`}</span>
        ))}
      </div>
      <div className={taskListStyle}>
        {tasks.map((task) => (
          <Task key={`task-${task.id}`} {...task} />
        ))}
        <NewTaskButton />
      </div>
    </div>
  );
}

async function httpGetTasks(date: string) {
  const response = await fetch(`/api/task?date=${date}`);
  if (response.status !== 200) {
    throw new Error();
  }
  const { tasks } = await response.json();
  return tasks;
}
