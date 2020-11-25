import './styles.scss';

const Button = ({ className, type, onClick, text }) => {
  return (
    <button
      className={className}
      type={type}
      onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;