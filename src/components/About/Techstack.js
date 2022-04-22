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

function Techstack() {
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
      <Col xs={4} md={2} className='tech-icons'>
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiReact />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiJava />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiGit />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiPython />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiGo />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiFlutter />
      </Col>
    </Row>
  )
}

export default Techstack
