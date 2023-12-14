import PageTitle from '#components/pageTitle';
import Pagination from '#components/pagination';
import BookCard from '#containers/bookCard';
import { BookType } from '#models/BookType';
import { UpdateBooksByDataType } from '#models/UpdateBooksType';
import { getSearchResultDataAction } from '#store/reducers/bookReducer/actions';
import { useAppDispatch, useAppSelector } from '#store/store';
import React, { useEffect, useState } from 'react';
import {
  SearchedBooksWrapper,
  SearchResultModuleStyled,
} from './SearchResultModuleStyled';

const SearchResultModule: React.FC = () => {
  const { searchString, searcResultData } = useAppSelector(
    (state) => state.bookReducer
  );
  const dispatch = useAppDispatch();
  const [activePage, setActivePage] = useState<string>('1');
  const [currentSearchString, setCurrentSearchString] = useState<string>('');
  const booksPerPage = 10;

  // useEffect(() => {
  //   if (searchString !== currentSearchString) {
  //     dispatch(getSearchResultDataAction(searchString, '1'));
  //     setActivePage('1');
  //     setCurrentSearchString(searchString);
  //   } else {
  //     dispatch(getSearchResultDataAction(searchString, activePage));
  //   }
  // }, [searchString]);

  const updateBooks = (data: UpdateBooksByDataType) => {
    const { currentPage } = data;
    setActivePage(String(currentPage));
    dispatch(getSearchResultDataAction(searchString, String(currentPage)));
  };

  const handlePageSelect = (newPage: number) => {
    updateBooks({ currentPage: newPage });
  };
  return (
    <>
      {searcResultData === null ? (
        'Server error. Please try again later'
      ) : (
        <SearchResultModuleStyled>
          <PageTitle>'{searchString}' search results</PageTitle>
          {searcResultData.books.length === 0 &&
            `There are no books for the search term '${searchString}'`}
          {searcResultData.books.length > 0 && (
            <SearchedBooksWrapper>
              {searcResultData.books.map((book: BookType) => (
                <BookCard key={book.isbn13} book={book} />
              ))}
            </SearchedBooksWrapper>
          )}
          <Pagination
            onPageChange={handlePageSelect}
            activePage={Number(activePage)}
            totalBooksCount={Number(searcResultData.total)}
            rowsPerPage={booksPerPage}
          />
        </SearchResultModuleStyled>
      )}
    </>
  );
};

export default SearchResultModule;
