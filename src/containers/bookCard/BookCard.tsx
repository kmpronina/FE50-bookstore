import React from 'react';
import { BookType } from '#models/BookType';
import {
  BookCardStyled,
  BookImg,
  BookPrice,
  BookSubtitle,
  BookTitle,
  ImgWrapper,
  InfoArea,
} from './BookCardStyled';
import { Rating } from '@mui/material';
// import useThemeColors from '#hooks/useThemeColors';

interface Props {
  book: BookType;
}
const BookCard: React.FC<Props> = (props) => {
  const { book } = props;
  // const { textColorGray } = useThemeColors();

  return (
    <BookCardStyled>
      <ImgWrapper color={book.color}>
        <BookImg src={book.image} />
      </ImgWrapper>
      <BookTitle>{book.title}</BookTitle>
      <BookSubtitle>{book.subtitle}</BookSubtitle>
      <InfoArea>
        <BookPrice>{book.price}</BookPrice>
        <Rating value={book.rating} readOnly />
      </InfoArea>
    </BookCardStyled>
  );
};

export default BookCard;
