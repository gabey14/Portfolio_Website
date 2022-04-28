import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Particle from '../Particle'
import Github from './Github'
import Techstack from './Techstack'
import Aboutcard from './AboutCard'
import laptopImg from '../../Assets/about.png'
import Toolstack from './Toolstack'
import { motion } from 'framer-motion'
import { Rotate, Bounce, Zoom } from 'react-awesome-reveal'
function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0 }}
    >
      <Container fluid className='about-section'>
        <Particle />
        <Container>
          <Row style={{ justifyContent: 'center', padding: '10px' }}>
            <Col
              md={7}
              style={{
                justifyContent: 'center',
                paddingTop: '30px',
                paddingBottom: '50px',
              }}
            >
              <Rotate direction='bottom-left'>
                <h1 style={{ fontSize: '2.1em', paddingBottom: '20px' }}>
                  Know Who <strong className='purple'>I'M</strong>
                </h1>
              </Rotate>
              <Rotate direction='bottom-left' delay={400}>
                <Aboutcard />
              </Rotate>
            </Col>
            <Col
              md={5}
              style={{ paddingTop: '120px', paddingBottom: '50px' }}
              className='about-img'
            >
              <Rotate direction='bottom-left' delay={400}>
                <img src={laptopImg} alt='about' className='img-fluid' />
              </Rotate>
            </Col>
          </Row>
          <Bounce cascade fraction={1}>
            <h1 className='project-heading'>
              Professional <strong className='purple'>Skillset </strong>
            </h1>
          </Bounce>
          <Techstack />
          <Bounce cascade>
            <h1 className='project-heading'>
              <strong className='purple'>Tools</strong> I use
            </h1>
          </Bounce>
          <Toolstack />
          <Zoom direction='down' cascade fraction={0}>
            <Github />
          </Zoom>
        </Container>
      </Container>
    </motion.div>
  )
}

export default About
