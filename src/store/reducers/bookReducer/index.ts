import { createSlice } from '@reduxjs/toolkit';
import {
  ActiveBookInfoType,
  BookDataType,
  SearchResultDataType,
} from '#models/bookTypes';

type BookReducerType = {
  booksData: BookDataType;
  searchString: string | null;
  activeBookISBN: string | null;
  activeBookInfo: ActiveBookInfoType | null;
  searcResultData: SearchResultDataType | null;
  favoriteBooks: ActiveBookInfoType[];
  booksInCart: ActiveBookInfoType[];
};

const bookReducer = createSlice({
  name: 'book',
  initialState: {
    booksData: { books: [], error: '', total: '' },
    searchString: null,
    activeBookISBN: null,
    activeBookInfo: null,
    searcResultData: null,
    favoriteBooks: [],
    booksInCart: [],
  } as BookReducerType,

  reducers: {
    setNewBooksDataToStore: (state, action) => {
      state.booksData = action.payload;
    },
    setActiveBookByISBN: (state, action) => {
      state.activeBookISBN = action.payload;
    },
    setActiveBookInfo: (state, action) => {
      state.activeBookInfo = action.payload;
    },
    setSearchStringToStore: (state, action) => {
      state.searchString = action.payload;
    },
    setSearchResultToStore: (state, action) => {
      state.searcResultData = action.payload;
    },
    setFavoriteBookToStore: (state, action) => {
      state.favoriteBooks = action.payload;
    },
    setBookInCartToStore: (state, action) => {
      state.booksInCart = action.payload;
    },
  },
});

export const {
  setNewBooksDataToStore,
  setActiveBookByISBN,
  setActiveBookInfo,
  setSearchStringToStore,
  setSearchResultToStore,
  setFavoriteBookToStore,
  setBookInCartToStore,
} = bookReducer.actions;

export default bookReducer.reducer;

// const defaultState: BookReducerType = {
//   booksData: { books: [], error: '', total: '' },
//   searchString: '',
//   activeBookISBN: null,
//   activeBookInfo: null,
// };

// const bookReducer: Reducer<BookReducerType> = (
//   state = defaultState,
//   action
// ) => {
//   switch (action.type) {
//     case BookReducerEnum.SET_BOOKS_DATA_TO_STORE:
//       return {
//         ...state,
//         booksData: action.payload,
//       };

//     case BookReducerEnum.SET_ACTIVE_BOOK_BY_ISBN:
//       return {
//         ...state,
//         activeBookISBN: action.activeBookISBN,
//       };

//     case BookReducerEnum.SET_ACTIVE_BOOK_INFO:
//       return {
//         ...state,
//         activeBookInfo: action.activeBookInfo,
//       };

//     default:
//       return { ...state };
//   }
// };

// export default bookReducer;
