import "./LoginInputField.css";

export default function InputField({ identifier, label, type = "text" }) {
  return (
    <fieldset className='Input-box'>
      <label
        className='Input-label'
        htmlFor={`${identifier}__${label}`}>{`${label}:`}</label>
      <span className='Input-wrapper'>
        <input
          type={type}
          className='Input'
          name={`${identifier}__${label}`}
          id={`${identifier}__${label}`}
          placeholder={label}
          required
        />
      </span>
    </fieldset>
  );
}
