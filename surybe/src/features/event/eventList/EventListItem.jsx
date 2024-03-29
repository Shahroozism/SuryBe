import React, { Component } from 'react'
import { Segment, Item, Icon, List, Button } from 'semantic-ui-react';
import EventListAttendees from './EventListAttendees';
import { Link } from 'react-router-dom';
import {format, parseISO} from 'date-fns';

class EventListItem extends Component {
    render() {
      const {event, deleteEvent} = this.props;
        return (
            <div>
                        <Segment.Group>
                           <Segment>
                             <Item.Group>
                               <Item>
                                 <Item.Image size="tiny" circular src={event.hostPhotoURL}/>
                                 <Item.Content>
                                   <Item.Header>{event.title}</Item.Header>
                                   <Item.Description>
                                     Hosted by {event.hostedBy}
                                   </Item.Description>
                                 </Item.Content>
                               </Item>
                             </Item.Group>
                           </Segment>
                           <Segment>
                             <span> 
                               <Icon name='clock' /> {format(parseISO(event.date), 'EEEE do LLL')}  at {' '} {format(parseISO(event.date), 'h:mm a')}|
                               <Icon name='marker' /> {event.venue}
                             </span>
                           </Segment>
                           <Segment secondary>
                             <List horizontal>
                               {event.attendees && event.attendees.map(attendee => (<EventListAttendees key={attendee.id} attendee={attendee}/>))}

                             </List>
                           </Segment>
                           <Segment clearing>
                               <span>{event.description}</span>
                             <Button  as={Link}  to ={`/events/${event.id}`} color="teal" floated="right" content="View" />
                             <Button  onClick={() => deleteEvent(event.id)} as="a" color="red" floated="right" content="Delete" />
                           </Segment>
                         </Segment.Group>
            </div>
        )
    }
}

export default EventListItem