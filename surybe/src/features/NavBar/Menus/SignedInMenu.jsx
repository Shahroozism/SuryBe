import React from 'react'
import { Menu, Image, Dropdown} from 'semantic-ui-react';
import { Link} from 'react-router-dom';

const SignedinMenu = ({signOut, currentUser}) => {
    return (
           <Menu.Item position="right">
             <Image avatar spaced="right" src='/Assests/user.png' />
             <Dropdown pointing="top left" text={currentUser}>
               <Dropdown.Menu>
                 <Dropdown.Item text="Create Review" icon="plus" />
                 <Dropdown.Item text="My Reviews" icon="calendar" />
                 <Dropdown.Item text="My Business" icon="users" />
                 <Dropdown.Item text='My Profile' icon='user' />
                 <Dropdown.Item as={Link} to="/settings" text="Settings" icon='settings' />
                 <Dropdown.Item onClick={signOut} text="Sign Out" icon='power' />
               </Dropdown.Menu>
             </Dropdown>
           </Menu.Item>
           
    )
};

export default SignedinMenu
