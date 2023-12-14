import React from 'react';
import ContentWithHeader from '#containers/contentWithHeader';
import SearchResultModule from '#containers/searchResultModule';

const SearchResultPage: React.FC = () => {
  return (
    <ContentWithHeader>
      <SearchResultModule />
    </ContentWithHeader>
  );
};
export default SearchResultPage;
