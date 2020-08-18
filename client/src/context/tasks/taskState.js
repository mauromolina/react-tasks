import React, {useReducer} from 'react';
import uuid from 'uuid';
import TaskContext from './taskContext';
import TaskReducer from './taskReducer';
import { PROJECT_TASKS,
         NEW_TASK, 
         VALIDATE_TASK, 
         DELETE_TASK,
         TASK_STATUS,
         ACTUAL_TASK,
         UPDATE_TASK
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
        taskError: false, 
        actualTask: null
    }

    const [state, dispatch] = useReducer(TaskReducer, initialState);

    const getProjectTasks = projectId => {
        dispatch({
            type: PROJECT_TASKS,
            payload: projectId
        })
    }

    const newTask = task => {
        task.id = uuid.v4();
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

    const changeTaskStatus = task => {
        dispatch({
            type: TASK_STATUS,
            payload: task
        })
    }

    const getActualTask = task => {
        dispatch({
            type: ACTUAL_TASK,
            payload: task
        })
    }

    const updateTask = task => {
        dispatch({
            type: UPDATE_TASK,
            payload: task
        })
    }

    return (
        <TaskContext.Provider
            value={{
                tasks: state.tasks,
                projectTasks: state.projectTasks,
                taskError: state.taskError,
                actualTask: state.actualTask,
                getProjectTasks,
                newTask,
                validateTask,
                deleteTask,
                changeTaskStatus,
                getActualTask,
                updateTask
            }}
        >
            {props.children}
        </TaskContext.Provider>
    )

}

export default TaskState;