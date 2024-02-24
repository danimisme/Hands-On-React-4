const Input = ({ name, type, placeholder, handleInput }) => {
  return (
    <>
      <input
        type={type}
        id={name}
        onChange={handleInput}
        placeholder={placeholder}
      />
    </>
  );
};

export default Input;
