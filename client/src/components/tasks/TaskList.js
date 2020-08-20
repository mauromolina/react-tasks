import React, { Fragment, useContext } from 'react';
import Task from './Task';
import projectContext from '../../context/projects/projectContext';
import taskContext from '../../context/tasks/taskContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const TaskList = () => {

    const projectsContext = useContext(projectContext);
    const { actualProject, deleteProject } = projectsContext;

    const tasksContext = useContext(taskContext);
    const { projectTasks } = tasksContext;

    // si no hay proyectos
    if(!actualProject) return <h2>Selecciona un proyecto</h2>

    const [actProject] = actualProject;

    return (
        <Fragment>
            <h2>Proyecto: {actProject.name}</h2>
            <ul className="listado-tareas">
                { projectTasks.length === 0
                 ? (<li className="tarea"><p>No hay tareas</p></li>)
                : 
                <TransitionGroup>
                    {projectTasks.map(task => 
                        (<CSSTransition
                            key={task.id}
                            timeout={400}
                            classNames="tarea"
                        >
                            <Task
                                task={task}
                            />
                        </CSSTransition>
                    ))}
                </TransitionGroup>
                }
            </ul>
            <button
                type="button"
                className="btn btn-eliminar"
                onClick={() => deleteProject(actProject._id)}
            >
                Eliminar proyecto &times;
            </button>
        </Fragment>
     );
}
 
export default TaskList;