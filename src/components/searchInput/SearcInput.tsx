import React, { BaseSyntheticEvent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IconButton, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import useThemeColors from '#hooks/useThemeColors';
import { useDebounce } from '#hooks/useDebounce';
import { useAppDispatch, useAppSelector } from '#store/store';
import {
  setActiveBookByISBN,
  setSearchStringToStore,
} from '#store/reducers/bookReducer';
import { getSearchResultDataAction } from '#store/reducers/bookReducer/actions';
import { BookType } from '#models/BookType';
import {
  BookImage,
  BookTitle,
  DropWrapper,
  SearchedBookCard,
  SearchedBookImageWrapper,
  SearchedBooksDropWrapper,
  SearchInputStyled,
  SearchWrapper,
} from './SearchInputStyled';

const SearchInput: React.FC = () => {
  const { searcResultData, searchString } = useAppSelector(
    (state) => state.bookReducer
  );
  const dispatch = useAppDispatch();

  const { inputBgActiveColor, inputBorderColor, inputBgColor, inputTextColor } =
    useThemeColors();

  const [searchValue, setSearchValue] = useState<string>('');
  const [searchedBooks, setSearchedBooks] = useState<BookType[]>([]);
  const [isDropdownActive, setIsDropdownActive] = useState<boolean>(false);

  const debouncedValue = useDebounce(searchValue);

  useEffect(() => {
    console.log('debouced', debouncedValue);
    dispatch(setSearchStringToStore(debouncedValue));
  }, [debouncedValue, dispatch]);

  useEffect(() => {
    dispatch(getSearchResultDataAction(searchString, '1'));
  }, [searchString]);

  useEffect(() => {
    searcResultData && setSearchedBooks(searcResultData.books);
  }, [searcResultData]);

  const handleInputChange = (e: BaseSyntheticEvent) => {
    setSearchValue(e.target.value);
    setIsDropdownActive(true);
    console.log('serached', searchValue);
  };

  return (
    <SearchWrapper>
      <SearchInputStyled
        $inputBorderColor={inputBorderColor}
        $inputTextColor={inputTextColor}
        $isActive={false}
        $inputBgActiveColor={inputBgActiveColor}
        $inputBgColor={inputBgColor}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search"
          onChange={handleInputChange}
        />
        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </SearchInputStyled>
      {isDropdownActive && (
        <DropWrapper $bgColor={inputBgColor} $textColor={inputTextColor}>
          {searchedBooks.length === 0 && (
            <>There are no books for the search term '{searchString}'</>
          )}

          {searchedBooks.length > 0 && (
            <SearchedBooksDropWrapper>
              {searchedBooks.slice(0, 5).map((book: BookType) => (
                <Link
                  to={`/${book.isbn13}`}
                  onClick={() => [
                    setIsDropdownActive(false),
                    dispatch(setActiveBookByISBN(book.isbn13)),
                  ]}
                  style={{ all: 'unset' }}
                >
                  <SearchedBookCard>
                    <SearchedBookImageWrapper $bgColor={book.color}>
                      <BookImage src={book.image} alt="book" />
                    </SearchedBookImageWrapper>
                    <BookTitle>{book.title}</BookTitle>
                  </SearchedBookCard>
                </Link>
              ))}
            </SearchedBooksDropWrapper>
          )}
        </DropWrapper>
      )}
    </SearchWrapper>
  );
};
export default SearchInput;
