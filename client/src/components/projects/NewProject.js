import React, {Fragment, useState, useContext} from 'react';
import projectContext from '../../context/projects/projectContext';

const NewProject = () => {

    // obtener el state del form
    const projectsContext = useContext(projectContext);
    const { form, toggleForm, error, newProject, showErrorForm } = projectsContext;

    // State del nuevo proyecto
    const [project, setProject] = useState({
        name: ''
    });

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
        if(name === ''){
            showErrorForm();
            return;
        }
        // guardo en el state
        newProject(project);
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
                onClick={ () => toggleForm(true)}
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
                <input
                    type="button"
                    className="btn btn-primario btn-block"
                    value="Cancelar"
                    onClick={() => toggleForm(false)}
                />
            </form>
            
            : null}
            { error ? <p className="mensaje error">El nombre del proyecto es obligatorio</p> :null}
        </Fragment>
     );
}
 
export default NewProject;