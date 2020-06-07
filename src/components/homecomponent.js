import React from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';
import Loading from './loadingcomponent';
import {Baseurl} from '../shared/baseurl';

function Rendercard({item, isloading, errmsg}){
    if(isloading){
        return(
            <Loading />
        );
    }
    else if(errmsg){
        return(
            <h4>{errmsg}</h4>
        );
    }
    else
        return(
            <Card>
                <CardImg src={Baseurl+item.image} alt={item.name} />
                <CardBody>
                    <CardTitle>{item.name}</CardTitle>
                    {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                    <CardText>{item.description}</CardText>
                </CardBody>
            </Card>
        );
}

function Home(props){
    return(
        <div className="container">
            <div className="row align-items-start rowsection">
                <div className="col-12"><h3>Home</h3><hr /></div>
                <div className="col-12 col-md m-1">
                    <Rendercard item={props.dish} isloading={props.dishloading} errmsg={props.disherrmsg} />
                </div>
                <div className="col-12 col-md m-1">
                    <Rendercard item={props.promotion} isloading={props.promoloading} errmsg={props.promoerrmsg} />
                </div>
                <div className="col-12 col-md m-1">
                    <Rendercard item={props.leader} isloading={props.leaderloading} errmsg={props.leadererrmsg} />
                </div>        
            </div>
        </div>
    );
}

export default Home;