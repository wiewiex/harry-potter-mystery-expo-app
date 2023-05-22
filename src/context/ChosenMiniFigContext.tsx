import {
  ReactNode,
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
} from 'react';
import { IMiniFig } from '~/utils/types';

interface IChosenMiniFigContext {
  chosenMiniFig: undefined | IMiniFig;
  setChosenMiniFig: Dispatch<SetStateAction<IMiniFig | undefined>>;
}

const ChosenMiniFigContext = createContext<IChosenMiniFigContext>({
  chosenMiniFig: undefined,
  setChosenMiniFig: () => undefined,
});

export const useChosenMiniFigContext = () =>
  useContext(ChosenMiniFigContext) as IChosenMiniFigContext;

export const ChosenMiniFigContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [chosenMiniFig, setChosenMiniFig] = useState<undefined | IMiniFig>(
    undefined,
  );

  return (
    <ChosenMiniFigContext.Provider value={{ chosenMiniFig, setChosenMiniFig }}>
      {children}
    </ChosenMiniFigContext.Provider>
  );
};
