import * as actiontypes from './actiontypes';
import {DISHES} from '../shared/dishes';

export const addcomment = (dishId, rating, author, comment) => ({
    type: actiontypes.ADD_COMMENT,
    payload: { 
            dishId:dishId,
            rating:rating,
            author:author,
            comment:comment
        }
});

export const dishesloading = () => ({
    type: actiontypes.DISHES_LOADING
});

export const adddishes = (dishes) => ({
    type: actiontypes.ADD_DISHES,
    payload: dishes
});

export const dishfail = (errmsg) => ({
    type: actiontypes.DISHES_FAILED,
    payload: errmsg
});

export const fetchdishs = () => (dispatch) => {
    dispatch(dishesloading(true));
    setTimeout(() => {dispatch(adddishes(DISHES))}, 2000);
}