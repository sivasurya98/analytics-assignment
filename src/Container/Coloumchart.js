import React from "react";
import ReactApexChart from "react-apexcharts";
import '../Styles/Chart.css'

const Colomnchart = () => {
  const chartOptions = {
    labels: ['Total new customer', 'Total old customer', 'Available'],
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            value: {
              show: true,
              fontSize: '15px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 'bold',
              color: undefined,
              offsetY: -10,
              formatter: function (val) {
                return val
              }
            },
            name: {
              show: true,
              fontSize: '12px',
              fontFamily: 'Helvetica, Arial, sans-serif',
              fontWeight: 200,
              offsetY: 16,
              formatter: function (val) {
                return val
              }
            },
          }
        },
      },
    },
    colors: ['#F23496', '#5932EA', '#F2F0FE'],
    legend: {
      show: false, // Set to false to hide the legend labels
    },
  };
  const chartData = [44, 55, 41];
  const options = {
    chart: {
      height: 350,
      type: 'bar',
      toolbar: {
        show: false,
        tools: {
          download: false
        },
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        dataLabels: {
          position: 'top', // top, center, bottom
        },
      },
    },
    dataLabels: {
      enabled: false,
      formatter: function (val) {
        return val + '%';
      },
      offsetY: -20,
      style: {
        fontSize: '12px',
        colors: ['#304758'],
      },
    },
    xaxis: {
      categories: [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
      ],
      position: 'bottom',
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        fill: {
          type: 'gradient',
          gradient: {
            colorFrom: '#D8E3F0',
            colorTo: '#BED1E6',
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5,
          },
        },
      },
    },
    annotations: {
      yaxis: [
        {
          y: 0,
          strokeDashArray: 0,
          borderColor: '#333',
          fillColor: '#c2c2c2',
          opacity: 0.8,
          offsetX: 0,
          offsetY: 0,
        },
      ],
    },
    grid: {
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    colors: ['#5932EA', '#F2F0FE'],
    toolbar: {
      show: false,
    },
  };

  const series = [
    {
      name: 'Data Label',
      data: [44, 55, 41, 64, 78, 98, 67, 97, 100, 64, 83, 49],
    },
  ];
// console.log(window.innerWidth)
// const chartWidth = isMobile ? 320 : 800; // Adjust the width as needed
//   console.log('mobile =',isMobile, 'width=',chartWidth)
  return (
    <div>
      <div className="chart-container">
        <div className="chart">
          <div style={{ display: 'flex', justifyContent: 'space-between'}}>
          <div className="total-font">
            <h3>Overview</h3>
            <p className="chart-font">Monthly Earnings</p>
          </div>
          <div>
            <select style={{  marginTop: '1rem', marginRight: '20px'}} className="dropdown">
              <option value="option1">Quarterly</option>
              <option value="option2">Yearly</option>
            </select>
          </div>
          </div>
          <ReactApexChart className="bar-chart" height={300} options={options} series={series} type="bar" />
        </div>
        <div className="chart-donut">
          <div className="donut-chart-fonts">
            <h3>Customers</h3>
            <p style={{ color: 'gray' }}>Customers that buy products</p>
          </div>
          <ReactApexChart
            options={chartOptions}
            series={chartData}
            type="donut"
            width={300}
            height={250}
            className="donut-chart"
          />
        </div>
      </div>
    </div>
  );
};

export default Colomnchart;
