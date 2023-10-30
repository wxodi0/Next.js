import './style.css'

type ButtonProps = {
  label: String
  text: String
  disabled: boolean
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

export const Button = (props: ButtonProps) => {
  const { label, text, disabled, onClick } = props;
  
  return (
    <div>
      <span>{label}</span>
      <button disabled={disabled} onClick={onClick}>
        {text}
      </button>
    </div>
  )
}