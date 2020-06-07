import * as actiontypes from './actiontypes';

export const Promotions = (state = {
                                isloading: true,
                                errmsg: null,
                                promos: []
                        }, action) => {
    switch(action.type){
        case actiontypes.PROMOS_LOADING:
                return({...state, isloading:true, errmsg:null, promos:[]});
            case actiontypes.PROMOS_FAILED:
                return({...state, isloading:false, errmsg:action.payload ,promos:[]})
            case actiontypes.ADD_PROMOS:
                return({...state, isloading:false, errmsg:null, promos:action.payload})
        default: return state;
    }
}