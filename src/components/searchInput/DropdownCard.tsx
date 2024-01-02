import React, { useCallback } from 'react';
import useThemeColors from '#hooks/useThemeColors';
import { BookType } from '#models/bookTypes';
import {
  BookImage,
  BookTitle,
  BookTitleBold,
  BookTitleWrapper,
  SearchedBookCard,
  SearchedBookImageWrapper,
} from './SearchInputStyled';

const Highlight = (props: { value: string; str: string }) => {
  const { value, str } = props;
  if (!value) {
    return <></>;
  }
  const regexp = new RegExp(value, 'ig');
  const matchValue = str.match(regexp);
  if (matchValue) {
    return (
      <>
        {str.split(regexp).map((s: string, index: number, array: string[]) => {
          if (index < array.length - 1) {
            const matchWord = matchValue.shift();
            return (
              <>
                {s}
                <BookTitleBold>{matchWord}</BookTitleBold>
                {str}
              </>
            );
          }
          return <></>;
        })}
      </>
    );
  }
  return <></>;
};

interface Props {
  book: BookType;
  searchValue: string;
}

const DropdownCard: React.FC<Props> = (props) => {
  const { book, searchValue } = props;

  const { inputBgActiveColor } = useThemeColors();

  const boldText = useCallback(
    (str: string) => {
      return <Highlight value={searchValue} str={str} />;
    },
    [searchValue]
  );

  return (
    <SearchedBookCard $bgColor={inputBgActiveColor}>
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
