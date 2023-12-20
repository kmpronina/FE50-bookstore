import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Divider, IconButton, Tooltip } from '@mui/material';
import {
  FavoriteBorderOutlined,
  LocalMallOutlined,
  Person2Outlined,
} from '@mui/icons-material';
import { useAppSelector } from '#store/store';
import useThemeColors from '#hooks/useThemeColors';
import { RouterLocationsEnum } from '#router/Router';
import SearchInput from '#components/searchInput';
import {
  HeaderWrapper,
  HeaderStyled,
  HeaderTitle,
  InteractionArea,
} from './HeaderStyled';

const Header: React.FC = () => {
  const { activeUser } = useAppSelector((state) => state.userReducer);

  const navigation = useNavigate();

  const { iconButtonColor, inputBorderColor } = useThemeColors();

  return (
    <HeaderWrapper>
      <HeaderStyled>
        <Tooltip title="Go to main page">
          <HeaderTitle onClick={() => navigation(RouterLocationsEnum.main)}>
            bookstore
          </HeaderTitle>
        </Tooltip>{' '}
        <SearchInput />
        <InteractionArea>
          <Tooltip
            title={
              activeUser
                ? 'Favorite books'
                : 'Click ang sing in to use favorites'
            }
          >
            <IconButton
              onClick={() => {
                navigation(RouterLocationsEnum.favorite);
              }}
              sx={{ color: iconButtonColor }}
            >
              <FavoriteBorderOutlined />
            </IconButton>
          </Tooltip>
          <Tooltip
            title={
              activeUser
                ? 'Books in your cart'
                : 'Click ang sing in to use cart'
            }
          >
            <IconButton
              onClick={() => {
                navigation(RouterLocationsEnum.cart);
              }}
              sx={{ color: iconButtonColor, p: '10px' }}
            >
              <LocalMallOutlined />
            </IconButton>
          </Tooltip>
          <Tooltip
            title={
              activeUser ? 'User settings' : 'Click ang sing in to use settings'
            }
          >
            <IconButton
              onClick={() => {
                navigation(RouterLocationsEnum.account);
              }}
              sx={{ color: iconButtonColor }}
            >
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
