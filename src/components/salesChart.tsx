import { SalesProps } from "../context/dataContext";
import { Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

interface SalesPropsPerPeriod {
  data: string;
  pago: number;
  processando: number;
  falha: number;
}

function transformSalesData(data: SalesProps[]): SalesPropsPerPeriod[] {
  const days = data?.reduce((acc: { [key: string]: SalesPropsPerPeriod }, item) => {
    const day = item.data.split(' ')[0];
    if (!acc[day]) {
      acc[day] = {
        data: day,
        pago: 0,
        falha: 0,
        processando: 0,
      }
    }
    acc[day][item.status] += item.preco;
    return acc;
  }, {})

  return Object.values(days);
}

export default function SalesChart({ data }: { data: SalesProps[] }) {
  const transformedData = transformSalesData(data);

  return (
    <ResponsiveContainer width='99%' height={400}>
      <LineChart data={transformedData}>
        <XAxis dataKey="data" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="pago" stroke="#8884d8" strokeWidth={2} />
        <Line type="monotone" dataKey="processando" stroke="#82ca9d" strokeWidth={2} />
        <Line type="monotone" dataKey="falha" stroke="#822" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  )
}
