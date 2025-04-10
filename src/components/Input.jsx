import "./../styles/input.css";
function Input({
  id,
  placeholder,
  type,
  labelText,
  onChange,
  value,
  "data-key": dataKey,
}) {
  return (
    <div className="form-input">
      <label htmlFor={id}>
        <span className="label-text">{labelText}</span>
      </label>
      {type === "textarea" ? (
        <textarea
          id={id}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          data-key={dataKey}
        ></textarea>
      ) : (
        <input
          type="type"
          id={id}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          data-key={dataKey}
        />
      )}
    </div>
  );
}

export default Input;
