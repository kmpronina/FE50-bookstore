import {
  BookType,
  BookTypeFromResponse,
  ResponseNewBooksDataType,
} from '#models/BookType';

export const getBooks = async (): Promise<BookType[] | false> => {
  const rawData = await fetch('https://api.itbook.store/1.0/new');
  const data: ResponseNewBooksDataType = await rawData.json();
  if (!data) return false;
  const random = () => {
    return Math.floor(Math.random() * 10);
  };
  const customData: BookType[] = data.books.map(
    (book: BookTypeFromResponse) => ({
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
    })
  );
  return customData;
};
