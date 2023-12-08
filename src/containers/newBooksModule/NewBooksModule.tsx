import React, { useEffect } from 'react';
import PageTitle from '#components/pageTitle';
import { NewBooksModuleStyled } from './NewBooksModuleStyled';
import { useAppDispatch, useAppSelector } from '#store/store';
import { getBookDataAction } from '#store/reducers/bookReudcer/actions';
import BookCard from '#containers/bookCard';
import { Box } from '@mui/material';
import { BookType } from '#models/BookType';

const NewBooksModule: React.FC = () => {
  const { books } = useAppSelector((state) => state.bookReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getBookDataAction());
  }, []);

  const handleClick = () => {
    console.log(books);
  };

  return (
    <NewBooksModuleStyled>
      <PageTitle>new releases books</PageTitle>
      <button onClick={handleClick}> Click </button>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '10px',
        }}
      >
        {books.map((book: BookType) => (
          <BookCard book={book} />
        ))}
      </Box>
    </NewBooksModuleStyled>
  );
};
export default NewBooksModule;
