import "./AccountInput.css";

export default function Input({ label, value, type = "text" }) {
  return (
    <fieldset className="Input-box">
      <label
        className="Input-label"
        htmlFor={`Account__${label}`}
      >{`${label}:`}</label>
      <span className="Input-wrapper">
        <input
          type={type}
          className="Input Input--account"
          name={`Account__${label}`}
          id={`Account__${label}`}
          placeholder={value}
          required
        />
      </span>
    </fieldset>
  );
}
