import React from 'react';
import PageTitle from '#components/pageTitle';
import GoBackButton from '#ui/goBackButton';
import { AccountModuleStyled } from './AccountModuleStyled';

const AccountModule: React.FC = () => {
  return (
    <AccountModuleStyled>
      <GoBackButton />
      <PageTitle>account</PageTitle>
    </AccountModuleStyled>
  );
};

export default AccountModule;
