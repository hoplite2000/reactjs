import * as actiontypes from './actiontypes';
import {Baseurl} from '../shared/baseurl';

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
    return fetch(Baseurl+'dishes')
        .then(response => response.json())
        .then(dishes => dispatch(adddishes(dishes)));
}

export const promosloading = () => ({
    type: actiontypes.PROMOS_LOADING
});

export const addpromos = (promos) => ({
    type: actiontypes.ADD_PROMOS,
    payload: promos
});

export const promosfail = (errmsg) => ({
    type: actiontypes.PROMOS_FAILED,
    payload: errmsg
});

export const fetchpromos = () => (dispatch) => {
    dispatch(promosloading(true));
    return fetch(Baseurl+'promotions')
        .then(response => response.json())
        .then(promos => dispatch(addpromos(promos)));
}

export const leadersloading = () => ({
    type: actiontypes.LEADERS_LOADING
});

export const addleaders = (leaders) => ({
    type: actiontypes.ADD_LEADERS,
    payload: leaders
});

export const leadersfail = (errmsg) => ({
    type: actiontypes.LEADERS_FAILED,
    payload: errmsg
});

export const fetchleaders = () => (dispatch) => {
    dispatch(promosloading(true));
    return fetch(Baseurl+'leaders')
        .then(response => response.json())
        .then(leaders => dispatch(addleaders(leaders)));
}

export const commentsfail = (errmsg) => ({
    type: actiontypes.COMMENTS_FAILED,
    payload: errmsg
})

export const addcomments =(comments) =>({
    type: actiontypes.ADD_COMMENTS,
    payload: comments
})

export const fetchcomments = () => (dispatch) =>{
    return fetch(Baseurl+'comments')
        .then(response => response.json())
        .then(comments => dispatch(addcomments(comments)));
}