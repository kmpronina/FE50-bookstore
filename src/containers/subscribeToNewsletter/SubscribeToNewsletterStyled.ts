import styled from 'styled-components';
import { purple, black, gray60, gray80, white } from '#styles/colorsConstants';

export const SubscribeToNewsletterStyled = styled.div`
  background-color: ${purple};
  width: calc(100% - 128px);
  padding: 56px 64px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-bottom: 50px;
`;

export const SubscribeTitle = styled.span`
  color: ${black};
  font-size: 40px;
  font-family: 'Bebas Neue';
  font-weight: 700;
  line-height: 60px;
`;

export const SubscribeSubtitle = styled.span`
  font-size: 18px;
  color: ${gray60};
  font-weight: 400;
  line-height: 28px;
`;

export const EmailArea = styled.div`
  width: 100%;
  border-radius: 4px;
  display: flex;
  gap: 0px;
`;

export const EmailInput = styled.input`
 all:unset;
 background-color: ${white};
border: 1px solid ${gray60};
border-right: none;
padding: 15px;
border-radius: 0px;
font-size: 14px;
font-weight: 400;
line-height: 24px;
width: calc(100% - 147px - 128px);
&:focus {
border: 1px solid ${gray80}
},
`;
