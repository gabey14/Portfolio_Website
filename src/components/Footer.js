import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillHeart,
  AiFillMail,
} from 'react-icons/ai'
import { FaLinkedinIn, FaDiscord } from 'react-icons/fa'
import { RiWhatsappFill } from 'react-icons/ri'
import { Slide } from 'react-awesome-reveal'
function Footer() {
  let date = new Date()
  let year = date.getFullYear()
  return (
    <Container fluid className='footer'>
      <Row>
        <Col md='4' className='footer-copywright'>
          <Slide direction='down' duration={500} cascade>
            <h3>
              Developed by Abey George{' '}
              <a
                href='https://github.com/soumyajit4419/Portfolio'
                target='_blank'
                rel='noopener noreferrer'
                style={{ color: '#c770f0' }}
              >
                <AiFillHeart />
              </a>
            </h3>
          </Slide>
        </Col>
        <Col md='4' className='footer-copywright'>
          <Slide direction='down' duration={500} delay={200}>
            <h3>Copyright © {year} AG</h3>
          </Slide>
        </Col>
        <Col md='4' className='footer-body'>
          <Slide direction='down' cascade delay={100} duration={200}>
            <ul className='footer-icons'>
              <li className='social-icons'>
                <a
                  href='https://github.com/gabey14'
                  style={{ color: 'white' }}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className='social-icons'>
                <a
                  href='https://www.linkedin.com/in/gabey14/'
                  style={{ color: 'white' }}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className='social-icons'>
                <a
                  href='https://www.instagram.com/g_abey/'
                  style={{ color: 'white' }}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className='social-icons'>
                <a
                  href='https://twitter.com/Abeygeorge14'
                  style={{ color: 'white' }}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className='social-icons'>
                <a
                  style={{ color: 'white' }}
                  href="mailto:abeygeorge14@gmail.com?subject=Get%20in%20touch%2C%20Let's%20Talk!"
                  target='_blank'
                  rel='noreferrer'
                >
                  <AiFillMail />
                </a>
              </li>
              <li className='social-icons'>
                <a
                  style={{ color: 'white' }}
                  href='https://discordapp.com/users/762520608688832533'
                  target='_blank'
                  rel='noreferrer'
                >
                  <FaDiscord />
                </a>
              </li>
              <li className='social-icons'>
                <a
                  style={{ color: 'white' }}
                  href='https://api.whatsapp.com/send?phone=+918169879795'
                  target='_blank'
                  rel='noreferrer'
                >
                  <RiWhatsappFill />
                </a>
              </li>
            </ul>
          </Slide>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer
