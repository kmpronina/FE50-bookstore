import React from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { Rating } from '@mui/material';
import useThemeColors from '#hooks/useThemeColors';
import { useAppDispatch } from '#store/store';

import { BookType } from '#models/BookType';
import {
  BookCardStyled,
  BookImg,
  BookPrice,
  BookSubtitle,
  BookTitle,
  ClickableArea,
  ImgWrapper,
  InfoArea,
} from './BookCardStyled';
import { setActiveBookByISBN } from '#store/reducers/bookReducer';

interface Props {
  book: BookType;
}
const BookCard: React.FC<Props> = (props) => {
  const { book } = props;
  const { ratingColor } = useThemeColors();
  const navigation: NavigateFunction = useNavigate();
  const dispatch = useAppDispatch();

  const handleGoToBookPage = () => {
    dispatch(setActiveBookByISBN(book.isbn13));
    navigation(`/${book.isbn13}`);
  };

  return (
    <BookCardStyled>
      <ClickableArea onClick={handleGoToBookPage}>
        <ImgWrapper $color={book.color}>
          <BookImg src={book.image} />
        </ImgWrapper>
        <BookTitle>{book.title}</BookTitle>
        <BookSubtitle>{book.subtitle}</BookSubtitle>
      </ClickableArea>
      <InfoArea>
        <BookPrice>{book.price}</BookPrice>
        <Rating value={book.rating} sx={{ color: ratingColor }} readOnly />
      </InfoArea>
    </BookCardStyled>
  );
};

export default BookCard;
