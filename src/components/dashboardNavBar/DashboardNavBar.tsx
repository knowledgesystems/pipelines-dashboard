import * as React from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Nav, Navbar, NavDropdown} from 'react-bootstrap';

export interface IDashboardNavBarPros {
    className:string;
}

class DashboardNavBar extends React.Component<IDashboardNavBarPros, {}> {
    render() {
        return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/summary">Dashboard</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Item><Link to={'/summary'} className="nav-link">Summary</Link></Nav.Item>
                <Nav.Item><Link to={'/imports'} className="nav-link">Imports</Link></Nav.Item>
                <Nav.Item><Link to={'/developer'} className="nav-link">Developer</Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        )
    }
}
export default DashboardNavBar;