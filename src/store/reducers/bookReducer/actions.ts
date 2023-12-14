import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import {
  getActiveBookInfo,
  getBooksData,
  getSearchResultData,
} from '#api/bookService/bookService';
// import { ActiveBookInfoType, ResponseNewBooksDataType } from '#models/BookType';
// import { BookReducerEnum } from './actionTypes';

import {
  setActiveBookInfo,
  setNewBooksDataToStore,
  setSearchResultToStore,
} from '.';

export const getBooksDataAction =
  () => async (dispatch: Dispatch<AnyAction>) => {
    const booksData = await getBooksData();
    if (!booksData) return;
    const { error, total, books } = booksData;
    dispatch(
      setNewBooksDataToStore({ books: books, error: error, total: total })
    );
  };

export const getActiveBookDataAction =
  (isbn: string) => async (dispatch: Dispatch<AnyAction>) => {
    const activeBookData = await getActiveBookInfo(isbn);
    if (!activeBookData) return;
    dispatch(setActiveBookInfo(activeBookData));
  };

export const getSearchResultDataAction =
  (searchString: string, activePage: string) =>
  async (dispatch: Dispatch<AnyAction>) => {
    const searchResultData = await getSearchResultData(
      searchString,
      activePage
    );
    if (!searchResultData) return;
    dispatch(setSearchResultToStore(searchResultData));
  };

// export const setNewBooksDataToStore = (booksData: ResponseNewBooksDataType) => {
//   return {
//     type: BookReducerEnum.SET_BOOKS_DATA_TO_STORE,
//     booksData,
//   };
// };

// export const setActiveBookByISBN = (activeBookISBN: string) => {
//   return { type: BookReducerEnum.SET_ACTIVE_BOOK_BY_ISBN, activeBookISBN };
// };

// export const setActiveBookInfo = (activeBookInfo: ActiveBookInfoType) => {
//   return { type: BookReducerEnum.SET_ACTIVE_BOOK_INFO, activeBookInfo };
// };
