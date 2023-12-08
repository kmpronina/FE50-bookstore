import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import { getBooks } from '#api/bookService/bookService';
import { BookType } from '#models/BookType';
import { BookReducerEnum } from './actionTypes';

export const getBookDataAction =
  () => async (dispatch: Dispatch<AnyAction>) => {
    const data = await getBooks();
    if (!data) return;
    // const { error, total, books } = data;

    // if (books) return;
    dispatch(setNewBooksToStore(data));
    // dispatch(setNewBooksDataToStore({ books: books, error: error, total: total }));

    // dispatch(setFavoriteBooksToStore(data.filter((book) => book.isLiked)));
  };

// export const setNewBooksDataToStore = (books: BookType[]) => {
//   return {
//     type: BookReducerEnum.SET_BOOKS_DATA_TO_STORE,
//     books,
//   };
// };

export const setNewBooksToStore = (books: BookType[]) => {
  return {
    type: BookReducerEnum.SET_BOOKS_TO_STORE,
    books,
  };
};
