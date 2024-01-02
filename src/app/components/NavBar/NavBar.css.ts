import { style } from '@vanilla-extract/css';
import { NAV_BAR_HEIGHT } from '../../../constants/style';

export const navBarStyle = style({
  height: NAV_BAR_HEIGHT,

  backgroundColor: 'white',

  display: 'flex',
  justifyContent: 'space-around',
});

export const navBarItem = style({
  flex: 1,

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});
