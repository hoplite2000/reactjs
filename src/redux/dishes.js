import * as actiontypes from './actiontypes';

export const Dishes = (state = {
                                isloading: true,
                                errmsg: null,
                                dishes: []
                        }, action) =>{
        switch(action.type){
            case actiontypes.DISHES_LOADING:
                return({...state, isloading:true, errmsg:null, dishes:[]});
            case actiontypes.DISHES_FAILED:
                return({...state, isloading:false, errmsg:action.payload ,dishes:[]})
            case actiontypes.ADD_DISHES:
                return({...state, isloading:false, errmsg:null, dishes:action.payload})
            default:
                return state;
        }
}