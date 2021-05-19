import React from 'react';
import { Row, Col } from 'antd';

function Tablecontent()
{
    return(
        <div className="Tablecontent">
        <Row className="tab-heading">
      <Col span={6}>First Name</Col>
      <Col span={6}>Last Name</Col>
      <Col span={6}>Age</Col>
      <Col span={6}>Gender</Col>
      
    </Row>
    <Row>
      <Col span={6}>Mano</Col>
      <Col span={6}>P</Col>
      <Col span={6}>21</Col>
      <Col span={6}>Male</Col>
    </Row>
    <Row>
      <Col span={6}>Rahul</Col>
      <Col span={6}>p</Col>
      <Col span={6}>18</Col>
      <Col span={6}>Male</Col>
    </Row>
    <Row>
    <Col span={6}>Tharun</Col>
      <Col span={6}>V</Col>
      <Col span={6}>25</Col>
      <Col span={6}>Male</Col>
    </Row>
    <Row>
      <Col span={6}>Daniel</Col>
      <Col span={6}>p</Col>
      <Col span={6}>26</Col>
      <Col span={6}>Male</Col>
    </Row>
    </div>
    );
}
export default Tablecontent;