import React from 'react';
import {Navbar, NavbarBrand, Jumbotron, Nav, NavItem, Collapse, NavbarToggler, Modal, ModalBody, ModalHeader, Button, Form, Input, Label, FormGroup} from 'reactstrap';
import {NavLink} from 'react-router-dom';

 class Header extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };
    }

    toggleNav(){
            this.setState({isNavOpen : !this.state.isNavOpen});        
    }

    toggleModal(){
        this.setState({isModalOpen: !this.state.isModalOpen});
    }

    handlelogin(event){
        this.toggleModal();
        alert("Username: " + this.username.value + " Password: " + this.password.value + " Remember: " + this.remember.checked);
        event.preventDefault();
    }

    render(){
        
        return(
            <>
                <Navbar dark expand="md" className="fixed-top">
                    <div className="container">
                        <NavbarToggler onClick={() => this.toggleNav()} />
                        <NavbarBrand href="/" className="mr-auto"><img src="assets/images/logo.png" height="35" width="45" alt="Ristorante Con Fusion"/></NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home"><span className="fa fa-home fa-lg"></span> Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/aboutus"><span className="fa fa-lg fa-info"></span> About Us</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/menu"><span className="fa fa-lg fa-list"></span> Menu</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contactus"><span className="fa fa-lg fa-address-card"></span> Contat Us</NavLink>
                                </NavItem>
                            </Nav>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Button outline onClick={() => this.toggleModal()}><span className="fa fa-sign-in fa-lg"></span> Login</Button>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-md-6">
                                <h1>Ristorante con Fusion</h1>
                                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Modal isOpen={this.state.isModalOpen} toggle={() => this.toggleModal()}>
                    <ModalHeader toggle={() => this.toggleModal()}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={(event) => this.handlelogin(event)}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" name="username" id="username" placeholder="Username" innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" name="password" id="password" placeholder="Password" innerRef={(input) => this.password = input} />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember" innerRef={(input) => this.remember = input}/>
                                     Remember me
                                </Label>
                            </FormGroup>
                            <FormGroup>
                                <Button type="submit" value="submit" className="bg-primary">Login</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </>
        );
    }

 }

 export default Header;