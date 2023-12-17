import React, { useState } from "react";
import Chart from "react-apexcharts";
import "../../styles/Grafik.css";

function Grafik() {
  const [selectedOption, setSelectedOption] = useState("Week");
  const [state, setState] = useState({
    options: {
      colors: ["#FDCEDF", "#F8E8EE", "#F4518D"],
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      },
      dataLabels: {
        enabled: false,
      },
      toolbar: {
        show: false,
        autoSelected: "pan",
      },
    },
    series: [
      {
        name: "User membaca artikel",
        data: [30, 40, 45, 50, 49, 60, 70],
      },
      {
        name: "Artikel yang diajukan",
        data: [3, 60, 35, 80, 49, 70, 20],
      },
      {
        name: "Artikel yang dipublikasi",
        data: [10, 20, 15, 30, 25, 20, 15],
      },
    ],
  });

  const handleSliderChange = (value) => {
    let option;
    switch (value) {
      case "0":
        option = "Week";
        break;
      case "1":
        option = "Month";
        break;
      case "2":
        option = "Year";
        break;
      default:
        break;
    }
    setSelectedOption(option);
    updateChartData(option);
  };

  const updateChartData = (option) => {
    switch (option) {
      case "Week":
        setState({
          ...state,
          options: {
            ...state.options,
            xaxis: {
              categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            },
          },
        });
        break;
      case "Month":
        setState({
          ...state,
          options: {
            ...state.options,
            xaxis: {
              categories: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ],
            },
          },
          series: [
            {
              name: "User membaca artikel",
              data: [20, 35, 45, 30, 55, 60, 70, 91, 50, 25, 40, 30],
            },
            {
              name: "Artikel yang diajukan",
              data: [5, 25, 30, 10, 45, 50, 20, 81, 40, 15, 30, 20],
            },
            {
              name: "Artikel yang dipublikasi",
              data: [15, 10, 15, 20, 10, 10, 50, 10, 10, 10, 10, 10],
            },
          ],
        });
        break;
      case "Year":
        setState({
          ...state,
          options: {
            ...state.options,
            xaxis: {
              categories: ["2018", "2019", "2020", "2021", "2022", "2023"],
            },
          },
          series: [
            {
              name: "User membaca artikel",
              data: [50, 70, 65, 80, 75, 90],
            },
            {
              name: "Artikel yang diajukan",
              data: [15, 40, 30, 50, 35, 60],
            },
            {
              name: "Artikel yang dipublikasi",
              data: [20, 10, 25, 15, 30, 10],
            },
          ],
        });
        break;
      default:
        break;
    }
  };

  return (
    <div className="App">
      <header className="header-grafik">Articles growth</header>
      <div className="slider-container">
        <input
          type="range"
          min="0"
          max="2"
          value={selectedOption === "Week" ? "0" : selectedOption === "Month" ? "1" : "2"}
          onChange={(e) => handleSliderChange(e.target.value)}
          list="options"
        />
        <datalist id="options">
          <option value="0">Week</option>
          <option value="1">Month</option>
          <option value="2">Year</option>
        </datalist>
        <output htmlFor="options">{selectedOption}</output>
      </div>
      <div className="row">
        <div className="col-4">
          <Chart options={state.options} series={state.series} type="bar" width="550" />
        </div>
      </div>
    </div>
  );
}

export default Grafik;