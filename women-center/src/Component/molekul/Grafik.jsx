import React, { useState } from "react";
import Chart from "react-apexcharts";

function Grafik() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [state, setState] = useState({
    options: {
      colors: ["#FDCEDF", "#F8E8EE", "#F4518D"],
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [],
      },
      dataLabels: {
        enabled: false,
      },
      toolbar: {
        show: false,
        autoSelected: "pan",
      },
    },
    series: [],
  });

  const handleCheckboxChange = (option) => {
    setSelectedOption(option);
    // Update data based on the selected option
    switch (option) {
      case "week":
        setState({
          options: {
            ...state.options,
            xaxis: {
              categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
            },
          },
          series: [
            {
              name: "User membaca artikel",
              data: [30, 40, 45, 50, 49, 60, 70, 91],
            },
            {
              name: "Artikel yang diajukan",
              data: [3, 60, 35, 80, 49, 70, 20, 81],
            },
            {
              name: "Artikel yang dipublikasi",
              data: [10, 20, 15, 30, 25, 20, 15, 10],
            },
          ],
        });
        break;
      case "month":
        setState({
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
      case "year":
        setState({
          options: {
            ...state.options,
            xaxis: {
              categories: ["2010", "2011", "2012", "2013", "2014", "2015"],
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
      <h1>
        Articles growth <i className="fas fa-user"></i>{" "}
      </h1>
      <div>
        <label>
          <input
            type="checkbox"
            value="week"
            checked={selectedOption === "week"}
            onChange={() => handleCheckboxChange("week")}
          />
          <span className="checkbox-label">Minggu</span>
        </label>
        <label>
          <input
            type="checkbox"
            value="month"
            checked={selectedOption === "month"}
            onChange={() => handleCheckboxChange("month")}
          />
          <span className="checkbox-label">Bulan</span>
        </label>
        <label>
          <input
            type="checkbox"
            value="year"
            checked={selectedOption === "year"}
            onChange={() => handleCheckboxChange("year")}
          />
          <span className="checkbox-label">Tahun</span>
        </label>
      </div>
      <div className="row">
        <div className="col-4">
          <Chart
            options={state.options}
            series={state.series}
            type="bar"
            width="450"
          />
        </div>
      </div>
    </div>
  );
}

export default Grafik;
