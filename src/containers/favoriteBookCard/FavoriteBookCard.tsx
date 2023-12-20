import useThemeColors from '#hooks/useThemeColors';
import { ActiveBookInfoType } from '#models/BookType';
import {
  setActiveBookByISBN,
  setFavoriteBookToStore,
} from '#store/reducers/bookReducer';
import { useAppDispatch, useAppSelector } from '#store/store';
import { HeartBrokenOutlined } from '@mui/icons-material';
import { Divider, Rating, Tooltip } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  BookDescription,
  BookImg,
  BookNumbers,
  BookTitle,
  ImgWrapper,
  InfoWrapper,
  LikeButton,
  Price,
  FavoriteBookCardStyled,
  FavoriteBookCardWrapper,
  TextInfoWrapper,
} from './FavoriteBookCardStyled';

interface Props {
  book: ActiveBookInfoType;
}

const FavoriteBookCard: React.FC<Props> = (props) => {
  const { book } = props;

  const { favoriteBooks } = useAppSelector((state) => state.bookReducer);

  const dispatch = useAppDispatch();
  const navigation = useNavigate();

  const {
    textColorBlack,
    ratingColor,
    redColor,
    buttonBgHoverColor,
    textColorGray,
  } = useThemeColors();

  const removeLikeStatus = () => {
    const favoriteBooksClone: ActiveBookInfoType[] =
      structuredClone(favoriteBooks);
    dispatch(
      setFavoriteBookToStore(
        favoriteBooksClone.filter(
          (favoriteBook: ActiveBookInfoType) =>
            favoriteBook.isbn13 !== book.isbn13
        )
      )
    );
  };

  const handleGoToBookPage = () => {
    dispatch(setActiveBookByISBN(book.isbn13));
    navigation(`/${book.isbn13}`);
  };

  return (
    <FavoriteBookCardWrapper>
      <FavoriteBookCardStyled>
        <InfoWrapper onClick={handleGoToBookPage}>
          <ImgWrapper $bgColor={book.color}>
            <BookImg src={book.image} alt="Favorite book" />
          </ImgWrapper>
          <TextInfoWrapper>
            <BookTitle $color={textColorBlack}>{book.title}</BookTitle>
            <BookDescription $color={textColorGray}>
              {book.subtitle}
            </BookDescription>
            <BookNumbers>
              <Price $color={textColorBlack}>{book.price}</Price>
              <Rating
                value={Number(book.rating)}
                sx={{ color: ratingColor }}
                readOnly
              />
            </BookNumbers>
          </TextInfoWrapper>
        </InfoWrapper>
        <Tooltip title="Remove from favorites">
          <LikeButton
            $hoverColor={buttonBgHoverColor}
            $red={redColor}
            onClick={removeLikeStatus}
          >
            <HeartBrokenOutlined />
          </LikeButton>
        </Tooltip>
      </FavoriteBookCardStyled>
      <Divider sx={{ width: '100%', color: textColorGray }} />
    </FavoriteBookCardWrapper>
  );
};
export default FavoriteBookCard;
