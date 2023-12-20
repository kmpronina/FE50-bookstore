import useThemeColors from '#hooks/useThemeColors';
import React from 'react';
import { PropsWithChildren } from 'react';
import { PageTitleStyled, PageTitleWrapper } from './PageTitleStyled';

interface Props extends PropsWithChildren {}

const PageTitle: React.FC<Props> = (props) => {
  const { children } = props;
  const { textColorBlack } = useThemeColors();

  return (
    <PageTitleWrapper>
      <PageTitleStyled $textcolor={textColorBlack}>{children}</PageTitleStyled>
    </PageTitleWrapper>
  );
};

export default PageTitle;
