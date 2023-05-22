import { useQuery } from 'react-query';
import { api } from '~/utils/axiosConfig';

export const fetchMiniFigs = async () => {
  const { data } = await api.get('?search=harry potter');
  return data;
};

const useMiniFigs = () => useQuery('minifigs', fetchMiniFigs);

export default useMiniFigs;
