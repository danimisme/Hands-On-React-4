const Label = ({ name, label }) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
    </>
  );
};

export default Label;
