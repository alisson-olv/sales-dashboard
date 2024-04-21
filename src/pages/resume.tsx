import Loading from "../components/loading";
import SalesChart from "../components/salesChart";
import { useData } from "../context/dataContext";

export default function Resume() {
  const { data, loading } = useData();

  return (
    <section>
      <div className="resumo flex mb">
        <div className="box">
          <h2>Vendas</h2>
          <span>
            {loading && <Loading />}
            {data?.filter((sales) => sales.status !== 'falha').reduce((acc, item) => acc + item.preco, 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          </span>
        </div>
        <div className="box">
          <h2>Recebido</h2>
          <span>
            {loading && <Loading />}
            {data?.filter((sales) => sales.status === 'pago').reduce((acc, item) => acc + item.preco, 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          </span>
        </div>
        <div className="box">
          <h2>Processando</h2>
          <span>
            {loading && <Loading />}
            {data?.filter((sales) => sales.status === 'processando').reduce((acc, item) => acc + item.preco, 0).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          </span>
        </div>
      </div>
      {data && <SalesChart data={data} />}
    </section>
  )
}