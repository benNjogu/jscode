interface PropTypes {
  handleClick: () => void;
  type: string;
  text?: string;
  style?: string;
  size?: string;
}

const CustomButton: React.FC<PropTypes> = ({
  handleClick,
  type,
  style,
  text,
  size,
}) => {
  return (
    <button
      className={`button is-primary is-small ${style} `}
      onClick={handleClick}
    >
      <span className={`icon ${size}`}>
        <i className={`fas ${type}`}></i>
      </span>
      <span>{text}</span>
    </button>
  );
};

export default CustomButton;
