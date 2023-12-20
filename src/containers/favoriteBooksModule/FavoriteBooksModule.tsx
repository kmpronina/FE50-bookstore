import React from 'react';
import { useAppSelector } from '#store/store';
import { FavoriteBooksModuleStyled } from './FavoriteBooksModuleStyled';
import { ActiveBookInfoType } from '#models/BookType';
import FavoriteBookCard from '#containers/favoriteBookCard';
import GoBackButton from '#ui/goBackButton';
import PageTitle from '#components/pageTitle';
import InfoMessage from '#ui/infoMassage';

const FavoriteBooksModule: React.FC = () => {
  const { favoriteBooks } = useAppSelector((state) => state.bookReducer);

  return (
    <FavoriteBooksModuleStyled>
      <GoBackButton />
      <PageTitle>favorites</PageTitle>
      {favoriteBooks.length === 0 ? (
        <InfoMessage>Please add some books to your favorite</InfoMessage>
      ) : (
        favoriteBooks.map((book: ActiveBookInfoType) => (
          <FavoriteBookCard key={book.isbn13} book={book} />
        ))
      )}
    </FavoriteBooksModuleStyled>
  );
};

export default FavoriteBooksModule;
