import styled from 'styled-components';
import { gray60 } from '#styles/colorsConstants';

export const FooterStyled = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 35px;
`;

export const FooterInfo = styled.span`
  color: ${gray60};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
`;
