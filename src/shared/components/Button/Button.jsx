import './styles.scss';
import PropTypes from 'prop-types';

const Button = ({ className, type, onClick, text }) => {
  return (
    <button
      className={className}
      type={type}
      onClick={onClick}>
      {text}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}

export default Button;