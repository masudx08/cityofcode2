import React from 'react'
import BalanceGraph from "./Visualisations/BalanceGraph";
import EnergyGraph from "./Visualisations/EnergyGraph";
import EnergyMixChart from "./Visualisations/EnergyMixChart";
import About from "./Visualisations/About";
import News from "./Visualisations/News";
import Transactions from "./Visualisations/Transactions";
import "./dashboard.css";

import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  ArcElement,
} from "chart.js";
import { Card, CardContent, Container, Grid } from '@mui/material';
import { Row, Col } from 'react-bootstrap';

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  ArcElement
);




function Dashboard() {
  return (

    <div className='dashboardContainer'>
      <div className='dashboard__left'>
          <p>Dashboard</p>
          <p>Account</p>
          <p>Security</p>
          <p>Settings</p>
      </div>
      <div className="dashboard_right">
          <Row className='dashboard__balance'>
            <Col md={8}>
              <BalanceGraph />
            </Col>
            <Col md={4} className='dashboard__button'>
             <button>Buy</button>
             <button>Sell</button>
            </Col>
          </Row>
         <Row className='dashboard__energy'>
            <Col md={8}>
              <EnergyGraph />
            </Col>
            <Col md={4} className='d-flex align-items-center justify-content-center'>
              <EnergyMixChart />
            </Col>
         </Row>
         <Row>
           <Col md={6}>
              <About />
           </Col>
           <Col md={6}>
            <News />
           </Col>
         </Row>
         <Row className='mb-5 mt-5'>
           <Col md={12}>
            <Transactions />
           </Col>
         </Row>
      </div>
    </div>


  )
}

export default Dashboard


// <Grid container spacing={30} sx={{bgcolor: "#c0e8f9"}}>
//       <Grid item xs>
//         <Card sx={{ minWidth: 300}}>
//           <CardContent>
//             <BalanceGraph />
//             <EnergyGraph />
//           </CardContent>
//         </Card>
//       </Grid>


//       <Grid item xs>
//         <Card sx={{ minWidth: 300 }}>
//           <CardContent>
//             <ActionButtons />
//             <EnergyMixChart />
//           </CardContent>
//         </Card>
//       </Grid>

//       <Grid item xs>
//         <Card sx={{ minWidth: 300 }}>
//           <CardContent>
//             <About />
//             <News />
//           </CardContent>
//         </Card>
//       </Grid>

//       <Grid item xs>
//         <Card sx={{ minWidth: 300 }}>
//           <CardContent>
//             <Transactions />
//           </CardContent>
//         </Card>
//       </Grid>
//     </Grid>