/* eslint import/prefer-default-export: 0 */
import { css } from 'styled-components';

export const sizes = {
  sm: '576',
  md: '768',
  lg: '992',
  xl: '1200',
  xxl: '1440',
};

// Iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});
