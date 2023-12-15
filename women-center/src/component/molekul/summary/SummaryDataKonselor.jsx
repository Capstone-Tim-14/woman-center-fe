import React from 'react';
import { HiOutlineUsers } from 'react-icons/hi2';
import '../../../style/SummaryDataKonselor.css'

const SummaryContainer = () => {
  // State untuk menyimpan data total artikel dan persentase untuk setiap jenis
  const [percentageIncreaseA, setPercentageIncreaseA] = React.useState(15.80);
  const [percentageIncreaseB, setPercentageIncreaseB] = React.useState(85);
  const [percentageIncreaseC, setPercentageIncreaseC] = React.useState(10);

  return (
    <div id="summary-container">
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
    <div id="box-summary">
      <div id="box-top">
        <div id="icon-box">
          <img src="src/assets/icons/Two-user.png" id="icon-image" />
        </div>
        <p className='m-0'>Konselor</p>
      </div>
      <div id="box-bottom-user">
        <div id="percentage-container">
          <div id="percentage-type">
            <label>Total Sesi Harian</label>
            <p>1,250</p>
            <p id='format'>+{formattedPercentageA}%</p>
          </div>
          <div id="percentage-type">
            <label>Sesi Baru</label>
            <p>1,180</p>
            <p id='format'>+{formattedPercentageB}%</p>
          </div>
          <div id="percentage-type">
            <label>Konseling Tersedia</label>
            <p>70</p>
            <p id='format'>-{formattedPercentageC}%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryContainer;
