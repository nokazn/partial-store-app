import { atom, DefaultValue, RecoilState, selector } from 'recoil';
import { FormSchema } from '../schemas';

export const formState = atom<FormSchema>({
  key: 'form',
  default: {
    familyName: '',
    givenName: '',
    email: '',
    sex: null,
  },
});

const createSelectorOf =
  <T extends Record<string, unknown>>(state: RecoilState<T>) =>
  <K extends keyof T>(key: K) => {
    return selector({
      key: `form/${key.toString()}`,
      get: ({ get }) => get(state)[key],
      set: ({ get, set }, value) => {
        if (!(value instanceof DefaultValue)) {
          set(state, { ...get(state), [key]: value });
        }
      },
    });
  };

const selectorOfForm = createSelectorOf(formState);

export const withFamilyName = selectorOfForm('familyName');
export const withGivenName = selectorOfForm('givenName');
export const withEmail = selectorOfForm('email');
export const withSex = selectorOfForm('sex');
