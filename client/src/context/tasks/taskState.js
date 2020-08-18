import React, {useReducer} from 'react';
import TaskContext from './taskContext';
import TaskReducer from './taskReducer';
import { PROJECT_TASKS,
         NEW_TASK, 
         VALIDATE_TASK, 
         DELETE_TASK 
        } from '../../types';

const TaskState = props => {
    
    const initialState = {
        tasks : [
            { id: 1, name: 'Elegir plataforma TV', status: false, projectId: 1},
            { id: 2, name: 'Elegir diseño TV', status: true, projectId: 1},
            { id: 3, name: 'Elegir hosting MERN', status: false, projectId:3},
            { id: 4, name: 'Elegir colores', status: true, projectId: 2},
            { id: 5, name: 'Elegir plataforma TV', status: false, projectId: 1},
            { id: 6, name: 'Elegir diseño MERN', status: true, projectId: 3},
            { id: 7, name: 'Elegir hosting MERN', status: false, projectId:3},
            { id: 8, name: 'Elegir colores', status: true, projectId: 2},
        ],
        projectTasks: null,
        taskError: false
    }

    const [state, dispatch] = useReducer(TaskReducer, initialState);

    const getProjectTasks = projectId => {
        dispatch({
            type: PROJECT_TASKS,
            payload: projectId
        })
    }

    const newTask = task => {
        dispatch({
            type: NEW_TASK,
            payload: task
        })
    }

    const validateTask = () => {
        dispatch({
            type: VALIDATE_TASK
        })
    }

    const deleteTask = id => {
        dispatch({
            type: DELETE_TASK,
            payload: id
        })
    }

    return (
        <TaskContext.Provider
            value={{
                tasks: state.tasks,
                projectTasks: state.projectTasks,
                taskError: state.taskError,
                getProjectTasks,
                newTask,
                validateTask,
                deleteTask
            }}
        >
            {props.children}
        </TaskContext.Provider>
    )

}

export default TaskState;