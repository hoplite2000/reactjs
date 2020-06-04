import {createStore} from 'redux';
import {DISHES} from '../shared/dishes';
import {COMMENTS} from '../shared/comments';
import {LEADERS} from '../shared/leaders';
import {PROMOTIONS} from '../shared/promotions';

const initialstate = {
    dishes:DISHES,
    leaders:LEADERS,
    promotions:PROMOTIONS,
    comments:COMMENTS
}

const Reducer = (state = initialstate, action) => {
    return(
        state
    );
}

export const ConfigStore = () => {
    const store = createStore(Reducer, initialstate);
    return store;
}