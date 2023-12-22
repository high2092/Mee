'use client';

import { useCallback, useEffect, useState } from 'react';
import { NewTaskButton } from '../NewTaskButton/NewTaskButton';
import { Task } from '../Task/Task';
import { dateSectionStyle, dateSelectorContainerStyle, dateStyle, taskListStyle, taskManagerStyle, timeStampStyle } from './TaskManager.css';
import { convertDate, getNextDate, getPrevDate, getYYYYMMDDList } from '../../../utility/date';
import { DateSelector } from '../DateSelector/DateSelector';
import { useRecoilState } from 'recoil';
import { dateAtom } from '../../../state/date';
import { PrevButton } from '../DateSelector/PrevButton';
import { NextButton } from '../DateSelector/NextButton';
import { nextButtonStyle } from '../DateSelector/NextButton.css';

export function TaskManager() {
  const [date, setDate] = useRecoilState(dateAtom);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [showDateSelector, setShowDateSelector] = useState(false);

  useEffect(() => {
    if (!date) return;
    httpGetTasks(date).then(setTasks);
  }, [date]);

  const handleDateClick = useCallback(() => {
    setShowDateSelector((show) => !show);
  }, []);

  return (
    <div>
      <div className={dateSectionStyle}>
        <div className={nextButtonStyle} onClick={() => setDate(getPrevDate(date))}>
          <PrevButton />
        </div>
        <span className={dateStyle} onClick={handleDateClick}>
          {getYYYYMMDDList(date).join('.')}
        </span>
        <div className={nextButtonStyle} onClick={() => setDate(getNextDate(date))}>
          <NextButton />
        </div>
        {showDateSelector && (
          <div className={dateSelectorContainerStyle}>
            <DateSelector date={date} />
          </div>
        )}
      </div>
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
    </div>
  );
}

async function httpGetTasks(date: Date) {
  const dateString = convertDate(date);
  const response = await fetch(`/api/task?date=${dateString}`);
  if (response.status !== 200) {
    throw new Error();
  }
  const { tasks } = await response.json();
  return tasks;
}
