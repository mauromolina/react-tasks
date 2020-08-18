import React, {useContext, useState, useEffect} from 'react';
import projectContext from '../../context/projects/projectContext';
import taskContext from '../../context/tasks/taskContext';

const TaskForm = () => {

    const projectsContext = useContext(projectContext);
    const { actualProject } = projectsContext;

    const tasksContext = useContext(taskContext);
    const { actualTask, taskError, newTask,  validateTask, getProjectTasks, updateTask } = tasksContext;

    useEffect( () => {
        if(actualTask !== null){
            setTask(actualTask);
        } else {
            setTask({
                name: ''
            })
        }
    }, [actualTask])
    
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

        // Si es edicion o esta agregando
        if (actualTask === null) {
            task.projectId = actProject.id;
            task.status = false;
            newTask(task);
        } else {
            updateTask(task);
        }
        
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
                        value={ actualTask ? 'Editar Tarea' : 'Agregar tarea'}
                    />
                </div>
            </form>
            { taskError ? <p className="mensaje error">El nombre de la tarea es obligatorio</p> : null}
        </div>
     );
}
 
export default TaskForm;