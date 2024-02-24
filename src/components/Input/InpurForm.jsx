import Label from "./Label";
import Input from "./Input";

const InputForm = ({ name, label, type, placeholder, handleInput }) => {
  return (
    <div className="input-container">
      <Label name={name} label={label} />
      <Input
        name={name}
        type={type}
        placeholder={placeholder}
        handleInput={handleInput}
      />
    </div>
  );
};

export default InputForm;
