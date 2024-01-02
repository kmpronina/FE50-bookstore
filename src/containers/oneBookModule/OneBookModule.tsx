import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '#store/store';
import { getActiveBookDataAction } from '#store/reducers/bookReducer/actions';
import BookInfo from '#containers/bookInfo';
import SubscribeToNewsletter from '#containers/subscribeToNewsletter';
import Slider from '#components/slider';
import GoBackButton from '#ui/goBackButton';
import { OneBookModuleStyled } from './OneBookModuleStyled';

const OneBookModule: React.FC = () => {
  const { activeBookISBN } = useAppSelector((state) => state.bookReducer);

  const dispatch = useAppDispatch();

  useEffect(() => {
    activeBookISBN && dispatch(getActiveBookDataAction(activeBookISBN));
  }, [activeBookISBN]);

  return (
    <OneBookModuleStyled>
      <GoBackButton />
      <BookInfo />
      <SubscribeToNewsletter />
      <Slider />
    </OneBookModuleStyled>
  );
};

export default OneBookModule;
