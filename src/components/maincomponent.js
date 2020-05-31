import React,{Component} from 'react';
import {DISHES} from '../shared/dishes';
import Header from './headercomponent';
import Home from './homecomponent';
import Menu from './menucomponent';
import DishDetail from './dishdetailcomponent';
import Footer from './footercomponent';
import {Switch, Redirect, Route} from 'react-router-dom';

class Main extends Component {

  constructor(props){
    super(props);
    this.state={dishes:DISHES};
  }

  render(){
    const Homepage = () => {
      return(
        <Home />
      );
    }
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={Homepage}/>
          <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />}/>
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
  
}

export default Main;
