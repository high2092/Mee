'use client';

import { RecoilRoot } from 'recoil';

export function AppRecoilRoot({ children }) {
  return <RecoilRoot>{children}</RecoilRoot>;
}
