import { createSlice } from '@reduxjs/toolkit';
import { UserType } from '#models/authorizationTypes';

type UserReducerType = {
  subscribeEmail: string | null;
  activeSignTab: '1' | '2';
  activeUser: UserType | null;
};

const userReducer = createSlice({
  name: 'user',
  initialState: {
    subscribeEmail: null,
    activeSignTab: '2',
    activeUser: null,
  } as UserReducerType,

  reducers: {
    setSubscribeEmailToStore: (state, action) => {
      state.subscribeEmail = action.payload;
    },
    setIsSignUpActive: (state, action) => {
      state.activeSignTab = action.payload;
    },
    setActiveUser: (state, action) => {
      state.activeUser = action.payload;
    },
  },
});

export const { setSubscribeEmailToStore, setIsSignUpActive, setActiveUser } =
  userReducer.actions;

export default userReducer.reducer;

// const defaultState: UserReducerType = {
//   subscribeEmail: null,
// };

// const userReducer: Reducer<UserReducerType> = (
//   state = defaultState,
//   action
// ) => {
//   switch (action.type) {
//     case UserReducerEnum.SET_SUBSCRIBE_EMAIL_TO_STORE:
//       return {
//         ...state,
//         subscribeEmail: action.subscribeEmail,
//       };

//     default:
//       return { ...state };
//   }
// };

// export default userReducer;
