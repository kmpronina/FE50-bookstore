import React from 'react';
import { Divider, Rating } from '@mui/material';
import { ActiveBookInfoType } from '#models/bookTypes';
import {
  PriceCard as PriceCardWrapper,
  Price,
  NumbersLine,
  DetailArea,
  DetailRow,
  DetailName,
  DetailValue,
  LinkToChapter,
} from './BookInfoStyled';
import useThemeColors from '#hooks/useThemeColors';
import Button from '#ui/button';
import { useAppDispatch, useAppSelector } from '#store/store';
import { setBookInCartToStore } from '#store/reducers/bookReducer';

interface Props {
  book: ActiveBookInfoType;
  linkToBook: string | null;
  isInCartStatus: boolean;
}

const PriceCard: React.FC<Props> = (props) => {
  const { book, linkToBook, isInCartStatus } = props;

  const { booksInCart } = useAppSelector((state) => state.bookReducer);
  const { activeUser } = useAppSelector((state) => state.userReducer);

  const dispatch = useAppDispatch();

  const {
    titleColor,
    ratingColor,
    textColorBlack,
    textColorGray,
    inputBorderColor,
  } = useThemeColors();

  const handleAddToCart = () => {
    if (!book) return;

    const booksInCartClone: ActiveBookInfoType[] = structuredClone(booksInCart);
    if (isInCartStatus) {
      dispatch(
        setBookInCartToStore(
          booksInCartClone.filter(
            (item: ActiveBookInfoType) => item.isbn13 !== book.isbn13
          )
        )
      );
    } else {
      booksInCartClone.unshift(book);
      dispatch(setBookInCartToStore(booksInCartClone));
    }
  };

  const detailsNames = book && [
    { name: 'author', value: book.authors },
    { name: 'publisher', value: book.publisher },
    { name: 'year', value: book.year },
    { name: 'pages', value: book.pages },
  ];

  return (
    <PriceCardWrapper>
      <Divider
        sx={{
          width: '100%',
          color: inputBorderColor,
          marginBottom: '15px',
        }}
      />
      <NumbersLine>
        <Price $color={titleColor}>{book.price}</Price>
        <Rating
          value={Number(book.rating)}
          sx={{ color: ratingColor }}
          readOnly
        />
      </NumbersLine>
      <DetailArea>
        {detailsNames &&
          detailsNames.map((item) => (
            <DetailRow key={item.name}>
              <DetailName $color={textColorGray}>{item.name}</DetailName>
              <DetailValue $color={textColorBlack}>{item.value}</DetailValue>
            </DetailRow>
          ))}
      </DetailArea>

      <Button
        type="button"
        width="calc(100% - 80px)"
        onClick={handleAddToCart}
        disabled={!activeUser}
      >
        {!activeUser
          ? 'sign in to use your cart'
          : isInCartStatus
          ? 'remove from cart'
          : 'add to cart'}
      </Button>
      {linkToBook !== null && (
        <LinkToChapter href={linkToBook} $color={textColorBlack}>
          prewiew book
        </LinkToChapter>
      )}
    </PriceCardWrapper>
  );
};

export default PriceCard;
