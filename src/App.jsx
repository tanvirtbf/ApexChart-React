import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Chart from "react-apexcharts";
import "./App.css";

function App() {
  return (
    <div className="container-fluid mt-3 mb-3">
      <h1>Donut Chart</h1>
      <Chart
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
      />
    </div>
  );
}

export default App;