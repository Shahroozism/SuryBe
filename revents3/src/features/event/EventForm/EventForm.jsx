/*global google*/

import React, { Component } from 'react';
import {connect} from 'react-redux';
import {reduxForm, Field} from 'redux-form';
import {geocodeByAddress,getLatLng} from 'react-places-autocomplete';
import {composeValidators,combineValidators,isRequired,hasLengthGreaterThan} from 'revalidate';
import cuid from 'cuid';
import { Segment, Form, Button, Grid, Header } from 'semantic-ui-react';
import {createEvent,updateEvent} from '/Users/user/revents3/src/features/event/eventList/eventActions.jsx';
import TextInput from '../../../app/common/form/TextInput';
import TextArea from '/Users/user/revents3/src/app/common/form/TextArea.jsx';
import SelectInput from '/Users/user/revents3/src/app/common/form/SelectInput';
import DateInput from '../../../app/common/form/DateInput';
import PlaceInput from '/Users/user/revents3/src/app/common/form/PlaceInput.jsx';

const mapState = (state, ownProps) => {
  const eventId = ownProps.match.params.id;

  let event = {};

  if (eventId && state.events.length > 0) {
  event = state.events.filter(event => event.id === eventId)[0]
  }

  return {
    initialValues: event
  }
}

const actions ={
  createEvent,updateEvent
};

const validate= combineValidators({
  title: isRequired({message: 'The Review is required'}),
  category: isRequired ({ message: 'The Category is required '}),
  description: composeValidators (
    isRequired({ message: 'Please enter a description'}),
    hasLengthGreaterThan(4)({message: 'Description needs to be at least 5 characters'})
  )(),
  city: isRequired('city'),
  venue: isRequired('venue'),
  date: isRequired('date')
})

const category = [
    {key: 'Local', text: 'Local', value: 'local'},
    {key: 'Medical', text: 'Medical', value: 'medical'},
    {key: 'Construction', text: 'Construction', value: 'construction'},
    {key: 'culture', text: 'Culture', value: 'culture'},
    {key: 'film', text: 'Film', value: 'film'},
    {key: 'food', text: 'Food', value: 'food'},
    {key: 'music', text: 'Music', value: 'music'},
    {key: 'travel', text: 'Travel', value: 'travel'},
];

class EventForm extends Component {

  state = {
    cityLatLng:{},
    venueLatLng:{}
  }
 
  onFormSubmit = values => {
    values.venueLatLng = this.state.venueLatLng;
  if (this.props.initialValues.id) {
    this.props.updateEvent(values);
    this.props.history.push(`/events/${this.props.initialValues.id}`)
  } else {

    const newEvent = {
      ...values,
      idd: cuid(),
      hostPhotoURL: '/Users/user/revents3/public/Assests/user.png',
      hostedBy: 'Behzad'
    }
  this.props.createEvent(this.state);
  this.props.history.push(`/events/${newEvent.id}`);
  }
  };

  handleCitySelect = selectedCity => { 
    geocodeByAddress(selectedCity)
      .then(results => getLatLng(results[0]))
      .then(latlng => {
        this.setState({
          cityLatLng:latlng
        })
      })
      .then(() => {
        this.props.change('city', selectedCity)
      })
  };

  handleVenueSelect = selectedVenue => { 
    geocodeByAddress(selectedVenue)
      .then(results => getLatLng(results[0]))
      .then(latlng => {
        this.setState({
          venueLatLng:latlng
        })
      })
      .then(() => {
        this.props.change('venue', selectedVenue)
      })
  }

    render() {
      const{history, initialValues, invalid, submitting, pristine} = this.props;
        return (
          <Grid> 
            <Grid.Column width={10}>
            <Segment>
              <Header sub color='teal' content='Review Details'/>
                       <Form onSubmit ={this.props.handleSubmit(this.onFormSubmit)} autoComplete ='off'>
                         
                         <Field name='title' component ={TextInput} placeholder='Give your review a name'/> 
                         <Field name='category' component ={SelectInput} options={category} placeholder='What is your review about?'/> 
                         <Field name='description' component ={TextArea}
                         rows={3}
                          placeholder='Tell us about your experience'/> 
                         <Header sub color='teal' content='Review Location Details'/>
                         <Field name='city' component ={PlaceInput} options={{types:['(cities)']}} onSelect={this.handleCitySelect} placeholder='Review City'/> 
                         <Field name='venue' component ={PlaceInput} options={{ location: new google.maps.LatLng(this.state.cityLatLng), radius: 1000, types: ['establishment']}} onSelect={this.handleVenueSelect} placeholder='Review Venue'/> 
                         <Field name='dates' component ={DateInput} dateFormat='dd LLL yyyy h:mm a' showTimeSelect timeFormat='HH:mm' placeholder='Review Date'/> 
                         
                         <Button  disabled={invalid || submitting || pristine} positive type="submit">
                           Submit
                         </Button>
                         <Button  onClick= {initialValues.id ? () => history.push('/events/${initialValues.id}') : () => history.push('/events')} type="button">Cancel</Button>
                       </Form>
                     </Segment> 
            </Grid.Column>
          </Grid> 
          

        );
    }
}

export default connect(mapState,actions)(reduxForm({form: 'eventForm', validate}) (EventForm));