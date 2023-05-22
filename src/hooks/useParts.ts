import { useQuery } from 'react-query';
import { api } from '~/utils/axiosConfig';

const fetchParts = async (setNum: string | undefined) => {
  const { data } = await api.get(`/${setNum}/parts`);
  return data;
};

const useParts = (setNum: string | undefined) =>
  useQuery(['minifigs', setNum], () => fetchParts(setNum));

export default useParts;
