import React from 'react'
import Card from 'react-bootstrap/Card'
import { ImPointRight } from 'react-icons/im'

function AboutCard() {
  return (
    <Card className='quote-card-view'>
      <Card.Body>
        <blockquote className='blockquote mb-0'>
          <p style={{ textAlign: 'justify' }}>
            Hi Everyone, I am <span className='purple'>Abey George </span>
            from <span className='purple'> Mumbai, India.</span>
            <br />I am an Undergraduate student currently pursuing my Bachelor's
            Degree in Information Technology from St. Xavier's College.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className='about-activity'>
              <ImPointRight /> Playing Games
            </li>
            <li className='about-activity'>
              <ImPointRight /> Working with Custom Roms
            </li>
            <li className='about-activity'>
              <ImPointRight /> Watching Movies & Shows
            </li>
          </ul>

          <p style={{ color: 'rgb(155 126 172)' }}>
            " When something is important enough, you do it even if the odds are
            not in your favor. "{' '}
          </p>
          <footer className='blockquote-footer'>Elon Musk</footer>
        </blockquote>
      </Card.Body>
    </Card>
  )
}

export default AboutCard
