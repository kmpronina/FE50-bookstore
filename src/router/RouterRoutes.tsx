import { Route, Routes } from 'react-router-dom';
import { RouterLocationsEnum } from './Router';
import MainPage from '#pages/MainPage';
import SearchResultPage from '#pages/SearchResultPage';
import FavoriteBooksPage from '#pages/FavoriteBooksPage';
import BookPage from '#pages/BookPage';
import CartPage from '#pages/CartPage';
import AuthorizationPage from '#pages/AuthorizationPage';
import ProtectedRoute, { ProtectedRouteProps } from './ProtectedRoute';
import { useAppSelector } from '#store/store';
import AccountPage from '#pages/AccountPage';

const RouterRoutes = () => {
  const { activeUser } = useAppSelector((state) => state.userReducer);

  const defaultProtectedRouteProps: Omit<ProtectedRouteProps, 'outlet'> = {
    isAuthenticated: !!activeUser,
    authenticationPath: RouterLocationsEnum.authorization,
  };
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
          element={
            <ProtectedRoute
              {...defaultProtectedRouteProps}
              outlet={<FavoriteBooksPage />}
            />
          }
        />
        <Route
          path={RouterLocationsEnum.cart}
          element={
            <ProtectedRoute
              {...defaultProtectedRouteProps}
              outlet={<CartPage />}
            />
          }
        />
        <Route
          path={RouterLocationsEnum.account}
          element={
            <ProtectedRoute
              {...defaultProtectedRouteProps}
              outlet={<AccountPage />}
            />
          }
        />
        <Route
          path={RouterLocationsEnum.authorization}
          Component={() => <AuthorizationPage />}
        />
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
