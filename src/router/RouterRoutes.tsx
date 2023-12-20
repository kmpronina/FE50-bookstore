import { Route, Routes } from 'react-router-dom';
import { RouterLocationsEnum } from './Router';
import MainPage from '#pages/MainPage';
import SearchResultPage from '#pages/SearchResultPage';
import FavoriteBooksPage from '#pages/FavoriteBooksPage';
import BookPage from '#pages/BookPage';

const RouterRoutes = () => {
  // const { accessToken } = useAppSelector((state) => state.userReducer);

  return (
    <Routes>
      <Route path="">
        <Route path={RouterLocationsEnum.main} Component={() => <MainPage />} />
        <Route path={RouterLocationsEnum.book} Component={() => <BookPage />} />
        <Route
          path={RouterLocationsEnum.search}
          Component={() => <SearchResultPage />}
        />
        <Route
          path={RouterLocationsEnum.favorite}
          Component={() => <FavoriteBooksPage />}
        />

        {/* <Route path={RouterLocationsEnum.signIn} Component={SignInPage} /> */}
        {/* <Route path={RouterLocationsEnum.signUp} Component={SignUpPage} /> */}
        {/* {accessToken && ( */}
        {/* <Route path={RouterLocationsEnum.blogPage} Component={BlogPage} /> */}
        {/* )}  */}
        {/* <Route path="*" Component={NotFound404Page} /> */}
      </Route>
    </Routes>
  );
};
export default RouterRoutes;
