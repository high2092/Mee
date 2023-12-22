import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const dateSelectorStyle = style({
  padding: '1rem',

  backgroundColor: 'white',
  borderRadius: '8px',
});

export const calendarGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
  gap: '4px',
});

export const dayCellStyle = recipe({
  base: {
    borderRadius: '4px',
    textAlign: 'right',

    cursor: 'pointer',
  },
  variants: {
    today: {
      true: {
        backgroundColor: 'orange',
      },
    },
  },
});
