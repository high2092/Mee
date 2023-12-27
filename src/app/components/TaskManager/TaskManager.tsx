'use client';

import { useCallback, useState } from 'react';
import { NewTaskButton } from '../NewTaskButton/NewTaskButton';
import { Task } from '../Task/Task';
import { dateSectionStyle, dateSelectorContainerStyle, dateStyle, taskListStyle, taskManagerStyle, timeStampStyle } from './TaskManager.css';
import { getNextDate, getPrevDate, getYYYYMMDDList } from '../../../utility/date';
import { DateSelector } from '../DateSelector/DateSelector';
import { useRecoilState } from 'recoil';
import { dateAtom } from '../../../state/date';
import { PrevButton } from '../DateSelector/PrevButton';
import { NextButton } from '../DateSelector/NextButton';
import { nextButtonStyle } from '../DateSelector/NextButton.css';
import { useTask } from '../../../hooks/useTask';

export function TaskManager() {
  const [date, setDate] = useRecoilState(dateAtom);
  const [showDateSelector, setShowDateSelector] = useState(false);

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
          <TaskList />
          <NewTaskButton />
        </div>
      </div>
    </div>
  );
}

function TaskList() {
  const { tasks, isLoading } = useTask();

  if (isLoading) return <>Loading...</>;

  return (
    <>
      {tasks.map((task) => (
        <Task key={`task-${task.id}`} {...task} />
      ))}
    </>
  );
}
