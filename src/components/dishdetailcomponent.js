import React from 'react';
import {Card, CardText, CardImg, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, Label, Row, Col} from 'reactstrap';
import { Link } from 'react-router-dom';
import { LocalForm, Control, Errors } from 'react-redux-form';

    function Rendercard(dish){
        if(dish == null){
            return(<div></div>);
        }
        else{
            return(
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg src={dish.image} alt={dish.name}/>
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText> 
                        </CardBody>
                    </Card>
                </div>
            );
        }
    }

    function Rendercardcomment(comments, addcomment , id){
        if(comments == null){
            return(<div></div>);
        }
        else{
            const comments_card=comments.map((comment)=>{
                return(
                    <li>
                        <p>{comment.comment}</p>
                        <p>--{comment.author},  &nbsp;
                            {new Intl.DateTimeFormat('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: '2-digit'
                            }).format(new Date(comment.date))}</p>
                </li>
                );
            });
            return(
                <div className="col-12 col-md-5 m-1">
                    <h3>Comments</h3>
                    <ul className="list-unstyled">
                        {comments_card}
                    </ul>
                    <Commentform addcomment={addcomment} id={id}/>
                </div>
            );
        }
    }

    const DishDetail = (props) => {
        if(props.dish != null){
            const cardbody = Rendercard(props.dish);
            const cardcomments = Rendercardcomment(props.comments, props.addcomment, props.dish.id);
            return(
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to ="/menu">Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12"><h3>{props.dish.name}</h3><hr /></div>
                    </div>
                    <div className="row">
                        {cardbody}
                        {cardcomments}
                    </div>
                </div>
            );
        }
        else{
            return(<div></div>);
        }

    }

    const required = (val) => val && val.length;
    const maxlength = (val) => !val || val.length<=15;
    const minlength = (val) => !val || val.length>=3;

    class Commentform extends React.Component{

        constructor(props){
            super(props);
            this.state={
                iscommentmodalopen: false
            }
        }

        togglecommentmodal(){
            this.setState({iscommentmodalopen: !this.state.iscommentmodalopen})
        }

        onsubmit(values){
            this.togglecommentmodal();
            this.props.addcomment(this.props.id, values.rating, values.name, values.comment);
        }

        render(){
            return(
                <>
                <div>
                    <Button outline onClick={() => this.togglecommentmodal()}><span className="fa fa-lg fa-pencil"></span> Submit Comment</Button>
                </div>
                <Modal isOpen={this.state.iscommentmodalopen} toggle={() => this.togglecommentmodal()}>
                    <ModalHeader toggle={() => this.togglecommentmodal()}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.onsubmit(values)}>
                            <Row className="form-group">
                                <Col>
                                    <Label htmlFor="ratings">Ratings</Label>
                                    <Control.select model=".ratings" className="form-control" name="ratings">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col>
                                    <Label htmlFor="name">Your Name</Label>
                                    <Control.text model=".name" name="name" id="name" placeholder="Name" className="form-control" validators={{required, minlength, maxlength}} />
                                    <Errors show="touched" className="text-danger" model=".name" messages={{
                                                                                                            required: 'Required',
                                                                                                            minlength: 'must be greater than or equal to 3 characters',
                                                                                                            maxlength: 'Must contain 15 or less characters'
                                    }}/>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col>
                                    <Label htmlFor="comment">Comment</Label>
                                    <Control.textarea model=".comment" name="comment" id="comment" className="form-control" rows="6" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col>
                                    <Button color="primary" type="submit">Submit</Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>
                </>
            );
        }
    }

export default DishDetail;