import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RouterRoutes from './RouterRoutes';

export enum RouterLocationsEnum {
  main = '/',
  signIn = '/sign-in',
  signUp = '/sign-up',
  book = '/:isbn13',
  search = '/search',
  favorite = '/favorite',
}

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <RouterRoutes />
    </BrowserRouter>
  );
};

export default Router;
