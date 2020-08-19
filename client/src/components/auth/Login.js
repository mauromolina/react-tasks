import React, {useState, useContext, useEffect} from 'react';
import {Link} from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alerts/alertContext';

const Login = (props) => {

    const alertContext = useContext(AlertContext);
    const { alert, showAlert } = alertContext;

    const authContext = useContext(AuthContext);
    const { msg, auth, logIn } = authContext;

    useEffect( () => {
        if(auth){
            props.history.push('/projects');
        }
        if(msg){
            showAlert(msg.msg, msg.category);
        }
    },[msg, auth, props.history])


    // State para iniciar sesion
    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const { email, password } = user;

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        // validar campos
        if(email.trim() === '' || password.trim() === ''){
            showAlert('Todos los campos son obligatorios', 'alerta-error');
        }
        // pasar al action
        logIn({ 
            email,
            password
        });
    }

    return ( 
        <div className="form-usuario">
            { alert ? (<div className={`alerta ${alert.category}`}>{alert.msg}</div>) :null}
            <div className="contenedor-form sombra-dark">
                <h1>Iniciar Sesión</h1>
                <form
                    onSubmit={handleSubmit}
                >
                    <div className="campo-form">
                        <label
                            htmlFor="email"
                        >Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="E-mail"
                            value={email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label
                            htmlFor="password"
                        >Contraseña
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Contraseña"
                            value={password}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="campo-form">
                        <input
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Iniciar Sesión"
                        />
                    </div>
                </form>
                <Link 
                    to={'/new-account'}
                    className="enlace-cuenta"
                >Obtener Cuenta
                </Link>
            </div>
        </div>
        );
}
 
export default Login;