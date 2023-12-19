import { atom } from 'recoil';

export const ModalTypes = {
  TASK: 1,
} as const;

type ModalType = (typeof ModalTypes)[keyof typeof ModalTypes];

export interface ModalData {
  type: ModalType;
  props?: Record<string, any>;
}

export const modalAtom = atom<ModalData[]>({ key: 'modals', default: [] });
