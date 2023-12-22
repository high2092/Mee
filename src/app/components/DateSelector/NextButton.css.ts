import { style } from '@vanilla-extract/css';
import { svgButtonStyle } from '../SVGButton/SVGButton.css';

export const nextButtonStyle = style([svgButtonStyle, { margin: '0 0.2rem' }]);
