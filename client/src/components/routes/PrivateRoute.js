import React, {useContext, useEffect} from 'react';
import {Route, Redirect} from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

const PrivateRoute = ({component: Component, ...props}) => {

    const authContext = useContext(AuthContext);
    const { auth, loading, getAuthUser } = authContext;

    useEffect( () => {
        getAuthUser();
    }, [])

    return ( 
        <Route
            {...props } render={ props => !auth && !loading ? (
                <Redirect to="/"/>
            ) : (
                <Component {...props}/>
            )}
        />
     );
}
 
export default PrivateRoute;