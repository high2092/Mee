import { style } from '@vanilla-extract/css';

export const centeredModalPositionStyle = style({
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
});

export const dimmedStyle = style({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
});

export const modalStyle = style({
  padding: '2rem',

  backgroundColor: 'white',
  borderRadius: '1rem',
});
