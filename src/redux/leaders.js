import * as actiontypes from './actiontypes';

export const Leaders = (state = {
                                isloading: true,
                                errmsg: null,
                                leaders: []
                        }, action) => {
    switch(action.type){
        case actiontypes.LEADERS_LOADING:
                return({...state, isloading:true, errmsg:null, leaders:[]});
            case actiontypes.LEADERS_FAILED:
                return({...state, isloading:false, errmsg:action.payload ,leaders:[]})
            case actiontypes.ADD_LEADERS:
                return({...state, isloading:false, errmsg:null, leaders:action.payload})
        default: return state;
    }
}