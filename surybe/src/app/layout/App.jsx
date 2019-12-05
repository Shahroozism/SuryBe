import React, {Component, Fragment} from 'react';
import EventDashboard from '../../features/event/eventDasboard/EventDashboard';
import Navbar from '../../features/NavBar/Navbar';
import {Container} from 'semantic-ui-react';
import {Route,Switch,withRouter } from 'react-router-dom';
import EventDetailedPage from '../../features/EventDetailed/EventDetailedPage';
import PeopleDashboard from '../../features/user/PeopleDashboard/PeopleDashboard';
import SettingsDashboard from '../../features/user/Settings/SettingsDashboard';
import UserDetailedPage from '../../features/user/UserDetailed/UserDetailedPage';
import EventForm from '../../features/event/EventForm/EventForm';
import TestComponent from '../../features/TestArea/TestComponent';
import HomePage from '../../features/home/HomePage';
import ModalManager from '/Users/user/revents3/src/features/modals/ModalManager';


class App extends Component {
render() {
return (
   <Fragment> 
       <ModalManager/>
       <Route  exact path='/' component={HomePage}/>
       <Route path='/(.+)' render={() => (
 <Fragment> 
 <Navbar/>
 <Container className='main'> 
 <Switch key={this.props.location.key}>
 <Route exact path='/events' component={EventDashboard}/>
 <Route path='/events/:id' component={EventDetailedPage}/>
 <Route path='/people' component={PeopleDashboard}/>
 <Route path='/profile/:id' component={UserDetailedPage}/>
 <Route path="/settings" component={SettingsDashboard} />
 <Route path={['/createEvent', '/manage/:id']} component={EventForm}/>
 <Route path='/test' component={TestComponent}/>
 </Switch>
 
  </Container>
  </Fragment>
       )}/>
    </Fragment>
   )
}
}



export default withRouter (App);