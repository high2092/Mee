import { style } from '@vanilla-extract/css';

export const labelManagerStyle = style({
  height: '100%',

  display: 'flex',
  flexDirection: 'column',

  overflowY: 'scroll',
});

export const labelStyle = style({
  padding: '1rem',
  margin: '2px',

  borderRadius: '8px',

  ':hover': {
    fontWeight: 'bold',
  },
});
