import React, {useContext} from 'react';
import projectContext from '../../context/projects/projectContext';
import taskContext from '../../context/tasks/taskContext';

const Task = ({task}) => {

    const projectsContext = useContext(projectContext);
    const { actualProject } = projectsContext;

    const tasksContext = useContext(taskContext);
    const { deleteTask, getProjectTasks, changeTaskStatus, getActualTask } = tasksContext;

    const [actProject] = actualProject;

    const handleClick = (id) => {
        deleteTask(id);
        getProjectTasks(actProject.id);
    }

    const toggleStatus = task => {
        if(task.status){
            task.status = false;
        } else {
            task.status = true;
        }
        changeTaskStatus(task)
    }

    const getTask = task => {
        getActualTask(task);
    }

    return ( 
        <li className="tarea sombra">
            <p>{task.name}</p>
            <div className="estado">
                {task.status
                ? (<button
                    type="button"
                    className="completo"
                    onClick={() => toggleStatus(task)}
                    >Completo</button>)
                : (<button
                    type="button"
                    className="incompleto"
                    onClick={() => toggleStatus(task)}
                    >Incompleto</button>)}
            </div>
            <div className="acciones">
                <button
                    type="button"
                    className="btn btn-primario"
                    onClick={() => getTask(task)}
                >
                    Editar
                </button>
                <button
                    type="button"
                    className="btn btn-secundario"
                    onClick={() => handleClick(task.id)}
                >
                    Eliminar
                </button>
            </div>
        </li>
     );
}
 
export default Task;