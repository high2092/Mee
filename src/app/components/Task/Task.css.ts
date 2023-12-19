import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const taskStyle = style({
  position: 'absolute',
  width: '95%',

  borderRadius: '1px',
  fontSize: '0.6rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const taskTitleStyle = recipe({
  variants: {
    isShort: {
      true: {
        position: 'absolute',
        left: '100.2%',
        width: 'max-content',
      },
    },
  },
});
