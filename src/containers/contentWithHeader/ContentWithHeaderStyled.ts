import styled from 'styled-components';

export const ContentWithHeaderStyled = styled.div`
  padding: 0 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`;

export const CildrenWrapper = styled.div`
  /* 100vh - header - footer- divider */
  min-height: calc(100vh - 139px - 59px - 31px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
