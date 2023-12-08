import React from 'react';
import ContentWithHeader from '#containers/contentWithHeader';
import NewBooksModule from '#containers/newBooksModule';

const MainPage: React.FC = () => {
  return (
    <ContentWithHeader>
      <NewBooksModule />
    </ContentWithHeader>
  );
};
export default MainPage;
