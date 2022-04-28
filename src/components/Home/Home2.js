import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import myImg from '../../Assets/avatar.svg'
import Tilt from 'react-parallax-tilt'
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillMail,
} from 'react-icons/ai'
import { FaLinkedinIn, FaDiscord } from 'react-icons/fa'
import { RiWhatsappFill } from 'react-icons/ri'
import { Fade, AttentionSeeker } from 'react-awesome-reveal'
function Home2() {
  return (
    <Container fluid className='home-about-section' id='about'>
      <Container>
        <Row>
          <Col md={8} className='home-about-description'>
            <Fade duration={4000} fraction={0.7}>
              <h1 style={{ fontSize: '2.6em' }}>
                LET ME <span className='purple'> INTRODUCE </span> MYSELF
              </h1>
            </Fade>
            <Fade duration={4000} delay={800}>
              <p className='home-about-body'>
                A tech enthusiast whose goal is to follow my passion for
                technology and build things that make people's lives better.
                During my sophomore year of college, I fell in love with
                programming 🖥
                <br />
                <br />I am proficient in few languages like
                <i>
                  <b className='purple'> Java, Golang & Python. </b>
                </i>
                <br />
                <br />
                My field of Interest's are working with new &nbsp;
                <i>
                  <b className='purple'>
                    Web Technologies, Cloud Computing & Linux
                  </b>{' '}
                  and also in areas related to{' '}
                  <b className='purple'>
                    Deep Learning, Artificial Intelligence & Machine Learning.
                  </b>
                </i>
                <br />
                <br />
                Whenever possible, I try to learn new things and improve my
                skillset with <b className='purple'>New Technologies</b> and get
                stronger in{' '}
                <b className='purple'>Data Structures & Algorithms</b>
                .
                <br />
                <br />
                In my free time, I like to play{' '}
                <b className='purple'>chess & listen to music</b>. I constantly
                strive to be the <b className='purple'>best version</b> of
                myself while uplifting the people I work with.
              </p>
            </Fade>
          </Col>
          <Col md={4} className='myAvtar'>
            <Fade duration={4000} delay={800}>
              <Tilt>
                <img src={myImg} className='img-fluid' alt='avatar' />
              </Tilt>
            </Fade>
          </Col>
        </Row>
        <Row>
          <Col md={12} className='home-about-social'>
            <AttentionSeeker effect='flash' triggerOnce delay={800}>
              <h1>FIND ME ON</h1>
              <p>
                Feel free to <span className='purple'>connect </span>with me
              </p>
              <ul className='home-about-social-links'>
                <li className='social-icons'>
                  <a
                    href='https://github.com/gabey14'
                    target='_blank'
                    rel='noreferrer'
                    className='icon-colour  home-social-icons'
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className='social-icons'>
                  <a
                    href='https://www.linkedin.com/in/gabey14/'
                    target='_blank'
                    rel='noreferrer'
                    className='icon-colour  home-social-icons'
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className='social-icons'>
                  <a
                    href='https://www.instagram.com/g_abey/'
                    target='_blank'
                    rel='noreferrer'
                    className='icon-colour home-social-icons'
                  >
                    <AiFillInstagram />
                  </a>
                </li>
                <li className='social-icons'>
                  <a
                    href='https://twitter.com/Abeygeorge14'
                    target='_blank'
                    rel='noreferrer'
                    className='icon-colour  home-social-icons'
                  >
                    <AiOutlineTwitter />
                  </a>
                </li>
                <li className='social-icons'>
                  <a
                    href="mailto:abeygeorge14@gmail.com?subject=Get%20in%20touch%2C%20Let's%20Talk!"
                    target='_blank'
                    rel='noreferrer'
                    className='icon-colour  home-social-icons'
                  >
                    <AiFillMail />
                  </a>
                </li>
                <li className='social-icons'>
                  <a
                    href='https://discordapp.com/users/762520608688832533'
                    target='_blank'
                    rel='noreferrer'
                    className='icon-colour  home-social-icons'
                  >
                    <FaDiscord />
                  </a>
                </li>
                <li className='social-icons'>
                  <a
                    href='https://api.whatsapp.com/send?phone=+918169879795'
                    target='_blank'
                    rel='noreferrer'
                    className='icon-colour  home-social-icons'
                  >
                    <RiWhatsappFill />
                  </a>
                </li>
              </ul>
            </AttentionSeeker>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}
export default Home2
