import React, { useCallback } from 'react';
import { BookType } from '#models/bookTypes';
import {
  BookImage,
  BookTitle,
  BookTitleBold,
  BookTitleWrapper,
  SearchedBookCard,
  SearchedBookImageWrapper,
} from './SearchInputStyled';

const Highlight = (props: any) => {
  const { value, str } = props;
  if (!value) {
    return str;
  }
  const regexp = new RegExp(value, 'ig');
  const matchValue = str.match(regexp);
  if (matchValue) {
    return str.split(regexp).map((s: any, index: any, array: any) => {
      if (index < array.length - 1) {
        const matchWord = matchValue.shift();
        return (
          <>
            {s}
            <BookTitleBold>{matchWord}</BookTitleBold>
          </>
        );
      }
      return s;
    });
  }
  return str;
};

interface Props {
  book: BookType;
  searchValue: string;
}

const DropdownCard: React.FC<Props> = (props) => {
  const { book, searchValue } = props;

  const boldText = useCallback(
    (str: string) => {
      return <Highlight value={searchValue} str={str} />;
    },
    [searchValue]
  );

  return (
    <SearchedBookCard>
      <SearchedBookImageWrapper $bgColor={book.color}>
        <BookImage src={book.image} alt="book" />
      </SearchedBookImageWrapper>

      <BookTitleWrapper>
        <BookTitle>{boldText(book.title)}</BookTitle>
      </BookTitleWrapper>
    </SearchedBookCard>
  );
};

export default DropdownCard;
