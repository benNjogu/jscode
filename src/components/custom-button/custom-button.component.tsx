interface PropTypes {
  handleClick: any;
  type: string;
}

const CustomButton: React.FC<PropTypes> = ({ handleClick, type }) => {
  return (
    <button className="button is-primary is-small" onClick={handleClick}>
      <span className="icon">
        <i className={`fas ${type}`}></i>
      </span>
    </button>
  );
};

export default CustomButton;
