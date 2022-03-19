import React from 'react'
import { Link } from 'react-router-dom'
import './landing.css'
import HeaderImg from '../images/header.png'
import { Accordion, Col, Row } from 'react-bootstrap'
import About2 from '../images/about2.jpg'
function Landing() {
  return (
    <div className='landingContainer'>
      <Row className='landing__header'>
        <Col md={6} className="left">
          <h1>Our text goes here</h1>
          <p>More information of our text is here</p>
          <button>Explore</button>
        </Col>
        <Col md={6} className="right">
          <img src={HeaderImg} alt="" />
        </Col>
      </Row>
      <div className="landing__about">
        <h1>About Us</h1>
        <p>
          Industria grid is a system which allows you to track energy prices and allows users to purchase and sell different enrgy types as they wish to the National Grid. We as Industria grid, plan to make this process simple and beneficial
          for all users.
        </p>
        <Row>
          <Col>
            <img src={About2} alt="" />
          </Col>
          <Col>
            <img src={About2} alt="" />
          </Col>
          <Col>
            <img src={About2} alt="" />
          </Col>
        </Row>
      </div>
      <div className="landing__faq">
        <div>
          <h1>Frequently Asked Questions</h1>
          <p>What the customers ask will go here.. </p>
        </div>
        <div>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>The first question</Accordion.Header>
              <Accordion.Body>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa accusantium reiciendis molestias ipsum soluta ducimus alias provident dolor ullam aut?
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>The second question</Accordion.Header>
              <Accordion.Body>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa accusantium reiciendis molestias ipsum soluta ducimus alias provident dolor ullam aut?
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>The third question</Accordion.Header>
              <Accordion.Body>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa accusantium reiciendis molestias ipsum soluta ducimus alias provident dolor ullam aut?
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>The fourth question</Accordion.Header>
              <Accordion.Body>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa accusantium reiciendis molestias ipsum soluta ducimus alias provident dolor ullam aut?
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>The fifth question</Accordion.Header>
              <Accordion.Body>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa accusantium reiciendis molestias ipsum soluta ducimus alias provident dolor ullam aut?
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>

      <div className="landing__contact">
        <div>
          <h1>Contact Us</h1>
          <p>Will just be a contact form description over here..... </p>
        </div>
        <div className='contact__form'>
         <div className='left'>
           <input type="text"  placeholder='Full Name' />
           <input type="text"  placeholder='Email' />
           <input type="text"  placeholder='Phone No.' />
         </div>
         <div className='right'>
           <input type="text" placeholder='Subject' />
           <input type="text" placeholder='Message' />
         </div>
        </div>
      </div>
    </div>
  )
}

export default Landing