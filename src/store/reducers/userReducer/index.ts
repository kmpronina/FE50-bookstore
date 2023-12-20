import { createSlice } from '@reduxjs/toolkit';

type UserReducerType = {
  subscribeEmail: string | null;
};

const userReducer = createSlice({
  name: 'user',
  initialState: {
    subscribeEmail: null,
  } as UserReducerType,

  reducers: {
    setSubscribeEmailToStore: (state, action) => {
      state.subscribeEmail = action.payload;
    },
  },
});

export const { setSubscribeEmailToStore } = userReducer.actions;

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
