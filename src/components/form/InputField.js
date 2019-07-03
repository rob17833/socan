import React from 'react';

const InputField = ({
  id,
  input,
  label,
  type,
  className,
  meta: { touched, error },
  placeholder,
  name,
}) => (
  <React.Fragment>
    <label htmlFor={id} className="label-form">
      {label}
      <input {...input} type={type} id={id} placeholder={placeholder} className={className} />
    </label>
  </React.Fragment>
);


export default InputField;
