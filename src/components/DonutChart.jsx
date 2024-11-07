import { useState } from "react";
import ReactApexChart from "react-apexcharts";


const DonutChart = () => {
  const [state,setState] = useState({
    options:{
      annotations: {
        yaxis: [
          {
            y: 8800,
            borderColor: '#00E396',
            label: {
              borderColor: '#00E396',
              style: {
                color: '#fff',
                background: '#00E396'
              },
              text: 'Y-axis annotation on 8800'
            }
          }
        ]
      }
    }
  })
  return (
    <div className="container-fluid mt-3 mb-3">
      <h1>Donut Chart</h1>
      {/* <Chart
        type="donut"
        width={1249}
        height={550}
        series={[1, 2, 3, 4, 5]}
        options={{
          labels: ["USA", "china", "India", "Bangladesh", "pakistan"],
          title: {
            text: "Country Name"
          },
          plotOptions:{
            pie:{
              donut:{
                labels: {
                  show: true
                }
              }
            }
          }
        }}
      /> */}
      <ReactApexChart options={state.options}/>
    </div>
  );
}

export default DonutChart
