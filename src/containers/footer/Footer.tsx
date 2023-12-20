import React from 'react';
import { Divider } from '@mui/material';
import useThemeColors from '#hooks/useThemeColors';
import { FooterInfo, FooterStyled } from './FooterStyled';
import { Copyright } from '@mui/icons-material';

const Footer: React.FC = () => {
  const { inputBorderColor } = useThemeColors();

  return (
    <>
      <Divider
        sx={{ width: '100%', color: inputBorderColor, marginBottom: '30px' }}
      />
      <FooterStyled>
        <FooterInfo>
          <Copyright />
          {new Date().getFullYear()} Bookstore
        </FooterInfo>
        <FooterInfo>All rights reserved</FooterInfo>
      </FooterStyled>
    </>
  );
};

export default Footer;
