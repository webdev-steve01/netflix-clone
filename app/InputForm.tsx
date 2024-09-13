import React from 'react';
type prop = {
  type: string;
  name: string;
  label: string
  placeholder: string;
}

function InputForm(prop:prop) {
  return (
    <div>
      <input
        className="bg-[hsla(218,28%,15%,0.8)] py-3 px-2 w-full focus-within:outline-white rounded-md m-0"
        type={prop.type}
        name={prop.name}
        id={prop.label}
        placeholder={prop.placeholder}
      />
    </div>
  );
}

export default InputForm;
