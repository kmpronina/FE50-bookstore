export type BookTypeFromResponse = {
  title: string;
  subtitle: string;
  isbn13: string;
  price: string;
  image: string;
  url: string;
};

export type BookType = {
  title: string;
  subtitle: string;
  isbn13: string;
  price: string;
  image: string;
  url: string;
  isLiked: boolean;
  isInCart: boolean;
  color: 'blue' | 'orange' | 'purple' | 'green';
  rating: number;
};

export type ResponseNewBooksDataType = {
  error: string;
  total: string;
  books: BookType[];
};

// {
//   "name": "react-bookstore",
//   "version": "0.1.0",
//   "private": true,
//   "dependencies": {
//     "@reduxjs/toolkit": "^2.0.1",
//     "@testing-library/jest-dom": "^5.17.0",
//     "@testing-library/react": "^13.4.0",
//     "@testing-library/user-event": "^13.5.0",
//     "@types/jest": "^27.5.2",
//     "@types/node": "^16.18.67",
//     "@types/react": "^18.2.42",
//     "@types/react-dom": "^18.2.17",
//     "@types/react-router-dom": "^5.3.3",
//     "react": "^18.2.0",
//     "react-dom": "^18.2.0",
//     "react-redux": "^9.0.2",
//     "react-router-dom": "^6.20.1",
//     "react-scripts": "5.0.1",
//     "redux-saga": "^1.2.3",
//     "redux-thunk": "^3.1.0",
//     "styled-components": "^6.1.1",
//     "typescript": "^4.9.5",
//     "web-vitals": "^2.1.4"
//   },
//   "scripts": {
//     "start": "react-scripts start",
//     "build": "react-scripts build",
//     "test": "react-scripts test",
//     "eject": "react-scripts eject"
//   },
//   "imports": {
//     "#components/*": "./src/components/*",
//     "#containers/*": "./src/containers/*",
//     "#router/*": "./src/router/*",
//     "#api/*": "./src/api/services/*",
//     "#pages/*": "./src/pages/*",
//     "#models/*": "./src/models/*",
//     "#store/*": "./src/store/*",
//     "#hooks/*": "./src/hooks/*",
//     "#styles/*": "./src/styles/*",
//     "#constants/*": "./src/constants/*",
//     "#utils/*": "./src/utils/*",
//     "#ui/*": "./src/ui/*",
//     "#fonts/*": "./src/fonts/*"
//   },
//   "eslintConfig": {
//     "extends": [
//       "react-app",
//       "react-app/jest"
//     ]
//   },
//   "browserslist": {
//     "production": [
//       ">0.2%",
//       "not dead",
//       "not op_mini all"
//     ],
//     "development": [
//       "last 1 chrome version",
//       "last 1 firefox version",
//       "last 1 safari version"
//     ]
//   }
// }
