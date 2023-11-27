import React, { useEffect, useState } from 'react';

const Chart = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const drawBarChart = () => {
    const canvas = document.getElementById('myBarChart');
    const ctx = canvas.getContext('2d');

    // Dummy data sesuai opsi yang dipilih
    let data = [];
    switch (selectedOption) {
      case 'week':
        data = [10, 20, 30, 40, 50];
        break;
      case 'month':
        data = [30, 50, 20, 70, 40];
        break;
      case 'year':
        data = [50, 40, 30, 20, 10];
        break;
      default:
        data = [];
    }

    // Menghitung lebar dan tinggi canvas
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    // Menghitung lebar dan tinggi batang grafik
    const barWidth = canvasWidth / data.length;
    const maxDataValue = Math.max(...data);
    const scale = canvasHeight / maxDataValue;

    // Membersihkan canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Menggambar batang grafik
    data.forEach((value, index) => {
      const barHeight = value * scale;
      const x = index * barWidth;
      const y = canvasHeight - barHeight;

      ctx.fillStyle = 'blue';
      ctx.fillRect(x, y, barWidth - 2, barHeight);
    });
  };

  useEffect(() => {
    drawBarChart();
  }, [selectedOption]);

  return (
    <div className="container">
      <div className="chart">
        <label>
          <input
            type="radio"
            name="chartOption"
            value="week"
            checked={selectedOption === 'week'}
            onChange={() => setSelectedOption('week')}
          />
          Minggu
        </label>

        <label>
          <input
            type="radio"
            name="chartOption"
            value="month"
            checked={selectedOption === 'month'}
            onChange={() => setSelectedOption('month')}
          />
          Bulan
        </label>

        <label>
          <input
            type="radio"
            name="chartOption"
            value="year"
            checked={selectedOption === 'year'}
            onChange={() => setSelectedOption('year')}
          />
          Tahun
        </label>

        <canvas id="myBarChart" width="300" height="250"></canvas>
      </div>
    </div>
  );
};

export default Chart;
