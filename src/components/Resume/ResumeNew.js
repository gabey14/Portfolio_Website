import React, { useState, useEffect } from 'react'
import { Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Particle from '../Particle'
// import pdf from '../../Assets/../Assets/Abey-George-Resume.pdf'
import {
  AiFillCopy,
  AiOutlineDownload,
  AiOutlineShareAlt,
  AiOutlineWhatsApp,
} from 'react-icons/ai'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import Popup from 'reactjs-popup'
import './Resume.css'
import { motion } from 'framer-motion'
import { Zoom } from 'react-awesome-reveal'
import { useAlert } from 'react-alert'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

const resumeLink =
  'https://raw.githubusercontent.com/gabey14/Resume/master/Abey-George-Resume.pdf'

function ResumeNew() {
  const alert = useAlert()
  const [width, setWidth] = useState(1200)

  useEffect(() => {
    setWidth(window.innerWidth)
  }, [])

  // create a onclickhandler
  const onClickHandler = () => {
    // NOTE Change link to this resume page
    navigator.clipboard.writeText('https://gabey.me/resume')
    alert.success('Copied to clipboard')
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0 }}
    >
      <Container fluid className='resume-section'>
        <Particle />
        <Zoom>
          <Row style={{ justifyContent: 'center', position: 'relative' }}>
            <Button
              variant='primary'
              href={resumeLink}
              target='_blank'
              style={{ maxWidth: '250px' }}
            >
              <AiOutlineDownload />
              &nbsp;Download CV
            </Button>
          </Row>
        </Zoom>
        <Zoom>
          <Row className='resume'>
            <Document
              file={resumeLink}
              className='d-flex justify-content-center'
            >
              <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
            </Document>
          </Row>
        </Zoom>

        <br />
        <br />
        <br />
        <Zoom>
          <Row style={{ justifyContent: 'center', position: 'relative' }}>
            <Popup
              trigger={
                <Button
                  variant='primary'
                  // href={pdf}
                  // target='_blank'
                  style={{ maxWidth: '250px' }}
                >
                  <AiOutlineShareAlt />
                  &nbsp;Share CV
                </Button>
              }
              position='top center'
              // overlayStyle={}
              // arrow={false}
              arrowStyle={{ color: 'purple' }}
              contentStyle={{
                background: 'transparent',
                border: 'none',
                // padding: '2rem',
                width: '7rem',
                height: '5rem',
                borderRadius: '10px',
                // boxShadow: '0px 0px 10px rgba(0,0,0,0.5)',
                color: '#fff',
                // fontSize: '1.5rem',
                // fontWeight: 'bold',
                // textAlign: 'center',
              }}
              offsetY={5}
              // closeOnDocumentClick={false}
            >
              <div className='popup-icons'>
                <ul className='footer-icons'>
                  <li className='share-icons'>
                    <motion.a
                      className='whatsapp'
                      href='https://api.whatsapp.com/send?text=https://gabey.me/resume'
                      data-action='share/whatsapp/share'
                      style={{ color: 'white', fontSize: '1.2rem' }}
                      target='_blank'
                      rel='noopener noreferrer'
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9, x: '-5px', y: '5px' }}
                    >
                      <AiOutlineWhatsApp />
                    </motion.a>
                  </li>
                  <li className='share-icons'>
                    <motion.button
                      onClick={() => onClickHandler()}
                      style={{
                        color: 'white',
                        fontSize: '1.2rem',
                        background: 'transparent',
                        border: 'none',
                      }}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9, x: '-5px', y: '5px' }}
                    >
                      <AiFillCopy />
                    </motion.button>
                  </li>
                </ul>
              </div>
            </Popup>
          </Row>
        </Zoom>
      </Container>
    </motion.div>
  )
}

export default ResumeNew
