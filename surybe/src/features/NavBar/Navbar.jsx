import { Menu, Container } from 'semantic-ui-react';
import React, { Component , Fragment}  from 'react';
import {connect} from 'react-redux';
import { Button} from 'semantic-ui-react';
import {NavLink, Link, withRouter} from 'react-router-dom';
import SignedOutMenu from './Menus/SignedOutMenu';
import SignedInMenu from './Menus/SignedInMenu';
import {openModal} from '/Users/user/revents3/src/features/modals/modalActions.js'
import {logout} from '/Users/user/revents3/src/features/user/auth/authActions'

const actions = {
  openModal, logout
}

const mapState = (state) => ({
  auth:state.auth
})

class Navbar extends Component {

  handleSignIn = () => {
   this.props.openModal('LoginModal')
  };

  handleRegister = () => {
    this.props.openModal('RegisterModal')
  };
  

handleSignOut = () => {
  this.props.logout()
  this.props.history.push('/')
};


      render() {
      const {auth} =this.props;
      const authenticated = auth.authenticated;
        return (
            <div>
                      <Menu inverted fixed="top">
                        <Container>
                          <Menu.Item as={NavLink} exact to='/' header>
                            <img src="/Assests/novadvertising.png" alt="logo" />
                            SURY EVENTS
                          </Menu.Item>
                          <Menu.Item as={NavLink}  exact to='/events' name="Events" />
                          {authenticated && 
                          <Fragment> 
                          <Menu.Item as={NavLink} to='/test' name="People" />
                          <Menu.Item as={NavLink} to='/test' name="Companies" />
                          <Menu.Item>
                            <Button as={Link} to='createEvent' floated="right" positive inverted content="Create Review" />
                          </Menu.Item>}
                          </Fragment>
                          }
                          {authenticated ?  ( <SignedInMenu signOut ={this.handleSignOut} currentUser={auth.currentUser} /> ) : (<SignedOutMenu signIn={this.handleSignIn} register={this.handleRegister} />
                          )}
              
                        </Container>
                      </Menu>
            </div>
        )
    }
}

export default withRouter(connect (mapState, actions) (Navbar));

