import React from 'react';
import {Breadcrumb, BreadcrumbItem, Label, Col, Button , Row} from 'reactstrap';
import {Link} from 'react-router-dom';
import {Form, Control, Errors} from 'react-redux-form';

const required = (val) => val && val.length;
const maxlength = (val) => !val || val.length<=15;
const minlength = (val) => !val || val.length>=3;
const email = (val) => !val || /^[a-z0-9.-_]+@[a-z0-9.-_]+\.[a-z]{2,4}$/i.test(val);
const number = (val) => !val || !isNaN(Number(val));

class Contact extends React.Component {

    constructor(props){
        super(props);
    }

    handleSubmit(values){
        console.log("Current state is :" + JSON.stringify(values));
        alert("Current state is :" + JSON.stringify(values));
        this.props.resetfeedbackform();
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to ="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12"><h3>Contact Us</h3><hr /></div>
                </div>
                <div className="row rowsection">
                    <div className="col-12">
                    <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                            <h5>Our Address</h5>
                            <address>
                            121, Clear Water Bay Road<br />
                            Clear Water Bay, Kowloon<br />
                            HONG KONG<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                            </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1 mb-5">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info" href="/"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
                <div className="row rowsection">
                    <div className="col-12">
                        <h3>Send us your feedback</h3>
                    </div>
                    <div className="col-12 col-md-9">
                        <Form model="feedback" onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Control.text model=".firstname" id="firstname" name="firstname" placeholder="First Name" className="form-control" validators={{required, minlength, maxlength}} />                                
                                    <Errors show="touched" className="text-danger" model=".firstname" messages={{
                                                                                                                required: 'Required ',
                                                                                                                minlength: 'Minimum 3 characters required ',
                                                                                                                maxlength: 'Maximum of 15 characters are allowed'
                                    }} />
                                </Col>        
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="lastname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Control.text model=".lastname" id="lastname" name="lastname" placeholder="Last Name" className="form-control" validators={{required, minlength, maxlength}} />                                
                                    <Errors show="touched" className="text-danger" model=".lastname" messages={{
                                                                                                                required: 'Required ',
                                                                                                                minlength: 'Minimum 3 characters required ',
                                                                                                                maxlength: 'Maximum of 15 characters are allowed'
                                    }} />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Control.text model=".email" id="email" name="email" placeholder="Email" className="form-control" validators={{required, email}} />                                
                                    <Errors show="touched" className="text-danger" model=".email" messages={{
                                                                                                            required: 'Required',
                                                                                                            email: 'Enter a valid Email ID'
                                    }} />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="telnum" md={2}>Tel. Number</Label>
                                <Col md={10}>
                                    <Control.text model=".telnum" id="telnum" name="telnum" placeholder="Tel. Number" className="form-control" validators={{required, number}} />
                                    <Errors show="touched" className="text-danger" model=".telnum" messages={{
                                                                                                            required: 'Required',
                                                                                                            number: 'Enter a valid Tel. number'
                                    }} />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size:6, offset:2}}>
                                    <div className="form-check">
                                        <Label check>
                                            <Control.checkbox model=".agree" name="agree" className="form-check-input" />{' '}
                                            <strong>May we contact you</strong>
                                        </Label>
                                    </div>
                                </Col>
                                <Col md={{size:3, offset:1}}>
                                    <Control.select model=".contacttype" name="contacttype" className="form-control">
                                        <option>Tel. Number</option>
                                        <option>Email</option>
                                    </Control.select>                             
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="message" md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Control.textarea model=".message" id="message" name="message" rows="12" className="form-control" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size:10, offset:2}}>
                                    <Button type="submit" color="primary">Send Feedback</Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;