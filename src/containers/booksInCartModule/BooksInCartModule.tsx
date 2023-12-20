import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '#store/store';
import { BooksInCartModuleStyled } from './BooksInCartModuleStyled';
import { ActiveBookInfoType } from '#models/bookTypes';
import GoBackButton from '#ui/goBackButton';
import PageTitle from '#components/pageTitle';
import InfoMessage from '#ui/infoMessage';
import BookInCartCard from '#containers/bookInCartCard';
import { setBookInCartToStore } from '#store/reducers/bookReducer';
import OrderDetails from '#containers/orderDetails';

const BooksInCartModule: React.FC = () => {
  const { booksInCart } = useAppSelector((state) => state.bookReducer);
  const dispatch = useAppDispatch();
  const booksInCartClone: ActiveBookInfoType[] = structuredClone(booksInCart);

  useEffect(() => {
    if (!booksInCart) return;
    booksInCartClone.map((item: ActiveBookInfoType) =>
      item.numberOfItemsInCart === 0
        ? (item.numberOfItemsInCart = 1)
        : item.numberOfItemsInCart
    );
    dispatch(setBookInCartToStore(booksInCartClone));
  }, []);

  return (
    <BooksInCartModuleStyled>
      <GoBackButton />
      <PageTitle>your cart</PageTitle>
      {booksInCart.length === 0 ? (
        <InfoMessage>Please add some books to your cart</InfoMessage>
      ) : (
        <>
          {booksInCart.map((book: ActiveBookInfoType) => (
            <BookInCartCard key={book.isbn13} book={book} />
          ))}
          <OrderDetails />
        </>
      )}
    </BooksInCartModuleStyled>
  );
};

export default BooksInCartModule;
