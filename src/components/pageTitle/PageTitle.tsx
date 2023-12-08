import React from 'react';
import { PropsWithChildren } from 'react';
import { PageTitleStyled } from './PageTitleStyled';

interface Props extends PropsWithChildren {}

const PageTitle: React.FC<Props> = (props) => {
  const { children } = props;

  return <PageTitleStyled>{children}</PageTitleStyled>;
};

export default PageTitle;
