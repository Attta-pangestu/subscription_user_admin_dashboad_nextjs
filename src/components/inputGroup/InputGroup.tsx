import React, { ChangeEvent } from 'react';
import Input from '../input/Input';

type InputGroupProps = {
  data: { type: string, placeholder: string, name: string, width?: string, required?: boolean }[]
}

const InputGroup: React.FC<InputGroupProps> = ({ data }) => {
  return (
    <div>
      {data.map(({ type, placeholder, name, width, required }, index) => (
        <Input
          type={type}
          placeholder={placeholder}
          name={name}
          width={width}
          required={required}
          key={index}
        />
      ))}
    </div>
  );
};

export default InputGroup;


