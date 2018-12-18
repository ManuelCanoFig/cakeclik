import React, {Component} from 'react';
import {
    Navbar,
    Nav,
    NavItem,
    NavLink,
   } from 'reactstrap';


class Footer extends Component{
    render(){
        return(
            <Navbar  light expand="md">
                <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink href="#">Registrate</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">Ya soy cliente</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">
                        iconcard
                    </NavLink>
                </NavItem>
                </Nav>
            </Navbar>
        )
    }
}

export default Footer;