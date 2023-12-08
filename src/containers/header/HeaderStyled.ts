import { black } from '#styles/colorsConstants';
import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  padding: 0 -15px;
  margin: 24px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeaderStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

export const HeaderTitle = styled.h1`
  all: unset;
  font-family: 'Bebas Neue';
  font-size: 36px;
  font-weight: 700;
  line-height: 44px;
  color: ${black};
`;

export const InteractionArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
