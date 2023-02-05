import { atom } from 'recoil';
import { CommonSchema } from '../schemas';

export const commonState = atom<CommonSchema>({
  key: 'common',
  default: {
    user: {
      name: '',
      age: null,
    },
    auth: {
      isLoggedIn: false,
    },
  },
});
