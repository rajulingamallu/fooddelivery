import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import Veg from './Veg';
import BreakfastLatest from './Breakfast/BreakfastLatest';
import NonVeg from './Nonveg';
import Softdrinks from './Softdrinks';
import Wine from './Wine';


const All_items = () => {
  return (
    <Container>
      <Row>
      <h1 style={{color:'lightskyblue'}}>Breakfast-Section</h1>
        <Col>{Veg}</Col>
        <h1 style={{color:'lightskyblue'}}>Veg-Section</h1>
        <Col>{BreakfastLatest}</Col>
      </Row>
      <Row>
        <h1 style={{color:'lightpink'}}>NonVeg-Section</h1>
        <Col>{NonVeg}</Col>
      </Row>
      <Row>
        <h1 style={{color:'lightgreen'}}>Softdrink-Section</h1>
        <Col>{Softdrinks}</Col>
        <h1 style={{color:'lightgreen'}}>Wine-Section</h1>
        <Col>{Wine}</Col>
      </Row>
    </Container>
  )
}

export default All_items