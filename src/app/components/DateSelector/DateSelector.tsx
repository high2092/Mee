import { memo, useMemo } from 'react';
import { calendarGrid, dateSelectorStyle, dayCellStyle } from './DateSelector.css';
import { useSetRecoilState } from 'recoil';
import { dateAtom } from '../../../state/date';
import { getCalendarPadding, getDayList, getNewDateSetDay } from '../../../utility/date';

interface DateSelectorProps {
  date: Date;
}

export const DateSelector = memo(function DateSelector({ date }: DateSelectorProps) {
  const setDate = useSetRecoilState(dateAtom);
  const days = useMemo(() => getDayList(date), [date]);
  const calendarPadding = useMemo(() => getCalendarPadding(date), [date]);

  return (
    <>
      <div className={dateSelectorStyle}>
        <div className={calendarGrid}>
          {calendarPadding.map((_, i) => (
            <div key={`calendarPadding-${date}-${i}`} />
          ))}
          {days.map((day) => (
            <div key={`calendar-${date}-${day}`} className={dayCellStyle({ today: day === date.getDate() })} onClick={() => setDate(getNewDateSetDay(date, day))}>
              {day}
            </div>
          ))}
        </div>
      </div>
    </>
  );
});
