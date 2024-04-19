import { Dispatch, PropsWithChildren, SetStateAction, createContext, useContext, useState } from "react";
import useFetch from "../hooks/useFetch";

interface SalesProps {
  id: string;
  nome: string;
  preco: number;
  status: string;
  pagamento: string;
  parcelas: null | number;
  data: string;
}

interface IDataContext {
  data: SalesProps[] | null;
  error: string | null;
  loading: boolean;
  initialDate: string;
  setInitialDate: Dispatch<SetStateAction<string>>;
  finalDate: string;
  setFinalDate: Dispatch<SetStateAction<string>>;
}

function getDateForNDays(n: number) {
  const date = new Date;
  date.setDate(date.getDate() - n);
  const dd = String(date.getDate()).padStart(2, '0');
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const yyyy = date.getFullYear();

  return (`${yyyy}-${mm}-${dd}`)
}

export const DataContext = createContext<IDataContext | null>(null);

export function useData() {
  const context = useContext(DataContext);
  if (!context) throw new Error('DataContext só pode ser utilizado dentro de um Provider');

  return context;
}

export default function DataContextProvider({ children }: PropsWithChildren) {
  const [initialDate, setInitialDate] = useState(getDateForNDays(30));
  const [finalDate, setFinalDate] = useState(getDateForNDays(0));

  const url = `https://data.origamid.dev/vendas/?inicio=${initialDate}&final=${finalDate}`

  const { data, error, loading } = useFetch<SalesProps[]>(url)

  return (
    <DataContext.Provider value={{ data, error, loading, initialDate, setInitialDate, finalDate, setFinalDate }}>
      {children}
    </DataContext.Provider>
  )
}