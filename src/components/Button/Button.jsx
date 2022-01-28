import './Button.scss';

const Button = ({onClick, addBtn, children}) => {
  return (
    <button onClick={onClick} className={addBtn ? 'addBtn' : 'simpleBtn'} type='button'>{children}</button>
  )
};

export default Button;