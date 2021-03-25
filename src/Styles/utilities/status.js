import { theme } from './Colors';
import { css } from 'styled-components';

export const status = (type) => {
  switch (type) {
    case 'success':
      return css`
        color: ${theme.success};
        background-color: ${theme.bgSuccess};
      `;
    case 'pending':
      return css`
        color: ${theme.pending};
        background-color: ${theme.bgPending};
      `;
    case 'cancelled':
      return css`
        color: ${theme.canceled};
        background-color: ${theme.bgCanceled};
      `;
    default:
      return css`
        color: ${theme.pending};
        background-color: ${theme.bgPending};
      `;
  }
};
