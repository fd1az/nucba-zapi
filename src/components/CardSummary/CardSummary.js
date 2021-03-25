import styled from 'styled-components';
import { CustomButton } from '../UI';
import { formatPrice } from '../../utils';
import { useSelector } from 'react-redux';
import { Spinner } from '../UI/Spinner';

import {
  CardContainer,
  CardSummaryStyled,
  CardSummaryContent,
  UlCard,
  LiCard,
  RowCard,
  TotalCard,
} from './CardSummaryElements';

export const CardSummary = ({ isValid, envio, subTotal }) => {
  const { loading } = useSelector((state) => state.orders);

  return (
    <CardContainer>
      <CardSummaryStyled>
        <CardSummaryContent>
          {loading ? (
            <Spinner />
          ) : (
            <>
              <UlCard>
                <LiCard>
                  <p>Costo de Productos</p>
                  <span>{formatPrice(subTotal)}</span>
                </LiCard>
                <LiCard>
                  <p>Costo de Envío</p>
                  <span>{formatPrice(envio)}</span>
                </LiCard>
              </UlCard>
              <RowCard />
              <TotalCard>
                <h4>Total</h4>
                <h4>{formatPrice(envio + subTotal)}</h4>
              </TotalCard>
              <CustomButton w="100%" m="10px" disabled={isValid}>
                Pagar
              </CustomButton>
            </>
          )}
        </CardSummaryContent>
      </CardSummaryStyled>
    </CardContainer>
  );
};
