import { PropsWithChildren, createContext, useContext } from "react";
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
}

export const DataContext = createContext<IDataContext | null>(null);

export function useData() {
  const context = useContext(DataContext);
  if (!context) throw new Error('DataContext só pode ser utilizado dentro de um Provider');

  return context;
}

export default function DataContextProvider({ children }: PropsWithChildren) {
  const baseUrl = 'https://data.origamid.dev/vendas/';
  const { data, error, loading } = useFetch<SalesProps[]>(baseUrl)

  return (
    <DataContext.Provider value={{ data, error, loading }}>
      {children}
    </DataContext.Provider>
  )
}