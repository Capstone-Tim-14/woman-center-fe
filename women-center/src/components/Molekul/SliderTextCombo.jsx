import React, { useState } from 'react';
import GrafikArtikel from '../Atom/GrafikArtikel';
import SliderComponent from '../Atom/SliderComponent';

const SliderTextCombo = () => {
  const [selectedOption, setSelectedOption] = useState('Week');

  const handleSliderChange = (event) => {
    const value = event.target.value;
    if (value < 33) {
      setSelectedOption('Week');
    } else if (value >= 33 && value < 66) {
      setSelectedOption('Month');
    } else {
      setSelectedOption('Year');
    }
  };

  return (
    <div>
      <GrafikArtikel />
      <SliderComponent
        selectedOption={selectedOption}
        handleSliderChange={handleSliderChange}
      />
    </div>
  );
}

export default SliderTextCombo;
