import { style } from '@vanilla-extract/css';

export const newTaskButtonStyle = style({
  position: 'absolute',
  bottom: '1rem',
  right: '1rem',

  cursor: 'pointer',

  transition: 'transform 0.5s ease',

  ':hover': {
    transform: 'scale(1.06)',
  },
});
