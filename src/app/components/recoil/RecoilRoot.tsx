'use client';

import { RecoilRoot } from 'recoil';
import { useMock } from '../../../hooks/useMock';

export function AppRecoilRoot({ children }) {
  useMock();

  return <RecoilRoot>{children}</RecoilRoot>;
}
