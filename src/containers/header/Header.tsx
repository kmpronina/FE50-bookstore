import React from 'react';
import { Divider, IconButton, Tooltip } from '@mui/material';
import {
  HeaderWrapper,
  HeaderStyled,
  HeaderTitle,
  InteractionArea,
} from './HeaderStyled';
import SearchInput from '#components/searchInput';
import {
  FavoriteBorderOutlined,
  LocalMallOutlined,
  Person2Outlined,
} from '@mui/icons-material';
import useThemeColors from '#hooks/useThemeColors';

const Header: React.FC = () => {
  const { iconButtonColor, inputBorderColor } = useThemeColors();
  return (
    <HeaderWrapper>
      <HeaderStyled>
        <HeaderTitle>bookstore</HeaderTitle>
        <SearchInput />
        <InteractionArea>
          <Tooltip title="Favorite books">
            <IconButton sx={{ color: iconButtonColor }}>
              <FavoriteBorderOutlined />
            </IconButton>
          </Tooltip>
          <Tooltip title="Books in cart">
            <IconButton sx={{ color: iconButtonColor, p: '10px' }}>
              <LocalMallOutlined />
            </IconButton>
          </Tooltip>
          <Tooltip title="User settings">
            <IconButton sx={{ color: iconButtonColor }}>
              <Person2Outlined />
            </IconButton>
          </Tooltip>
        </InteractionArea>
      </HeaderStyled>
      <Divider sx={{ width: '100%', color: inputBorderColor }} />
    </HeaderWrapper>
  );
};

export default Header;
