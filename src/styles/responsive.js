/* eslint import/prefer-default-export: 0 */
import { css } from 'styled-components';

export const sizes = {
  sm: `576px`,
  md: `768px`,
  lg: `992px`,
  xl: `1200px`,
  xxl: `1440px`,
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
