'use client';

import { useModal } from '../../../hooks/useModal';
import { centeredModalPositionStyle, dimmedStyle } from './Modal.css';

export interface PreparedModalProps {
  zIndex: number;
}

interface ModalProps {
  children: JSX.Element;
  zIndex: number;
}

export function CenteredModal({ children, zIndex }: ModalProps) {
  const { closeModal } = useModal();
  return (
    <>
      <div className={centeredModalPositionStyle} style={{ zIndex }}>
        {children}
      </div>
      <div className={dimmedStyle} style={{ zIndex: zIndex - 1 }} onClick={closeModal} />
    </>
  );
}
