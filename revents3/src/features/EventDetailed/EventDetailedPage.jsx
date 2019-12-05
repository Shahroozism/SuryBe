import React, {Component} from 'react'
import {connect} from 'react-redux';
import { toastr } from 'react-redux-toastr';
import { Grid } from 'semantic-ui-react';
import { compose } from 'redux';
import EventDetailedHeader from './EventDetailedHeader';
import EventDetailedInfo from './EventDetailedInfo';
import EventDetailedChat from './EventDetailedChat';
import EventDetailedSideBar from '/Users/user/revents3/src/features/EventDetailed/EventDetailedSideBar.jsx';


const mapState = (state, ownProps) => { 
    const eventId = ownProps.match.params.id;

    let event = {};

    if (eventId && state.events.length > 0) {
        event = state.events.filter(event => event.id === eventId)[0];
    }

    return {
        event
    }
}

const EventDetailedPage = ({event}) => {
    return (
       <Grid> 
           <Grid.Column width ={10}> 
           <EventDetailedHeader event={event}/>
          <EventDetailedInfo event={event} /> 
          <EventDetailedChat/>
          </Grid.Column>
           <Grid.Column width = {6}>
           <EventDetailedSideBar attendees={event.attendees} />
           </Grid.Column>
       </Grid>
    );
};

export default connect(mapState)(EventDetailedPage);
