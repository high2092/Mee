import { HttpResponse, http } from 'msw';
import { dummyLabels } from './data/label';

export const handlers = [
  http.get('/api/label', () => {
    return HttpResponse.json({ labels: dummyLabels });
  }),
];
