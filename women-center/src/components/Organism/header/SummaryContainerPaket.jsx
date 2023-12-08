import React from 'react';
import { HiOutlineUsers } from 'react-icons/hi2';
import '../../../styles/SummaryContainer.css';

const SummaryContainer = () => {
  // State untuk menyimpan data total artikel dan persentase untuk setiap jenis
  const [percentageIncreaseA, setPercentageIncreaseA] = React.useState(15.80);
  const [percentageIncreaseB, setPercentageIncreaseB] = React.useState(20.50);
  const [percentageIncreaseC, setPercentageIncreaseC] = React.useState(10.25);

  return (
    <div className="summary-container">
      <Summary
        percentageIncreaseA={percentageIncreaseA}
        percentageIncreaseB={percentageIncreaseB}
        percentageIncreaseC={percentageIncreaseC}
      />
    </div>
  );
};

const Summary = ({
  percentageIncreaseA,
  percentageIncreaseB,
  percentageIncreaseC,
}) => {
  const formattedPercentageA = percentageIncreaseA.toFixed(2); // Format untuk jenis A
  const formattedPercentageB = percentageIncreaseB.toFixed(2); // Format untuk jenis B
  const formattedPercentageC = percentageIncreaseC.toFixed(2); // Format untuk jenis C

  return (
    <div className="box-summary">
      <div className="box-top">
        <div className="icon-box">
          <HiOutlineUsers className="icon-image colored-icon" />
        </div>
        <p>Sesi</p>
      </div>
      <div className="box-bottom-user">
        <div className="percentage-container">
          <div className="percentage-type">
            <label>Total Sesi Harian</label>
            <p>200</p>
            <p id='format'>+{formattedPercentageA}%</p>
          </div>
          <div className="percentage-type">
            <label>Sesi Baru</label>
            <p>7</p>
            <p id='format'>+{formattedPercentageB}%</p>
          </div>
          <div className="percentage-type">
            <label>Konseling Tersedia</label>
            <p>12</p>
            <p id='format'>-{formattedPercentageC}%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryContainer;
