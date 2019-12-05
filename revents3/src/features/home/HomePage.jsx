import React from 'react'
import { Segment, Container, Header, Button, Icon, Image } from 'semantic-ui-react';

const HomePage = ({history}) => {
    return (
        <div>
                <Segment inverted textAlign='center' vertical className='masthead'>
                <Container text>
                  <Header as='h1' inverted>
                    <Image
                      size='massive'
                      src='Assests/novadvertising.png'
                      alt='logo'
                      style={{ marginBottom: 12 }}
                    />
                    Nova Advertising 
                  </Header>
                  <Button onClick={() => history.push ('/events')} size='huge' inverted>
                    Get started
                    <Icon name='right arrow' inverted />
                  </Button>
                </Container>
              </Segment>
        </div>
    )
}

export default HomePage

