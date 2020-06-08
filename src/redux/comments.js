import * as actiontypes from './actiontypes'

export const Comments = (state = {  
                                errmsg: null,
                                comments: []
                        }, action) =>{
    switch(action.type){
        case actiontypes.COMMENTS_FAILED:
            return({...state, errmsg:action.payload ,comments:[]})
        case actiontypes.ADD_COMMENTS:
            return({...state, errmsg:null, comments:action.payload})
        case actiontypes.ADD_COMMENT:
            var comment = action.payload;
            return {...state, comments: state.comments.concat(comment)};
        default: return state;
    }
}