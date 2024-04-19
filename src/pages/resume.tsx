import { useData } from "../context/dataContext";

export default function Resume() {
  const { data } = useData();

  return (
    <div>
      {data?.map((user) => (
        <p key={user.id}>{user.nome}</p>
      ))}
    </div>
  )
}