import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';

class Menu extends Component{
    constructor(props){
        super(props);
        this.state={
            selectedDish: null
        };
            
    }

    changeDish(dish){
        this.setState({selectedDish:dish});
    }

    renderDish(dish){
        if(dish!=null){
            return(
                <Card className="col-12 mt-3">
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
                </Card>
            );
        }
        else{
            return <div></div>;
        }
    }
    
    render(){
        const menu=this.props.dishes.map((dishes)=>{
            return(
                <div key={dishes.id} className="col-12 col-md-5 m-1">
                    <Card onClick={()=>{this.changeDish(dishes)}}>
                        <CardImg width="100%" src={dishes.image} alt={dishes.name} />
                        <CardImgOverlay>
                            <CardTitle>{dishes.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return(
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                    {this.renderDish(this.state.selectedDish)}
                </div>
            </div>
        );        
    }
}

export default Menu;
