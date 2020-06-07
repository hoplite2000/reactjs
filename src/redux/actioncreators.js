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
        .then(response =>{
            if(response.ok){
                return response;
            }
            else{
                var err = new Error('Error '+response.status+': '+response.statusText)
                err.response = response;
                throw err;
            }
        }, 
        error => {
            var errmsg = new Error(error.message);
            throw errmsg;
        })
        .then(response => response.json())
        .then(dishes => dispatch(adddishes(dishes)))
        .catch(error => dispatch(dishfail(error.message)));
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
        .then(response => {
            if(response.ok){
                return response;
            }
            else{
                var err = new Error('Error '+response.status+': '+response.statusText);
                err.response = response;
                throw err;
            }
        },
        error => {
            var errmsg = new Error(error.message);
            throw errmsg;
        })
        .then(response => response.json())
        .then(promos => dispatch(addpromos(promos)))
        .catch(error => dispatch(promosfail(error.message)));
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
        .then(leaders => dispatch(addleaders(leaders)))
        .catch(error=>dispatch(leadersfail(error.message)));
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
        .then(response => {
            if(response.ok){
                return response;
            }
            else{
                var err = new Error('Error '+response.status+': '+response.statusText);
                err.response = response;
                throw err;
            }
        },
        error => {
            var errmsg = new Error(error.message);
            throw errmsg;
        })
        .then(response => response.json())
        .then(comments => dispatch(addcomments(comments)))
        .catch(error=>dispatch(commentsfail(error.message)));
}