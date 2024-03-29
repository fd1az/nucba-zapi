import { css } from 'styled-components';

export const fixed = ({ x = 0, y = 0, yProp = 'top', xProp = 'left' } = {}) => {
  return css`
    position: sticky;
    ${yProp}: ${y};
    ${xProp}: ${x};
  `;
};
