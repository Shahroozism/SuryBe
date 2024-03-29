import React from 'react';
import { Segment, Item, Label, List} from 'semantic-ui-react';
import { Link } from 'react-router-dom'

const EventDetailedSideBar = ({attendees}) => {
  const isHost = false;
    return (
        <div>
                
                  <Segment
                    textAlign='center'
                    style={{ border: 'none' }}
                    attached='top'
                    secondary
                    inverted
                    color='teal'
                  >
                    {attendees && attendees.length} {attendees && attendees.length === 1 ? 'Person' : 'People'} Gave Reviews
                  </Segment>
                  <Segment attached>
                    <List related divided>
                      {attendees && attendees.map((attendee)=> (
                        <Item  key={attendee.id} style={{ position: 'relative' }}>
                          {isHost && 
                        <Label 
                          style={{ position: 'absolute' }}
                          color='orange'
                          ribbon='right'>

                          Review
                        </Label>}
                        <Item.Image size='tiny' src={attendee.photoURL} />
                        <Item.Content verticalAlign='middle'>
                          <Item.Header as ="h3">
                          <Link to={`/profile/${attendee.id}`}>{attendee.displayName}</Link>
                          </Item.Header>
                        </Item.Content>
                      </Item>
                    
                   
                      ))}
                    </List>
                    </Segment>
        </div>
    );
};

export default EventDetailedSideBar;
