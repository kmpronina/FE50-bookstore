import {
  AnyAction,
  combineReducers,
  configureStore,
  ThunkDispatch,
} from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import bookReducer from './reducers/bookReudcer';
// import thunk from 'redux-thunk';
// import createSagaMiddleware from 'redux-saga';

const appReducer = combineReducers({
  bookReducer,
});

// const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: appReducer,
  // middleware: (getDefaultMiddleware: GetDefaultMiddleware) =>
  // [...getDefaultMiddleware() ]
});

// sagaMiddleware.run(appWatcher);

export type AppStateType = ReturnType<typeof appReducer>;
export type AppDispatchType = ThunkDispatch<AppStateType, null, AnyAction>;

export const useAppDispatch: () => AppDispatchType = useDispatch;
export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector;
