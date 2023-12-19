import { dummyTaskList } from '../../../data/task';
import { Task } from '../Task/Task';
import { taskListStyle, taskManagerStyle, timeStampStyle } from './TaskManager.css';

export function TaskManager() {
  return (
    <div className={taskManagerStyle}>
      <div className={timeStampStyle}>
        {Array.from({ length: 25 }).map((_, i) => (
          <span key={`time-${i}`}>{`${i.toString().padStart(2, '0')}:00`}</span>
        ))}
      </div>
      <div className={taskListStyle}>
        {dummyTaskList.map((task) => (
          <Task key={`task-${task.id}`} {...task} />
        ))}
      </div>
    </div>
  );
}
