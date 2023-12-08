import { Reducer } from '@reduxjs/toolkit';
import { BookReducerEnum } from './actionTypes';
import { BookType, BookTypeFromResponse } from '#models/BookType';

type BookReducerType = {
  // newBooksData: ResponseNewBooksDataType;
  books: BookType[];
  total: string
};

const defaultState: BookReducerType = {
  // newBooksData: { books: [], error: '', total: '' },
  books: [],
  total: ''
};

const bookReducer: Reducer<BookReducerType> = (
  state = defaultState,
  action
) => {
  switch (action.type) {
    // case BookReducerEnum.SET_BOOKS_DATA_TO_STORE:
    //   return {
    //     ...state,
    //     newBooksData: action.newBooks,
    //   };
    case BookReducerEnum.SET_BOOKS_TO_STORE:
      // return {
      //   ...state,
      //   newBooksData: { ...state.newBooksData, books: action.newBooksData },
      // };
      return {
        ...state,
        books: action.books,
      };
    default:
      return { ...state };
  }
};

export default bookReducer;
