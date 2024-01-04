import {
  ActiveBookInfoFromResponseType,
  ActiveBookInfoType,
  BookDataType,
  BookTypeFromResponse,
  ResponseNewBooksDataType,
  SearchResultDataType,
  ResponseSearchResultDataType,
} from '#models/bookTypes';
import { api, mockSubtitle } from './constants';

const random = () => {
  return Math.floor(Math.random() * 10);
};

export const getBooksData = async (): Promise<BookDataType | false> => {
  const rawData = await fetch(`${api}new`);
  const data: ResponseNewBooksDataType = await rawData.json();
  if (!data) return false;
  const { error, total, books } = data;

  const customData: BookDataType = {
    error: error,
    total: total,
    books: books.map((book: BookTypeFromResponse) => ({
      title: book.title,
      subtitle: book.subtitle ? book.subtitle : mockSubtitle,
      isbn13: book.isbn13,
      price: book.price,
      image: book.image,
      url: book.url,
      rating: random(),
      color:
        random() > 3
          ? 'blue'
          : random() > 5
          ? 'green'
          : random() > 7
          ? 'green'
          : 'purple',
    })),
  };
  return customData;
};

export const getActiveBookInfo = async (
  isbn: string
): Promise<ActiveBookInfoType | false> => {
  const rawData = await fetch(`${api}books/${isbn}`);
  const data: ActiveBookInfoFromResponseType = await rawData.json();
  if (!data) return false;

  const customData: ActiveBookInfoType = {
    error: data.error,
    title: data.title,
    subtitle: data.subtitle ? data.subtitle : mockSubtitle,
    authors: data.authors,
    publisher: data.publisher,
    isbn10: data.isbn10,
    isbn13: data.isbn13,
    pages: data.pages,
    year: data.year,
    rating: data.rating,
    desc: data.desc,
    price: data.price,
    image: data.image,
    url: data.url,
    pdf: data.pdf,
    color:
      random() > 3
        ? 'blue'
        : random() > 5
        ? 'green'
        : random() > 7
        ? 'green'
        : 'purple',
    numberOfItemsInCart: 0,
  };
  return customData;
};

export const getSearchResultData = async (
  searchString: string,
  activePage: string
): Promise<SearchResultDataType | false> => {
  const rawData = await fetch(`${api}search/${searchString}/${activePage}`);
  const data: ResponseSearchResultDataType = await rawData.json();
  if (!data) return false;
  const { page, total, books } = data;
  const customData: SearchResultDataType = {
    page: page,
    total: total,
    books: books.map((book: BookTypeFromResponse) => ({
      title: book.title,
      subtitle: book.subtitle ? book.subtitle : mockSubtitle,
      isbn13: book.isbn13,
      price: book.price,
      image: book.image,
      url: book.url,
      rating: random(),
      color:
        random() > 3
          ? 'blue'
          : random() > 5
          ? 'green'
          : random() > 7
          ? 'green'
          : 'purple',
    })),
  };
  return customData;
};
