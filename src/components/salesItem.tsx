import { NavLink } from "react-router-dom";
import { SalesProps } from "../context/dataContext";

export default function SalesItem({ sales }: { sales: SalesProps }) {

  return (
    <NavLink to={`/sale/${sales.id}`} className="sales box mb">
      <span style={{ fontFamily: 'monospace' }}>
        {sales.id}
      </span>
      <div>{sales.nome}</div>
      <div>{(sales.preco).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</div>
    </NavLink>
  )
}
