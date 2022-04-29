import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { BiLinkExternal } from 'react-icons/bi'
import { Zoom } from 'react-awesome-reveal'

function ProjectCards(props) {
  return (
    <Zoom cascade>
      <Card className='project-card-view'>
        <Card.Img variant='top' src={props.imgPath} alt='card-img' />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text style={{ textAlign: 'justify' }}>
            {props.description}
          </Card.Text>
          <Button variant='primary' href={props.link} target='_blank'>
            <BiLinkExternal /> &nbsp;
            {props.isBlog ? 'View Blog' : 'Source Code'}
          </Button>{' '}
          <br />
          <br />
          <Button variant='primary' href={props.live} target='_blank'>
            <BiLinkExternal /> &nbsp;
            {'Live Project'}
          </Button>
        </Card.Body>
      </Card>
    </Zoom>
  )
}
export default ProjectCards
