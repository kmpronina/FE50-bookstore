import React from 'react';
import { useNavigate } from 'react-router-dom';
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
import { RouterLocationsEnum } from '#router/Router';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const { iconButtonColor, inputBorderColor } = useThemeColors();

  return (
    <HeaderWrapper>
      <HeaderStyled>
        <Tooltip title="Go to main page">
          <HeaderTitle onClick={() => navigate(RouterLocationsEnum.main)}>
            bookstore
          </HeaderTitle>
        </Tooltip>
        <SearchInput />
        <InteractionArea>
          <Tooltip title="Favorite books">
            <IconButton
              onClick={() => {
                navigate(RouterLocationsEnum.favorite);
              }}
              sx={{ color: iconButtonColor }}
            >
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
      <Divider
        sx={{ width: '100%', color: inputBorderColor, marginBottom: '20px' }}
      />
    </HeaderWrapper>
  );
};

export default Header;
