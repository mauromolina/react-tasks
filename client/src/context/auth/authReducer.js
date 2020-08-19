import { 
    SUCCESSFULL_LOGIN,
    SUCCESSFULL_SIGNIN,
    FAILED_LOGIN,
    FAILED_SIGNIN,
    GET_USER,
    LOG_OUT
 } from '../../types';

export default (state, action) => {
    switch(action.type) {

        case SUCCESSFULL_SIGNIN:
        case SUCCESSFULL_LOGIN:
            localStorage.setItem('token', action.payload.token);    
            return {
                ...state,
                auth: true,
                msg: null    
            }

        case LOG_OUT:
        case FAILED_LOGIN:
        case FAILED_SIGNIN:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                user: null,
                auth: null,
                msg: action.payload    
            }

        case GET_USER:
            return {
                ...state,
                auth: true,
                user: action.payload
            }

        default:
            return state;
    }
}