import { style } from '@vanilla-extract/css';

export const dateSectionStyle = style({
  position: 'relative',
  padding: '1rem 0',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const dateStyle = style({
  fontSize: '1.5rem',

  cursor: 'pointer',
});

export const taskManagerStyle = style({
  height: '100%',

  display: 'flex',
  flexDirection: 'column',
});

export const taskListContainer = style({
  flexGrow: 1,

  display: 'flex',
});

export const timeStampStyle = style({
  padding: '0 0.5rem',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
});

export const taskListStyle = style({
  position: 'relative',
  flexGrow: 1,

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const dateSelectorContainerStyle = style({
  position: 'absolute',
  zIndex: 10,
  top: '3rem',
  left: '50%',
  transform: 'translateX(-50%)',
});
