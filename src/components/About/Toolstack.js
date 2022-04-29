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
import { Zoom } from 'react-awesome-reveal'

function Toolstack() {
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
      <Col xs={4} md={2} className='tech-icons'>
        <Zoom>
          <SiLinux />
        </Zoom>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <Zoom delay={50}>
          <SiUbuntu />
        </Zoom>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <Zoom delay={100}>
          <SiVisualstudiocode />
        </Zoom>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <Zoom delay={150}>
          <SiIntellijidea />
        </Zoom>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <Zoom delay={200}>
          <SiPostman />
        </Zoom>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <Zoom delay={250}>
          <SiInsomnia />
        </Zoom>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <Zoom delay={300}>
          <SiNetlify />
        </Zoom>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <Zoom delay={350}>
          <SiHeroku />
        </Zoom>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <Zoom delay={400}>
          <SiVivaldi />
        </Zoom>
      </Col>
    </Row>
  )
}

export default Toolstack
