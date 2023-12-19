import { style } from '@vanilla-extract/css';
import { modalStyle } from './Modal.css';

export const taskModalStyle = style([modalStyle]);

export const labelStyle = style({
  fontSize: '0.8rem',
  fontFamily: 'inherit',

  display: 'block',
});

export const timeInputSectionStyle = style({
  display: 'flex',
  justifyContent: 'space-between',
});

export const titleInputStyle = style({
  width: '14rem',
  marginBottom: '0.4rem',

  font: 'inherit',

  display: 'block',
});

export const timeInputStyle = style([titleInputStyle, { width: '4rem' }]);

export const textAreaStyle = style([
  titleInputStyle,
  {
    width: '14.1rem',
    height: '4rem',
    resize: 'none',
  },
]);

export const submitButtonStyle = style({
  float: 'right',
});
