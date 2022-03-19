import { LocalAtm } from '@mui/icons-material';
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import Transaction from './Transaction';

function Transactions() {
    const[transactions, setTransactions] = useState(null);
    // const transactions = [
    //   {
    //     userID : 'id',
    //     chargeAmount: '500',
    //     startTime: '10s',
    //     type: 'awesoem'
    //   },
    //   {
    //     userID : 'id',
    //     chargeAmount: '500',
    //     startTime: '10s',
    //     type: 'awesoem'
    //   },
    //   {
    //     userID : 'id',
    //     chargeAmount: '500',
    //     startTime: '10s',
    //     type: 'awesoem'
    //   },
    //   {
    //     userID : 'id',
    //     chargeAmount: '500',
    //     startTime: '10s',
    //     type: 'awesoem'
    //   },
    // ]
    const token = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2VyLmdldFVzZXJuYW1lKCkiLCJyb2xlcyI6WyJST0xFX1VTRVIiXSwiaXNzIjoicmVxdWVzdC5nZXRSZXF1ZXN0VVJMKCkudG9TdHJpbmcoKSIsImV4cCI6MTY0NTYxNTE0Mn0.S0lQjoQZADzkn10fzqHbkKDns7JUyFiQTb6iK_ZLhSE";

    useEffect(() => {
        // fetch("http://localhost:6786/blockchain/transactions", {headers : {"Authorization" : token}})
        // .then((response) => response.json())
        // .then((data) => {
        //     setTransactions(data);
        // });
        }, []);

  return (
    <div className="transactionContainer ">
    <div className="title mb-4">
      <h3>Recent Transactions
        <span><LocalAtm style={{marginLeft:'10px'}} /></span>
      </h3>
      
    </div>
    <Row className='mb-3'>
      <Col>UserID</Col>
      <Col>Charge Amount</Col>
      <Col>Start time</Col>
      <Col>Type</Col>
    </Row>
    {transactions != null &&
          transactions.map((user) => (
            <Row className='mb-1' key = {user.id}>
              <Col>{user.userID}</Col>
              <Col>{user.chargeAmount}</Col>
              <Col>{user.startTime}</Col>
              <Col>{user.type}</Col>
          </Row>

          ))}
    {/* <table className="dashboard__table">
      <thead>
        <tr className='d-flex justify-content-between'>
          <th>UserID</th>
          <th>Charge amount</th>
          <th>Start time</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        {transactions != null &&
          transactions.map((user) => (
            <Transaction key = {user.id}
            userID={user.userID}
            chargeAmount={user.chargeAmount}
            startTime={user.startTime}
            transactionType={user.type}
          ></Transaction>

          ))}
      </tbody>
    </table> */}
  </div>
  )
}

export default Transactions