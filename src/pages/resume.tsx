import Loading from "../components/loading";
import { useData } from "../context/dataContext";

export default function Resume() {
  const { data, loading } = useData();

  if (loading) return <div><h3>Carregando</h3> <Loading /></div>
  if (data === null) return null;
  return (
    <section>
      <div className="resumo flex mb">
        <div className="box">
          <h2>Vendas</h2>
          <span>
            {data?.filter((sales) => sales.status !== 'falha').reduce((acc, item) => acc + item.preco, 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          </span>
        </div>
        <div className="box">
          <h2>Recebido</h2>
          <span>
            {data?.filter((sales) => sales.status === 'pago').reduce((acc, item) => acc + item.preco, 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          </span>
        </div>
        <div className="box">
          <h2>Processando</h2>
          <span>
            {data?.filter((sales) => sales.status === 'processando').reduce((acc, item) => acc + item.preco, 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          </span>
        </div>
      </div>
    </section>
  )
}