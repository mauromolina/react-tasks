import React, {Fragment, useState, useContext} from 'react';
import projectContext from '../../context/projects/projectContext';

const NewProject = () => {

    // obtener el state del form
    const projectsContext = useContext(projectContext);
    const { form, showForm } = projectsContext;

    // State del nuevo proyecto
    const [project, setProject] = useState({
        name: ''
    });

    const [error, setError] = useState(false);

    const { name } = project;

    const handleChange = e => {
        setProject({
            ...project,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        // validar
        if(name.trim() === ''){
            setError(true);
            return;
        }
        setError(false);
        // guardo en el state
        setProject(name);
        // reinicio el form
        setProject({
            name:''
        })

    }

    return ( 
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
                onClick={ () => showForm()}
            >
                Nuevo Proyecto
            </button>
            { form ? 
                <form
                className="formulario-nuevo-proyecto"
                onSubmit={handleSubmit}
            >
                <input
                    type="text"
                    className="input-text"
                    placeholder="Nombre del proyecto"
                    name="name"
                    value={name}
                    onChange={handleChange}
                />
                <input
                    type="submit"
                    className="btn btn-primario btn-block"
                    value="Agregar"
                />
            </form>
            
            : null}
        </Fragment>
     );
}
 
export default NewProject;