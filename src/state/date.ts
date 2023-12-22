import { atom } from 'recoil';

export const dateAtom = atom<Date>({
  key: 'date',
  default: new Date(),
});
