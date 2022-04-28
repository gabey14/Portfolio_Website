import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ProjectCard from './ProjectCards'
import Particle from '../Particle'

import irrigation from '../../Assets/Projects/autoirrigation.png'
import taskercli from '../../Assets/Projects/taskercli.png'
import vscoderecent from '../../Assets/Projects/vscode_recent.png'
import swiftecom from '../../Assets/Projects/swiftecom.png'
import task from '../../Assets/Projects/task.png'
import { motion } from 'framer-motion'

function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      exit={{ opacity: 0 }}
    >
      <Container fluid className='project-section'>
        <Particle />
        <Container>
          <h1 className='project-heading'>
            My Recent <strong className='purple'>Works </strong>
          </h1>
          <p style={{ color: 'white' }}>
            Here are a few projects I've worked on recently.
          </p>
          <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
            <Col md={4} className='project-card'>
              <ProjectCard
                imgPath={taskercli}
                isBlog={false}
                title='Tasker CLI'
                description='Tasker CLI is a task management system for technical people. It is a command-line application that is very fast and easy to use. The CLI is fast, powerful and intuitive. It is built using Golang & Cobra CLI framework.'
                link='https://github.com/gabey14/tasker-gocli'
                live='https://sites.google.com/view/tasker-cli/home'
              />
            </Col>

            <Col md={4} className='project-card'>
              <ProjectCard
                imgPath={vscoderecent}
                isBlog={false}
                title='Vscode-Recent Ulauncher Extension'
                description='🖥 Open recent Vs Code folders and files using Ulauncher. My First Open Source Contribution was to this project which got merged and as it is a very useful tool for me to open my Vs Code projects easily.'
                link='https://github.com/plibither8/ulauncher-vscode-recent/pull/17'
                live='https://ext.ulauncher.io/-/github-plibither8-ulauncher-vscode-recent'
              />
            </Col>

            <Col md={4} className='project-card'>
              <ProjectCard
                imgPath={swiftecom}
                isBlog={false}
                title='Swift Ecommerce Store'
                description='An E-commerce web-application which provides various features like sorting, filtering, as well as two view options   Grid & List. Custom hooks have been used along with Redux. Responsive Website with support for authentication for login by Auth0 along with Stripe payment and Serverless functions.'
                link='https://github.com/gabey14/Swift-Ecommerce-Store'
                live='https://swift-ecommerce-store.netlify.app'
              />
            </Col>

            <Col md={4} className='project-card'>
              <ProjectCard
                imgPath={task}
                isBlog={false}
                title='Task Manager - Flutter'
                description='A cross-platform application built using Flutter where one can manage their incomes, subscriptions, etc and their daily tasks. Has the major sign-in options along with guest user access the data is stored in a real-time database in Firebase.'
                link='https://github.com/gabey14/Task-Manager'
                live='https://sites.google.com/view/taskmanager-in/home'
              />
            </Col>

            <Col md={4} className='project-card'>
              <ProjectCard
                imgPath={irrigation}
                isBlog={false}
                title='Auto-Irrigation-System'
                description='The problems regarding the manual irrigation system were analyzed & this project aims to solve those problems by using an efficient Auto Irrigation System using an Arduino-UNO. It provides water to the plants whenever it detects the moisture level of the soil is less with the help of the moisture sensor also an LDR is used to identify if its day or night and decide if the pump should be on or off. We have used a light dependent resistor (LDR) to identify day or night. We have used submersible water pump to provide water to the soil.'
                link='https://github.com/gabey14/Auto-Irrigation-System'
                live='https://github.com/gabey14/Auto-Irrigation-System/blob/main/ES%20PROJECT.png'
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </motion.div>
  )
}

export default Projects
