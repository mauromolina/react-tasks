import React, {useContext, useEffect} from 'react';
import AuthContext from '../../context/auth/authContext';

const Navbar = () => {

    const authContext = useContext(AuthContext);
    const { user, getAuthUser, logOut } = authContext;

    useEffect( () => {
        getAuthUser();
    },[])

    return ( 
        <header className="app-header">
            { user ? 
            <p className="nombre-usuario">
                Hola <span>{user.name}</span>!
            </p>
            : null}
            { user ? 
            <nav className="nav-principal">
                <button
                    className="btn btn-blank cerrar-sesion log-out"
                    onClick={() => logOut()}
                >Cerrar sesión</button>
            </nav>
            : null}
        </header>
     );
}
 
export default Navbar;