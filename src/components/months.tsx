import BtnMonth from "./btnMonth";

export default function Months() {
  return (
    <div className="flex">
      <BtnMonth monthOffset={-2} />
      <BtnMonth monthOffset={-1} />
      <BtnMonth monthOffset={0} />
    </div>
  )
}
