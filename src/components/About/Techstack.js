import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { CgCPlusPlus } from 'react-icons/cg'
import {
  DiJavascript1,
  DiReact,
  DiMongodb,
  DiPython,
  DiGit,
} from 'react-icons/di'
import { SiMysql, SiGo, SiJava, SiFlutter } from 'react-icons/si'
import { Zoom } from 'react-awesome-reveal'
function Techstack() {
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
      <Col xs={4} md={2} className='tech-icons'>
        <Zoom>
          <CgCPlusPlus />
        </Zoom>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <Zoom delay={100}>
          <DiReact />
        </Zoom>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <Zoom delay={200}>
          <DiMongodb />
        </Zoom>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <Zoom delay={300}>
          <SiJava />
        </Zoom>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <Zoom delay={400}>
          <DiGit />
        </Zoom>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <Zoom delay={500}>
          <SiMysql />
        </Zoom>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <Zoom delay={600}>
          <DiPython />
        </Zoom>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <Zoom delay={700}>
          <SiGo />
        </Zoom>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <Zoom delay={800}>
          <DiJavascript1 />
        </Zoom>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <Zoom delay={900}>
          <SiFlutter />
        </Zoom>
      </Col>
    </Row>
  )
}

export default Techstack
