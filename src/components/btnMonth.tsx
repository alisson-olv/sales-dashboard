import { CSSProperties, ComponentProps } from "react";
import { useData } from "../context/dataContext";

const style: CSSProperties = {
  padding: 'var(--gap-s) var(--gap)',
  backgroundColor: 'var(--color-3)',
  border: 'none',
  borderRadius: 'var(--gap-s)',
  color: 'var(--color-1)',
  fontWeight: '600',
  textTransform: 'capitalize',
  width: '100%',
}

function getMonthName(n: number) {
  const month = new Date;
  month.setMonth(month.getMonth() + n)
  const nameMonth = month.toLocaleString('pt-BR', { month: 'long' });

  return nameMonth;
}

function formatDate(date: Date) {
  const dd = String(date.getDate()).padStart(2, '0');
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const yyyy = date.getFullYear();

  return (`${yyyy}-${mm}-${dd}`)
}

interface BtnMonthProps extends ComponentProps<'button'> {
  monthOffset: number;
}

export default function BtnMonth({ monthOffset, ...props }: BtnMonthProps) {
  const { setInitialDate, setFinalDate } = useData();

  function setMonthPeriod(n: number) {
    const date = new Date;
    date.setMonth(date.getMonth() + n);

    const firstDay = formatDate(new Date(date.getFullYear(), date.getMonth(), 1));
    const lastDay = formatDate(new Date(date.getFullYear(), date.getMonth() + 1, 0));

    setInitialDate(firstDay);
    setFinalDate(lastDay);
  }

  return (
    <div>
      <button style={style} onClick={() => setMonthPeriod(monthOffset)} {...props}>{getMonthName(monthOffset)}</button>
    </div>
  )
}
