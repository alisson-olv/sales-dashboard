import { useEffect, useState } from "react";
import DateRange from "./dateRange";
import Months from "./months";
import { useLocation } from "react-router-dom";

export default function Header() {
  const [title, setTitle] = useState('');
  const location = useLocation();

  useEffect(() => {
    if (location.pathname == '/') {
      setTitle('Resumo');
      document.title = 'Fintech | Resumo'
    } else if (location.pathname == '/sales') {
      setTitle('Vendas')
      document.title = 'Fintech | Vendas'
    } else if (location.pathname == '/sale/') {
      document.title = 'Fintech | Vendas'
    }

  }, [location])

  return (
    <header className="mb">
      <div className="mb daterange">
        <DateRange />
        <h1 className="box bg-3">{title}</h1>
      </div>
      <Months />
    </header>
  )
}