import React from 'react';
import {Card, CardText, CardImg, CardBody, CardTitle} from 'reactstrap';

class DishDetail extends React.Component{

    rendercard(dish){
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

    rendercardcomment(dish){
        if(dish.comments == null){
            return(<div></div>);
        }
        else{
            const comments=dish.comments.map((comment)=>{
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
                        {comments}
                    </ul>
                </div>
            );
        }
    }

    render(){
        if(this.props.dish != null){
            const cardbody = this.rendercard(this.props.dish);
            const cardcomments = this.rendercardcomment(this.props.dish);
            return(
                <div className="row">
                    {cardbody}
                    {cardcomments}
                </div>
            );
        }
        else{
            return(<div></div>);
        }

    }

}

export default DishDetail;