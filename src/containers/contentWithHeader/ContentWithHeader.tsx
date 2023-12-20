import React, { PropsWithChildren } from 'react';
import Header from '#containers/header';
import Footer from '#containers/footer';
import {
  CildrenWrapper,
  ContentWithHeaderStyled,
} from './ContentWithHeaderStyled';

interface Props extends PropsWithChildren {}

const ContentWithHeader: React.FC<Props> = (props) => {
  const { children } = props;
  return (
    <ContentWithHeaderStyled>
      <Header />
      <CildrenWrapper>{children}</CildrenWrapper>
      <Footer />
    </ContentWithHeaderStyled>
  );
};

export default ContentWithHeader;
