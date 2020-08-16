import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const NewAccount = () => {

    // State para iniciar sesion
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        confirm: ''
    });

    const { email, password, name, confirm } = user;

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        // validar campos

        // pasar al action
    }
    return ( 
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Nueva Cuenta</h1>
                <form
                    onSubmit={handleSubmit}
                >
                    <div className="campo-form">
                        <label
                            htmlFor="name"
                        >Nombre
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Nombre"
                            value={name}
                            onChange={handleChange}
                        />
                    </div>
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
                        <label
                            htmlFor="confirm"
                        >Confirmar contraseña
                        </label>
                        <input
                            type="password"
                            id="confirm"
                            name="confirm"
                            placeholder="Confirmar contraseña"
                            value={confirm}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="campo-form">
                        <input
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Registrarse"
                        />
                    </div>
                </form>
                <Link 
                    to={'/new-account'}
                    className="enlace-cuenta"
                >Ya tenés una cuenta? Inicia sesión
                </Link>
            </div>
        </div>
        );
}
 
export default NewAccount;