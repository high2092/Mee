'use client';

import { useEffect } from 'react';
import { useModal } from '../../../hooks/useModal';
import { ModalTypes } from '../../../state/modal';
import { TaskModal } from './TaskModal';

const ModalMap = {
  [ModalTypes.TASK]: TaskModal,
};

const DEFAULT_MODAL_Z_INDEX = 1000;

export function ModalContainer() {
  const { modals } = useModal();

  return (
    <>
      {modals.map(({ type, props }, i) => {
        const Modal = ModalMap[type];
        return <Modal key={`modal-${type}-${i}`} {...props} zIndex={DEFAULT_MODAL_Z_INDEX + i} />;
      })}
    </>
  );
}
