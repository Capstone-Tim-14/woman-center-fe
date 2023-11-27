import React, { useEffect, useState } from 'react';

const Chart = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [data, setData] = useState([]);

  const handleOptionChange = (option) => {
    setSelectedOption(option);

    // Update data berdasarkan opsi yang dipilih
    switch (option) {
      case 'week':
        setData([
          { category: 'User membaca artikel', values: [2, 5, 7, 8, 10, 6, 5] },
          { category: 'Artikel yang diajukan', values: [5, 8, 12, 15, 20, 10, 8] },
          { category: 'Artikel yang dipublikasikan', values: [8, 12, 15, 18, 25, 15, 12] },
        ]);
        break;
      case 'month':
        setData([
          { category: 'User membaca artikel', values: [5, 8, 10, 12, 15, 10, 8] },
          { category: 'Artikel yang diajukan', values: [10, 15, 20, 25, 30, 20, 15] },
          { category: 'Artikel yang dipublikasikan', values: [15, 20, 25, 30, 35, 25, 20] },
        ]);
        break;
      case 'year':
        setData([
          { category: 'User membaca artikel', values: [10, 15, 20, 25, 30, 25, 20] },
          { category: 'Artikel yang diajukan', values: [20, 25, 30, 35, 40, 35, 30] },
          { category: 'Artikel yang dipublikasikan', values: [30, 35, 40, 45, 50, 45, 40] },
        ]);
        break;
      default:
        setData([]);
    }
  };

  const drawBarChart = () => {
    const canvas = document.getElementById('myBarChart');
    const ctx = canvas.getContext('2d');

    // Pengecekan apakah data[0] terdefinisi dan memiliki properti 'values'
    if (data.length === 0 || !data[0] || !data[0].values) {
      console.error('Data is not properly defined.');
      return;
    }

    // Menghitung lebar dan tinggi canvas
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;

    // Menghitung lebar dan tinggi batang grafik
    const barWidth = canvasWidth / data[0].values.length;
    const maxDataValue = Math.max(
      ...data.map(category => Math.max(...category.values))
    );
    const scale = canvasHeight / maxDataValue;

    // Membersihkan canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Menggambar batang grafik
    data.forEach((category, categoryIndex) => {
      category.values.forEach((value, index) => {
        const barHeight = value * scale;
        const x = index * barWidth + categoryIndex * (barWidth / 3); // Menambahkan jarak antar kategori
        const y = canvasHeight - barHeight;

        // Memilih warna berdasarkan kategori
        let color;
        switch (category.category) {
          case 'User membaca artikel':
            color = 'green';
            break;
          case 'Artikel yang diajukan':
            color = 'orange';
            break;
          case 'Artikel yang dipublikasikan':
            color = 'blue';
            break;
          default:
            color = 'black';
        }

        ctx.fillStyle = color;
        ctx.fillRect(x, y, barWidth - 2, barHeight);
      });
    });
  };

  useEffect(() => {
    drawBarChart();
  }, [selectedOption, data]);

  return (
    <div className="container">
      <div className="chart">
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <label style={{ display: 'flex', alignItems: 'center', marginRight: '10px' }}>
            <input
              type="radio"
              name="chartOption"
              value="week"
              checked={selectedOption === 'week'}
              onChange={() => handleOptionChange('week')}
            />
            Minggu
          </label>

          <label style={{ display: 'flex', alignItems: 'center', marginRight: '10px' }}>
            <input
              type="radio"
              name="chartOption"
              value="month"
              checked={selectedOption === 'month'}
              onChange={() => handleOptionChange('month')}
            />
            Bulan
          </label>

          <label style={{ display: 'flex', alignItems: 'center' }}>
            <input
              type="radio"
              name="chartOption"
              value="year"
              checked={selectedOption === 'year'}
              onChange={() => handleOptionChange('year')}
            />
            Tahun
          </label>
        </div>

        <canvas id="myBarChart" width="450" height="300"></canvas>

        {/* Keterangan di bawah barchart */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
          {selectedOption &&
            data[0]?.values.map((day, index) => (
              <p key={index} style={{ marginRight: '20px' }}>
                {day}
              </p>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Chart;
