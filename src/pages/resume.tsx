import { useData } from "../context/dataContext"
import useFetch from "../hooks/useFetch"

export default function Resume() {
  const { data } = useData();

  console.log(data);

  return (
    <h2>Resume</h2>
  )
}