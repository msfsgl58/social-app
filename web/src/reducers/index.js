import {username} from '../actions/index'

const INITAL_STATE = {
  username:''
}

export const reducer = (state = INITAL_STATE, action) => {
    switch (action.type) {
        case username:
            return{...state,
                id:1,
                username:action.payload
            }
            break;
        default:
            break;
    }
    return state
}