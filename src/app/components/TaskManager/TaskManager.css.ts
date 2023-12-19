import { style } from '@vanilla-extract/css';

export const taskManagerStyle = style({
  position: 'relative',
  height: '90vh',
  padding: '0.5rem',

  display: 'flex',
});

export const timeStampStyle = style({
  height: '100%',
  paddingRight: '0.5rem',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
});

export const taskListStyle = style({
  position: 'relative',
  flexGrow: 1,
});
