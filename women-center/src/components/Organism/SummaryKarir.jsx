import React from 'react';


const SummaryKarir = () => {
  // State untuk menyimpan data total artikel dan persentase untuk setiap jenis
  const [percentageIncreaseA, setPercentageIncreaseA] = React.useState(15.80);
  const [percentageIncreaseB, setPercentageIncreaseB] = React.useState(10);
  const [percentageIncreaseC, setPercentageIncreaseC] = React.useState(10);

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
            <img src="public/asset/icon_user.svg" alt="User Icon" />
        </div>
        <p>Interaksi User</p>
      </div>
      <div className="box-bottom-user">
        <div className="percentage-container">
          <div className="percentage-type">
            <label>Akses Harian</label>
            <p>200</p>
            <p id='format'>+{formattedPercentageA}%</p>
          </div>
          <div className="percentage-type">
            <label>Visit Link</label>
            <p>7</p>
            <p id='format'>+{formattedPercentageB}%</p>
          </div>
          <div className="percentage-type">
            <label>Pengguna Chatbot</label>
            <p>12</p>
            <p id='format'>-{formattedPercentageC}%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryKarir;