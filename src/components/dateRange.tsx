import DateInput from "./dateInput";
import { useData } from "../context/dataContext";

export default function DateRange() {
  const { initialDate, setInitialDate, finalDate, setFinalDate } = useData();

  return (
    <form className="box flex" onSubmit={(e) => e.preventDefault()}>
      <DateInput
        onChange={({ target }) => setInitialDate(target.value)}
        value={initialDate}
        id="initial-date"
        label="Início"
      />

      <DateInput
        onChange={({ target }) => setFinalDate(target.value)}
        value={finalDate}
        id="final-date"
        label="Fim"
      />
    </form>
  )
}
