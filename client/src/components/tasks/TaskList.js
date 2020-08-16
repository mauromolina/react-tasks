import React, { Fragment, useContext } from 'react';
import Task from './Task';
import projectContext from '../../context/projects/projectContext';

const TaskList = () => {

    const projectsContext = useContext(projectContext);
    const { actualProject, deleteProject } = projectsContext;

    // si no hay proyectos
    if(!actualProject) return <h2>Selecciona un proyecto</h2>

    const [actProject] = actualProject;

    const tasks = [
        { name: 'Elegir plataforma', status: false},
        { name: 'Elegir diseño', status: true},
        { name: 'Elegir hosting', status: false},
        { name: 'Elegir colores', status: true}
    ]

    // const handleClick = () => {
    //     deleteProject(actProject.id);
    // }

    return (
        <Fragment>
            <h2>Proyecto: {actProject.name}</h2>
            <ul className="listado-tareas">
                { tasks.length === 0
                 ? (<li className="tarea"><p>No hay tareas</p></li>)
                : tasks.map(task => (<Task task={task}/>))
                }
            </ul>
            <button
                type="button"
                className="btn btn-eliminar"
                onClick={() => deleteProject(actProject.id)}
            >
                Eliminar proyecto &times;
            </button>
        </Fragment>
     );
}
 
export default TaskList;