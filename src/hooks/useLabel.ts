import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function useLabel() {
  const { data } = useSWR(`/api/label`, fetcher);

  return { labels: data?.labels ?? [] };
}
