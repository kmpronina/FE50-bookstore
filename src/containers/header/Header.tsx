import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IconButton, Tooltip } from '@mui/material';
import {
  FavoriteBorderOutlined,
  LocalMallOutlined,
  Person2Outlined,
} from '@mui/icons-material';
import useThemeColors from '#hooks/useThemeColors';
import { useAppSelector } from '#store/store';
import { RouterLocationsEnum } from '#router/Router';
import SearchInput from '#components/searchInput';
import SmallScreenMenu from './SmallScreenMenu';
import Divider from '#ui/divider';
import {
  HeaderWrapper,
  HeaderStyled,
  HeaderTitle,
  InteractionArea,
  InputWrapperForBigScreen,
} from './HeaderStyled';

const Header: React.FC = () => {
  const { activeUser } = useAppSelector((state) => state.userReducer);

  const navigation = useNavigate();

  const { iconButtonColor, textColorBlack } = useThemeColors();

  return (
    <HeaderWrapper>
      <HeaderStyled>
        <Tooltip title="Go to main page">
          <HeaderTitle
            onClick={() => navigation(RouterLocationsEnum.main)}
            $color={textColorBlack}
          >
            bookstore
          </HeaderTitle>
        </Tooltip>
        <InputWrapperForBigScreen>
          <SearchInput />
        </InputWrapperForBigScreen>
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
        <SmallScreenMenu />
      </HeaderStyled>
      <Divider marginBottom={'20px'} />
    </HeaderWrapper>
  );
};

export default Header;
