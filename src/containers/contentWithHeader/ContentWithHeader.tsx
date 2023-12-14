import React, { PropsWithChildren } from 'react';
import Header from '#containers/header';
import { ContentWithHeaderStyled } from './ContentWithHeaderStyled';
import Footer from '#containers/footer';

interface Props extends PropsWithChildren {}

const ContentWithHeader: React.FC<Props> = (props) => {
  const { children } = props;
  return (
    <ContentWithHeaderStyled>
      <Header />
      {children}
      <Footer />
    </ContentWithHeaderStyled>
  );
};

export default ContentWithHeader;
