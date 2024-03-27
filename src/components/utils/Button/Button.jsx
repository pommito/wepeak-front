import './Button.scss';

const Button = ({ text, className, url }) => {
  return (
    <a href={url} className={`Button ${className}`}>
      {text}
    </a>
  );
};

export default Button;
