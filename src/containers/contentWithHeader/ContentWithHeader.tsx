import React, { PropsWithChildren } from 'react';
import Header from '#containers/header';
import { ContentWithHeaderStyled } from './ContentWithHeaderStyled';

interface Props extends PropsWithChildren {}

const ContentWithHeader: React.FC<Props> = (props) => {
  const { children } = props;
  return (
    <ContentWithHeaderStyled>
      <Header />
      {children}
    </ContentWithHeaderStyled>
  );
};

export default ContentWithHeader;
