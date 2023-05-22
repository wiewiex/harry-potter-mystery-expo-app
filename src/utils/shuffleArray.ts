import { IMiniFig } from './types';

type IArr = [] | IMiniFig[];

export default function shuffleArray(array: IArr): IArr {
  let res = [...array];
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [res[i], res[j]] = [res[j], res[i]];
  }
  return res;
}
