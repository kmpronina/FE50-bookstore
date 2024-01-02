import React, { PropsWithChildren } from 'react';
import useThemeColors from '#hooks/useThemeColors';
import Header from '#containers/header';
import Footer from '#containers/footer';
import {
  ChildrenWrapper,
  ContentWithHeaderStyled,
} from './ContentWithHeaderStyled';

interface Props extends PropsWithChildren {}

const ContentWithHeader: React.FC<Props> = (props) => {
  const { children } = props;

  const { textColorBlack, backgroundColor } = useThemeColors();

  return (
    <ContentWithHeaderStyled $color={textColorBlack} $bgColor={backgroundColor}>
      <Header />
      <ChildrenWrapper>{children}</ChildrenWrapper>
      <Footer />
    </ContentWithHeaderStyled>
  );
};

export default ContentWithHeader;
