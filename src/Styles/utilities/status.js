import {
  colorCanceled,
  colorPending,
  colorSucces,
  bgCanceled,
  bgPending,
  bgSucces,
} from './Colors';
import { css } from 'styled-components';

export const status = (type) => {
  switch (type) {
    case 'success':
      return css`
        color: ${colorSucces};
        background-color: ${bgSucces};
      `;
    case 'pending':
      return css`
        color: ${colorPending};
        background-color: ${bgPending};
      `;
    case 'cancelled':
      return css`
        color: ${colorCanceled};
        background-color: ${bgCanceled};
      `;
    default:
      return css`
        color: ${colorPending};
        background-color: ${bgPending};
      `;
  }
};
