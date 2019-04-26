import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
  import { NavLink } from "react-router-dom";

import './Navbar.css';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className= "Navigation">
        <Navbar color="light" light expand="md">
          <img src='image/lg.png'  className="Logo" alt ="logo"/>   
          <NavbarBrand href="/">Digg'n Share</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink exact to="/" className="link" activeClassName="active">Acceuil</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/Index" className="link" activeClassName="active">Artistes</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/newpresta/1" className="link" activeClassName="active">S'inscrire</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/pageContact" className="link" activeClassName="active">Nous Contacter</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/admin" className="link" activeClassName="active">Admin</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Se Connecter
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Utilisateur
                  </DropdownItem>
                  <DropdownItem>
                    Administrateur
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}