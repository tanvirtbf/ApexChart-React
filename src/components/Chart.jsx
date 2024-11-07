import  { useState } from 'react'
import data from '../data';



const Chart = () => {
  const [chartData, setChartData] = useState(data);

  console.log(chartData);

  return (
    <div>
      Hello
    </div>
  )
}

export default Chart
