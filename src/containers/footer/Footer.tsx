import React from 'react';
import { Divider } from '@mui/material';
import useThemeColors from '#hooks/useThemeColors';
import { FooterInfo, FooterStyled } from './FooterStyled';
import { Copyright } from '@mui/icons-material';

const Footer: React.FC = () => {
  const { inputBorderColor, textColorGray } = useThemeColors();

  return (
    <>
      <Divider
        sx={{ width: '100%', color: inputBorderColor, marginBottom: '30px' }}
      />
      <FooterStyled>
        <FooterInfo $color={textColorGray}>
          <Copyright />
          {new Date().getFullYear()} Bookstore
        </FooterInfo>
        <FooterInfo $color={textColorGray}>All rights reserved</FooterInfo>
      </FooterStyled>
    </>
  );
};

export default Footer;
