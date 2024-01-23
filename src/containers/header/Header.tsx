import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Badge, IconButton, Tooltip } from '@mui/material';
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
  NavButtonWrapper,
} from './HeaderStyled';

const Header: React.FC = () => {
  const { activeUser } = useAppSelector((state) => state.userReducer);
  const { favoriteBooks, booksInCart } = useAppSelector(
    (state) => state.bookReducer
  );

  const navigation = useNavigate();

  const { iconButtonColor, textColorBlack } = useThemeColors();

  return (
    <HeaderWrapper>
      <HeaderStyled>
        <Tooltip
          title={document.location.pathname !== '/' ? 'Go to main page' : ''}
        >
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
          <NavButtonWrapper
            onClick={() => {
              navigation(RouterLocationsEnum.favorite);
            }}
          >
            <Tooltip
              title={
                activeUser
                  ? 'Favorite books'
                  : 'Click ang sing in to use favorites'
              }
            >
              <IconButton sx={{ color: iconButtonColor }}>
                <Badge color="default" badgeContent={favoriteBooks.length}>
                  <FavoriteBorderOutlined />
                </Badge>
              </IconButton>
            </Tooltip>
          </NavButtonWrapper>
          <NavButtonWrapper
            onClick={() => {
              navigation(RouterLocationsEnum.cart);
            }}
          >
            <Tooltip
              title={
                activeUser
                  ? 'Books in your cart'
                  : 'Click ang sing in to use cart'
              }
            >
              <IconButton sx={{ color: iconButtonColor, p: '10px' }}>
                <Badge color="default" badgeContent={booksInCart.length}>
                  <LocalMallOutlined />
                </Badge>
              </IconButton>
            </Tooltip>
          </NavButtonWrapper>
          <NavButtonWrapper
            onClick={() => {
              navigation(RouterLocationsEnum.account);
            }}
          >
            <Tooltip
              title={
                activeUser
                  ? 'User settings'
                  : 'Click ang sing in to use settings'
              }
            >
              <IconButton sx={{ color: iconButtonColor }}>
                <Person2Outlined />
              </IconButton>
            </Tooltip>
          </NavButtonWrapper>
        </InteractionArea>
        <SmallScreenMenu />
      </HeaderStyled>
      <Divider marginBottom={'20px'} />
    </HeaderWrapper>
  );
};

export default Header;
