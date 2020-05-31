import React,{Component} from 'react';
import {DISHES} from '../shared/dishes';
import {COMMENTS} from '../shared/comments';
import {LEADERS} from '../shared/leaders';
import {PROMOTIONS} from '../shared/promotions';
import Header from './headercomponent';
import Home from './homecomponent';
import Menu from './menucomponent';
import Contact from './contactuscomponent';
import DishDetail from './dishdetailcomponent';
import Footer from './footercomponent';
import {Switch, Redirect, Route} from 'react-router-dom';

class Main extends Component {

  constructor(props){
    super(props);
    this.state={dishes:DISHES,
                leaders:LEADERS,
                promotions:PROMOTIONS,
                comments:COMMENTS
                };
  }

  render(){
    const Homepage = () => {
      return(
        <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]}
              promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
              leader={this.state.leaders.filter((lead) => lead.featured)[0]}/>
      );
    }
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={Homepage}/>
          <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />}/>
          <Route path = "/contactus" component={Contact} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
  
}

export default Main;
