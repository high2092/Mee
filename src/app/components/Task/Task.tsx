import { memo } from 'react';
import { calculateDuration, convertTime } from '../../../utility/time';
import { generateRandomHexColor } from '../../../utility/color';
import { taskStyle, taskTitleStyle } from './Task.css';

const MIN_HEIGHT_PERCENT = 0.2;

export const Task = memo(function Task({ title, startedAt, endedAt }: Task) {
  const duration = calculateDuration(startedAt, endedAt);
  return (
    <div className={taskStyle} style={{ top: `${convertTime(startedAt) / 14.4}%`, height: `${Math.max(duration / 14.4 - MIN_HEIGHT_PERCENT, MIN_HEIGHT_PERCENT)}%`, backgroundColor: generateRandomHexColor() }}>
      <div className={taskTitleStyle({ isShort: isDurationShort(duration) })}>{title}</div>
    </div>
  );
});

function isDurationShort(duration: number) {
  return duration < 30;
}
