import React,{Component} from 'react';
import {DISHES} from '../shared/dishes';
import Header from './headercomponent.js';
import Menu from './menucomponent';
import DishDetail from './dishdetailcomponent';
import Footer from './footercomponent'

class Main extends Component {

  constructor(props){
    super(props);
    this.state={dishes:DISHES,
                selectedDish: null};
  }

  changeDish(dishid){
    this.setState({selectedDish:dishid});
  }

  render(){
    return (
      <div>
        <Header />
        <Menu dishes={this.state.dishes}
              onClick={(dishid)=>this.changeDish(dishid)}/>
        <DishDetail dish={this.state.dishes.filter((dish)=> dish.id === this.state.selectedDish)[0]}/>
        <Footer />
      </div>
    );
  }
  
}

export default Main;
