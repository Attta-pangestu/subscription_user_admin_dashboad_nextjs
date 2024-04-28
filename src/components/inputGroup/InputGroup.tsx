import React, { ChangeEvent } from 'react';

type InputGroupProps = {
  data: { type: string, placeholder: string, name: string, width?: string, required?: boolean, value?: string | number }[]
  handleChange? : (e: ChangeEvent<HTMLInputElement>) => void
}

const InputGroup: React.FC<InputGroupProps> = ({ data, handleChange }) => {
  
  return (
      data.map(({ type, placeholder, name, required }, index) => (
        <input
          onChange={handleChange}
          type={type}
          placeholder={placeholder}
          name={name}
          required={required}
          value={type === 'number' ? Number(data[index].value) : data[index].value}
          key={index}
          style={{
            width: data[index].width,
            padding: '.8rem 2.5rem', 
            backgroundColor: 'var(--bg)',
            color: 'var(--text)',
            border: '2px solid var(--outline)',
            borderRadius: '.5rem',
            marginBottom: '1rem'
          }}
        />
      ))

  );
};

export default InputGroup;


