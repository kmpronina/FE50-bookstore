import md5 from 'md5';
import {
  SignInDataType,
  UserType,
  SingUpDataType,
} from '#models/authorizationTypes';
import { useAppDispatch } from '#store/store';
import { setActiveUser } from '#store/reducers/userReducer';

// type UserDataHash = {
//   emailHash: string;
//   passwordHash: string;
//   nameHash: string;
//   id: string
// };

type AuthMethodsReturnType = {
  isSuccess: boolean;
  error?: string;
};

const useAuth = () => {
  const authUsers: UserType[] = JSON.parse(
    localStorage.getItem('allUsers') || '[]'
  );
  const dispatch = useAppDispatch();

  const signUp = (data: SingUpDataType): AuthMethodsReturnType => {
    const dataHash: UserType = {
      passwordHash: md5(data.password),
      email: data.email,
      name: data.name,
      id: md5(data.password).concat(Date.now().toString()),
    };

    if (authUsers.find((userHash) => userHash.email === dataHash.email)) {
      return { isSuccess: false, error: 'user with same email already exist' };
    }
    localStorage.setItem('allUsers', JSON.stringify([...authUsers, dataHash]));
    return { isSuccess: true };
  };

  const signIn = (data: SignInDataType): AuthMethodsReturnType => {
    const foundUserFromStorage = authUsers.find(
      (user) => user.email === data.email
    );
    if (foundUserFromStorage) {
      if (md5(data.password) === foundUserFromStorage.passwordHash) {
        const userData: UserType = {
          passwordHash: md5(data.password),
          email: data.email,
          name: foundUserFromStorage.name,
          id: foundUserFromStorage.id,
        };
        dispatch(setActiveUser(userData));
        return { isSuccess: true };
      } else {
        return { isSuccess: false, error: 'password is not correct' };
      }
    }
    return { isSuccess: false, error: 'user not found' };
  };

  return { signIn, signUp };
};

export default useAuth;
