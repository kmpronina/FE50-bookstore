import {
  ActiveBookInfoFromResponseType,
  ActiveBookInfoType,
  BookDataType,
  BookTypeFromResponse,
  ResponseNewBooksDataType,
  SearchResultDataType,
  ResponseSearchResultDataType,
} from '#models/BookType';

const random = () => {
  return Math.floor(Math.random() * 10);
};

export const getBooksData = async (): Promise<BookDataType | false> => {
  const rawData = await fetch('https://api.itbook.store/1.0/new');
  const data: ResponseNewBooksDataType = await rawData.json();
  if (!data) return false;
  const { error, total, books } = data;

  const customData: BookDataType = {
    error: error,
    total: total,
    books: books.map((book: BookTypeFromResponse) => ({
      title: book.title,
      subtitle: book.subtitle ? book.subtitle : 'by Lentin Joseph, Apress 2018',
      isbn13: book.isbn13,
      price: book.price,
      image: book.image,
      url: book.url,
      isLiked: false,
      isInCart: false,
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
  const rawData = await fetch(`https://api.itbook.store/1.0/books/${isbn}`);
  const data: ActiveBookInfoFromResponseType = await rawData.json();
  if (!data) return false;

  const customData: ActiveBookInfoType = {
    error: data.error,
    title: data.title,
    subtitle: data.subtitle ? data.subtitle : 'by Lentin Joseph, Apress 2018',
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
    isLiked: false,
    isInCart: false,
    pdf: data.pdf,
    color:
      random() > 3
        ? 'blue'
        : random() > 5
        ? 'green'
        : random() > 7
        ? 'green'
        : 'purple',
  };
  return customData;
};

export const getSearchResultData = async (
  searchString: string,
  activePage: string
): Promise<SearchResultDataType | false> => {
  const rawData = await fetch(
    `https://api.itbook.store/1.0/search/${searchString}/${activePage}`
  );
  const data: ResponseSearchResultDataType = await rawData.json();
  if (!data) return false;
  console.log('data fron service', data);
  const { page, total, books } = data;
  const customData: SearchResultDataType = {
    page: page,
    total: total,
    books: books.map((book: BookTypeFromResponse) => ({
      title: book.title,
      subtitle: book.subtitle ? book.subtitle : 'by Lentin Joseph, Apress 2018',
      isbn13: book.isbn13,
      price: book.price,
      image: book.image,
      url: book.url,
      isLiked: false,
      isInCart: false,
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
