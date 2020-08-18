import React, {useContext, useState} from 'react';
import projectContext from '../../context/projects/projectContext';
import taskContext from '../../context/tasks/taskContext';

const TaskForm = () => {

    const projectsContext = useContext(projectContext);
    const { actualProject } = projectsContext;

    const tasksContext = useContext(taskContext);
    const { newTask, taskError, validateTask, getProjectTasks } = tasksContext;

    // State del form
    const [task, setTask] = useState({
        name: ''
    })

    const { name } = task;

    if(!actualProject) return null;

    const [actProject] = actualProject;

    const handleChange = e => {
        setTask({
            ...task,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        if(name.trim() === ''){
            validateTask();
            return;
        }
        task.projectId = actProject.id;
        task.status = false;
        newTask(task);
        getProjectTasks(actProject.id);
        setTask({
            name: ''
        })

    }

    return ( 
        <div className="formulario">
            <form
                onSubmit={handleSubmit}
            >
                <div className="contenedor-input">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Nombre tarea"
                        name="name"
                        value={name}
                        onChange={handleChange}
                    />
                </div>
                <div className="contenedor-input">
                    <input
                        type="submit"
                        className="btn btn-primario btn-block"
                        value="Agregar tarea"
                    />
                </div>
            </form>
            { taskError ? <p className="mensaje error">El nombre de la tarea es obligatorio</p> : null}
        </div>
     );
}
 
export default TaskForm;