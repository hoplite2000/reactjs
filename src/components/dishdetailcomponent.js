import React from 'react';
import {Card, CardText, CardImg, CardBody, CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';

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

    function Rendercardcomment(comments){
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
                </div>
            );
        }
    }

    const DishDetail = (props) => {
        if(props.dish != null){
            const cardbody = Rendercard(props.dish);
            const cardcomments = Rendercardcomment(props.comments);
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

export default DishDetail;