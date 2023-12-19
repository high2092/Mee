import { useRecoilState } from 'recoil';
import { ModalData, modalAtom } from '../state/modal';
import { useCallback } from 'react';

export function useModal() {
  const [modals, setModals] = useRecoilState(modalAtom);

  const openModal = useCallback((modalData: ModalData) => {
    setModals((modals) => modals.concat(modalData));
  }, []);

  const closeModal = useCallback(() => {
    setModals((modals) => modals.slice(0, modals.length - 1));
  }, []);

  return { modals, openModal, closeModal };
}
