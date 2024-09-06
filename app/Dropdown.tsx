import React from 'react';

interface props{
  optionOne: string,
  optionTwo: string
}

function Dropdown({optionOne, optionTwo}: props) {
  return (
    <div>
      <section className="input-filter text-black flex-grow flex-shrink-0">
        <section className="caret">
          <select
            className="dropdown px-3 py-4 rounded-lg"
            title="country"
            name="country"
            id="country"
          >
            <option value="Nigeria">{optionOne}</option>
            <option value="Global">{optionTwo}</option>
          </select>
        </section>
      </section>
    </div>
  );
}

export default Dropdown;
