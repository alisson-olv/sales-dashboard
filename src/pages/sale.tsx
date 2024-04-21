import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch";
import { SalesProps } from "../context/dataContext";
import Loading from "../components/loading";

type SalesPropsWithoutDate = Omit<SalesProps, 'data'>;

export default function Sale() {
  const { id } = useParams();
  const { data, loading } = useFetch<SalesPropsWithoutDate>(`https://data.origamid.dev/vendas/${id}`);

  if (loading) return <Loading />
  return (
    <div>
      {
        <div>
          <div className="box mb">ID: {data?.id}</div>
          <div className="box mb">Nome: {data?.nome}</div>
          <div className="box mb">
            Valor: {(data?.preco)?.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
          </div>
          <div className="box mb">Status: {data?.status}</div>
          <div className="box mb">Tipo de Pagamento: {data?.pagamento}</div>
        </div>
      }
    </div>
  )
}
