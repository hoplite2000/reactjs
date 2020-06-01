import React,{Component} from 'react';
import {DISHES} from '../shared/dishes';
import {COMMENTS} from '../shared/comments';
import {LEADERS} from '../shared/leaders';
import {PROMOTIONS} from '../shared/promotions';
import Header from './headercomponent';
import Home from './homecomponent';
import About from './aboutuscomponent';
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

    const dishdetail = ({match}) => {
      return(
        <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.id,10))[0]}
                    comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.id,10))} />
      );
    }

    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={Homepage}/>
          <Route exact path="/aboutus" component={() => <About leaders={this.state.leaders} />} />
          <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />}/>
          <Route path="/menu/:id" component={dishdetail} />
          <Route exact path = "/contactus" component={Contact} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
  
}

export default Main;
