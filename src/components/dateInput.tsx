import { CSSProperties, ComponentProps } from "react";

const generalStyle: CSSProperties = {
  fontSize: '1rem',
  color: 'var(--color-2)',
  padding: 'var(--gap-s) .75rem',
  backgroundColor: 'var(--color-4)',
  borderRadius: 'var(--gap-s)',
}

const labelStyle: CSSProperties = {
  display: 'block',
  marginBottom: 'var(--gap-s)',
  fontWeight: '600',
  ...generalStyle,
}

interface DateInputProps extends ComponentProps<'input'> {
  label: string;
  id: string;
}

export default function DateInput({ label, id, ...props }: DateInputProps) {

  return (
    <div>
      <label style={labelStyle} htmlFor={id}>{label}</label>
      <input style={generalStyle} type="date" name={id} id={id} {...props} />
    </div>
  )
}
