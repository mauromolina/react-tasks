import React, {useReducer} from 'react';
import authContext from './authContext';
import authReducer from './authReducer';
import axiosClient from '../../config/axios';
import authToken from '../../config/authToken';

import { 
    SUCCESSFULL_LOGIN,
    SUCCESSFULL_SIGNIN,
    FAILED_LOGIN,
    FAILED_SIGNIN,
    GET_USER,
    LOG_OUT
 } from '../../types';

 const AuthState = props => {

    const initialState = {
        token: localStorage.getItem('token'),
        auth: null,
        user: null,
        msg: null
    }

    const [state, dispatch] = useReducer(authReducer, initialState);

    const signInUser = async data => {
        try {
            const response = await axiosClient.post('/api/users', data);
            dispatch({
                type: SUCCESSFULL_SIGNIN,
                payload: response.data
            })

            getAuthUser();
        } catch (error) {
            const alert = {
                msg: error.response.data.msg,
                category: 'alerta-error'
            }
            dispatch({
                type: FAILED_SIGNIN,
                payload: alert
            })
        }
    }

    const getAuthUser = async () => {
        const token = localStorage.getItem('token');
        if(token){
            authToken(token);
        }
        try {
            const response = await axiosClient.get('/api/auth');
            dispatch({
                type: GET_USER,
                payload: response.data.user
            });
        } catch (error) {
            dispatch({
                type: FAILED_LOGIN
            })
        }
    }

    const logIn = async data => {
        try {
            const response = await axiosClient.post('/api/auth', data);
            console.log(response);
            dispatch({
                type: SUCCESSFULL_LOGIN,
                payload: response.data
            })
            getAuthUser();
        } catch (error) {
            console.log(error.response.data.msg);
            const alert = {
                msg: error.response.data.msg,
                category: 'alerta-error'
            }
            dispatch({
                type: FAILED_LOGIN,
                payload: alert
            })
        }
    }

    const logOut = () => {
        dispatch({
            type: LOG_OUT
        })
    }
    

    return (
        <authContext.Provider
            value={{
                token: state.token,
                auth: state.auth,
                user: state.user,
                msg: state.msg,
                signInUser,
                logIn,
                getAuthUser,
                logOut
            }}>
            {props.children}
        </authContext.Provider>    
    )

 }

 export default AuthState;