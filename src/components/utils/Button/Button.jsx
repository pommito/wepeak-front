import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({ text, className, url }) => {
  return (
    <a href={url} className={`Button ${className}`}>
      {text}
    </a>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Button;
