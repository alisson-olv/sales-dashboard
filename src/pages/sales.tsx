import SalesItem from "../components/salesItem";
import { useData } from "../context/dataContext";

export default function Sales() {
  const { data } = useData();

  return (
    <ul>
      {
        data?.map((sales) => (
          <li key={sales.id}>
            <SalesItem sales={sales} />
          </li>
        ))
      }
    </ul>
  )
}
