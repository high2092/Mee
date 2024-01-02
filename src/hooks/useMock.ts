import { useEffect } from 'react';

export function useMock() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('../server/browser').then(({ server }) => {
        server.start();
      });
    }
  }, []);
}
