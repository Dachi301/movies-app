import "./FormField.css";

export default function FormField({
  labelfor,
  inputType,
  handleChange,
  fieldType,
  textValue,
}) {
  return (
    <div className="text--field" onChange={handleChange}>
      <label>
        <p>{labelfor}</p>
      </label>
      <input
        type={inputType}
        className="field"
        onChange={handleChange}
        name={fieldType}
        defaultValue={textValue}
      />
    </div>
  );
}
