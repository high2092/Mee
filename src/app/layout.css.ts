import { style } from '@vanilla-extract/css';
import { NAV_BAR_HEIGHT } from '../constants/style';

export const layout = style({
  width: '100vw',
  height: '100vh',

  display: 'flex',
  flexDirection: 'column',
});

export const main = style({
  height: `calc(100vh - ${NAV_BAR_HEIGHT})`,
});
