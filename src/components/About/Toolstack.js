import React from 'react'
import { Col, Row } from 'react-bootstrap'
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiNetlify,
  SiInsomnia,
  SiIntellijidea,
  SiVivaldi,
  SiUbuntu,
} from 'react-icons/si'

function Toolstack() {
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
      <Col xs={4} md={2} className='tech-icons'>
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiUbuntu />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiIntellijidea />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiInsomnia />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiNetlify />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiHeroku />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiVivaldi />
      </Col>
    </Row>
  )
}

export default Toolstack
