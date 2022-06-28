import './Button.css'

const Button = ({children, onClick, color='blue', className =''}) => {
  const classNames = `Button ${color} ${className}`
  return <button class={classNames} onClick={onClick}>{children}</button>
}

export default Button