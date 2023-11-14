const Button = ({
  bgColor,
  onClick,
  label,
  isSubmit = false
}: {
  bgColor: string
  onClick: () => void
  label: string,
  isSubmit?: boolean
}) => {
  return (
    <button
      type={isSubmit ? 'submit' : 'button'}
      style={{
        fontSize: '20px',
        borderRadius: '5px',
        backgroundColor: bgColor,
        color: 'white',
        border: 'none',
        padding: '10px 20px',
        cursor: 'pointer'
      }}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export default Button
