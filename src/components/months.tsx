import BtnMonth from "./btnMonth";

export default function Months() {
  return (
    <div className="box flex mb">
      <BtnMonth monthOffset={-3} />
      <BtnMonth monthOffset={-2} />
      <BtnMonth monthOffset={-1} />
      <BtnMonth monthOffset={0} />
    </div>
  )
}
