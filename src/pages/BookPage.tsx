import React from 'react';
import ContentWithHeader from '#containers/contentWithHeader';
import OneBookModule from '#containers/oneBookModule';

const BookPage: React.FC = () => {
  return (
    <ContentWithHeader>
      <OneBookModule />
    </ContentWithHeader>
  );
};
export default BookPage;
