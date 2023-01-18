import "./input.scss";
const input = (props) => {
  return (
    <div className="input">
      <label className="input__label" htmlFor={props.name}>
        {props.text}
      </label>
      <input
        value={props.value}
        className="input__input"
        type={props.type}
        name={props.name}
        onChange={(e) => {
          props.handleChange(e);
        }}
        // onBlur={props.handleCheckEmail}
        placeholder="הזן כאן"
      />
    </div>
  );
};

export default input;
