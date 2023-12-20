import React, { useState } from 'react';
import Switch from 'react-switch';


const SliderComponent = () => {
  const options = ['Week', 'Month', 'Year'];
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const CustomSwitchIcon = ({ option, checked }) => (
    <div className={`custom-switch-icon ${checked ? 'on' : 'off'}`}>
      {checked ? option : 'OFF'}
    </div>
  );

  return (
    <div className="toggle-switch">
      {options.map((option) => (
        <label key={option}>
          <Switch
            onChange={() => handleOptionChange(option)}
            checked={selectedOption === option}
            height={24}
            width={120}
            onColor="#5cb85c"
            checkedIcon={<CustomSwitchIcon option={option} checked />}
            uncheckedIcon={<CustomSwitchIcon option={option} />}
          />
          {option}
        </label>
      ))}
    </div>
  );
};

export default SliderComponent;
