import React from 'react';
import {Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';
import Loading from './loadingcomponent';
import {Baseurl} from '../shared/baseurl';

    function Cardrender({dish}){
        return(
            <Card>
                <Link to={`/menu/${dish.id}`}>
                    <CardImg width="100%" src={Baseurl+dish.image} alt={dish.name} />
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                </Link>
            </Card>
        );
    }

    const Menu = (props) => {
        const menu=props.dishes.dishes.map((dish)=>{
            return(
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Cardrender dish={dish}/>
                </div>
            );
        });
        
        if(props.dishes.isloading){
            return(
                <div className="container">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            );
        }
        else if(props.dishes.errmsg){
            return(
                <div className="container">
                    <div className="row">
                        <h4>{props.dishes.errmsg}</h4>
                    </div>
                </div>
            );
        }
        else
            return(
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to ="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Menu</BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                    <div className="col-12"><h3>Menu</h3><hr /></div>
                    <div className="row rowsection">
                        {menu}
                    </div>
                </div>
            );        
    }


export default Menu;
