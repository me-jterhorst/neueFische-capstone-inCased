import "./InputField.css";

export default function InputField({ id, label, type = "text" }) {
  return (
    <fieldset className="Input-box">
      <label
        className="Input-label"
        for={`${id}__${label}`}
      >{`${label}:`}</label>
      <span className="Input-wrapper">
        <input
          type={type}
          className="Input"
          name={`${id}__${label}`}
          id={`${id}__${label}`}
          placeholder={label}
          required
        />
      </span>
    </fieldset>
  );
}
