import { useRecoilState } from 'recoil';
import { dateAtom } from '../state/date';
import useSWR from 'swr';
import { convertDate } from '../utility/date';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function useTask() {
  const [date] = useRecoilState(dateAtom);
  const { data, isLoading, error } = useSWR(`/api/task?date=${convertDate(date)}`, fetcher);

  return { tasks: data?.tasks ?? [], isLoading, isError: error };
}
