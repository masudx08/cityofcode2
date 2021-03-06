import { Coffee } from '@mui/icons-material'
import React from 'react'
import { Doughnut } from 'react-chartjs-2'
 
function EnergyMixChart() {
  return (
    <div className="dashboardTop__centerBottom text-center">
    <div className="energyMix__graphContainer">
      <div className="energyMix__graphTitle">
        <h6 className='title'>
          <span>Your energy mix</span>
          <Coffee  style={{marginLeft:'10px'}}/>
        </h6>
      </div>
      <div className="energyMixGraph">
        <Doughnut
          data={{
            labels: [
              "Today",
              "This Week",
              "This Month",
              "This Year",
              "All Time",
            ],
            datasets: [
              {
                label: "My First Dataset",
                data: [52, 65, 54, 70, 76],
                backgroundColor: [
                  "rgb(255, 99, 132)",
                  "rgb(54, 162, 235)",
                  "rgb(255, 205, 86)",
                  "rgb(255, 99, 232)",
                  "rgb(54, 162, 145)",
                ],
                hoverOffset: 4,
              },
            ],
          }}
        />
      </div>
    </div>
  </div>
  )
}

export default EnergyMixChart