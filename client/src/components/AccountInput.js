import "./AccountInput.css";

export default function Input({ label, value }) {
  return (
    <fieldset className="Input-box">
      <label
        className="Input-label"
        for={`Account__${label}`}
      >{`${label}:`}</label>
      <span className="Input-wrapper">
        <input
          className="Input Input--account"
          name={`Account__${label}`}
          id={`Account__${label}`}
          value={value}
          required
        />
      </span>
    </fieldset>
  );
}
