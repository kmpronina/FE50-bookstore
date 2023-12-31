import React, { BaseSyntheticEvent, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
import { BookType } from '#models/bookTypes';
import { RouterLocationsEnum } from '#router/Router';
import {
  DropWrapper,
  GoToSearchResultButton,
  SearchedBooksDropWrapper,
  SearchInputStyled,
  SearchWrapper,
} from './SearchInputStyled';
import DropdownCard from './DropdownCard';

const SearchInput: React.FC = () => {
  const { searcResultData, searchString } = useAppSelector(
    (state) => state.bookReducer
  );

  const dispatch = useAppDispatch();
  const navigation = useNavigate();

  const { inputBgActiveColor, inputBorderColor, inputBgColor, inputTextColor } =
    useThemeColors();

  const [searchValue, setSearchValue] = useState<string>('');
  const [searchedBooks, setSearchedBooks] = useState<BookType[]>([]);
  const [isDropdownActive, setIsDropdownActive] = useState<boolean>(false);

  const debouncedValue = useDebounce(searchValue);

  useEffect(() => {
    if (!debouncedValue) return;
    dispatch(setSearchStringToStore(debouncedValue));
  }, [debouncedValue]);

  useEffect(() => {
    if (!searchString) return;
    dispatch(getSearchResultDataAction(searchString, '1'));
  }, [searchString]);

  useEffect(() => {
    searcResultData && setSearchedBooks(searcResultData.books);
  }, [searcResultData]);

  const handleInputChange = (e: BaseSyntheticEvent) => {
    if (!e.target.value) return;
    setSearchValue(e.target.value);
    setIsDropdownActive(true);
  };

  const handleSearchSubmit = () => {
    setIsDropdownActive(false);
    navigation(RouterLocationsEnum.search);
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
          value={searchValue}
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search"
          onChange={handleInputChange}
        />
        <IconButton
          type="button"
          sx={{ p: '10px' }}
          aria-label="search"
          disabled={!(searchValue.length > 0)}
          onClick={handleSearchSubmit}
        >
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
                    setSearchValue(''),
                  ]}
                  style={{ all: 'unset' }}
                  key={book.isbn13}
                >
                  {searchString && (
                    <DropdownCard
                      key={book.isbn13}
                      book={book}
                      searchValue={searchString}
                    />
                  )}
                </Link>
              ))}
            </SearchedBooksDropWrapper>
          )}{' '}
          <GoToSearchResultButton
            $textColor={inputTextColor}
            $bgColor={inputBgColor}
            $hoverBgColor={inputBgActiveColor}
            onClick={handleSearchSubmit}
          >
            all results
          </GoToSearchResultButton>
        </DropWrapper>
      )}
    </SearchWrapper>
  );
};
export default SearchInput;
