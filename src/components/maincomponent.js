import React,{Component} from 'react';
import Header from './headercomponent';
import Home from './homecomponent';
import About from './aboutuscomponent';
import Menu from './menucomponent';
import Contact from './contactuscomponent';
import DishDetail from './dishdetailcomponent';
import Footer from './footercomponent';
import {Switch, Redirect, Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {addcomment, fetchdishs, fetchpromos, fetchleaders, fetchcomments} from '../redux/actioncreators';
import {actions} from 'react-redux-form';

const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

const mapDispatchToProps = (dispatch) => ({
  addcomment: (dishId, rating, author, comment) => dispatch(addcomment(dishId, rating, author, comment)),
  fetchdishs: () => {dispatch(fetchdishs())},
  fetchpromos: () => {dispatch(fetchpromos())},
  fetchleaders: () => {dispatch(fetchleaders())},
  fetchcomments: () => {dispatch(fetchcomments())},
  resetfeedbackform: () => {dispatch(actions.reset('feedback'))}
});

class Main extends Component {

  constructor(props){
    super(props); 
  }

  componentDidMount(){
    this.props.fetchdishs();
    this.props.fetchpromos();
    this.props.fetchleaders();
    this.props.fetchcomments();
  }

  render(){
    const Homepage = () => {
      return(
        <Home dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
              dishloading={this.props.dishes.isloading}
              disherrmsg={this.props.dishes.errmsg}
              promotion={this.props.promotions.promos.filter((promo) => promo.featured)[0]}
              promoloading={this.props.promotions.isloading}
              promoerrmsg={this.props.promotions.errmsg}
              leader={this.props.leaders.leaders.filter((lead) => lead.featured)[0]}
              leaderloading={this.props.leaders.isloading}
              leadererrmsg={this.props.leaders.errmsg}/>
      );
    }

    const dishdetail = ({match}) => {
      return(
        <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.id,10))[0]}
                    dishisloading={this.props.dishes.isloading}
                    disherrmsg={this.props.dishes.errmsg}
                    comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.id,10))}
                    commentserrmsg={this.props.comments.errmsg}
                    addcomment={this.props.addcomment}/>
      );
    }

    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={Homepage}/>
          <Route exact path="/aboutus" component={() => <About leaders={this.props.leaders} leaderloading={this.props.leaders.isloading} leadererrmsg={this.props.leaders.errmsg} />} />
          <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} />}/>
          <Route path="/menu/:id" component={dishdetail} />
          <Route exact path = "/contactus" component={() => <Contact resetfeedbackform={this.props.resetfeedbackform} />} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
  
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
