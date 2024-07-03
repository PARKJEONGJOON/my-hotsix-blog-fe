import React from 'react';

interface InputFieldProps {
  title: string;
  type: string;
  value: string;
  onChange: (newValue: string) => void;
  placeholder: string;
  error?: string | boolean;
}

const InputField: React.FC<InputFieldProps> = ({ title, type, value, onChange, placeholder, error }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between">
        <div className='text-xl'>{title}</div>
        {error && <div className="text-red-500">{error}</div>}
      </div>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`block w-signupInput h-10 border-darkblue rounded-lg px-4 border-2 text-sm ${error ? 'border-red-500' : ''}`}
      />
    </div>
  );
}

export default InputField;
