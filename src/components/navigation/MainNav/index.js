import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import { H4, H5, Img } from 'components/general';
import { blueGradient } from 'components/theme/DeepCast/gradients';

const MainNavbar = styled(Navbar)`
  background: ${blueGradient};
`;
const DCLogo = styled.div`
  margin-top: 5px;
  img {
    width: 15% !important;
    margin-top: -5px;
  }
  h4 {
    font-weight: 700;
    color: dodgerblue;
    margin-top: 5px;
  }
  h5 {
    font-weight: 600;
    color: red;
  }
`;

export class MainNav extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <div>
        {/* <MainNavbar color="dark" dark expand="md" className="fixed-top"> */}
        <MainNavbar color="dark" dark expand="md">
          <NavbarBrand tag={Link} to="/" className="p-0">
            <DCLogo>
              <Img
                src="/images/deepcast-logo.png"
                alt=""
                className="img-fluid"
              />
              <H4 light className="d-inline">
                DeepCast
              </H4>
              <H5 light className="d-inline">
                .ai
              </H5>
            </DCLogo>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to="/">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="product">
                  Product
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="solutions">
                  Solutions
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="media">
                  Media
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="about">
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="sendgrid">
                  SendGrid
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="test">
                  Test
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </MainNavbar>
      </div>
    );
  }
}

export default MainNav;
