import React from 'react';
import { ScrollingCarousel } from '@trendyol-js/react-carousel';
import useThemeColors from '#hooks/useThemeColors';
import { BookType } from '#models/bookTypes';
import { useAppSelector } from '#store/store';
import BookCard from '#containers/bookCard';
import { SliderStyled, SliderTitle } from './SliderStyled';

const Slider: React.FC = () => {
  const { booksData, activeBookISBN } = useAppSelector(
    (state) => state.bookReducer
  );
  const { textColorBlack } = useThemeColors();

  return (
    <SliderStyled>
      <SliderTitle $color={textColorBlack}>similar books</SliderTitle>
      {booksData && (
        <ScrollingCarousel>
          {booksData.books
            .filter((book: BookType) => book.isbn13 !== activeBookISBN)
            .map((book: BookType) => (
              <BookCard key={book.isbn13} book={book} />
            ))}
        </ScrollingCarousel>
      )}
    </SliderStyled>
  );
};

export default Slider;
