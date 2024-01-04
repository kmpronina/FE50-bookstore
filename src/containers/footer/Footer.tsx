import React from 'react';
import { Copyright } from '@mui/icons-material';
import useThemeColors from '#hooks/useThemeColors';
import Divider from '#ui/divider';
import { FooterInfo, FooterStyled } from './FooterStyled';

const Footer: React.FC = () => {
  const { textColorGray } = useThemeColors();

  return (
    <>
      <Divider />
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
