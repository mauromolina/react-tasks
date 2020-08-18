import React, {useReducer} from 'react';
import TaskContext from './taskContext';
import TaskReducer from './taskReducer';
import { PROJECT_TASKS } from '../../types';

const TaskState = props => {
    
    const initialState = {
        tasks : [
        { name: 'Elegir plataforma TV', status: false, projectId: 1},
        { name: 'Elegir diseño TV', status: true, projectId: 1},
        { name: 'Elegir hosting MERN', status: false, projectId:3},
        { name: 'Elegir colores', status: true, projectId: 2},
        { name: 'Elegir plataforma TV', status: false, projectId: 1},
        { name: 'Elegir diseño MERN', status: true, projectId: 3},
        { name: 'Elegir hosting MERN', status: false, projectId:3},
        { name: 'Elegir colores', status: true, projectId: 2},
        ],
        projectTasks: null
    }

    const [state, dispatch] = useReducer(TaskReducer, initialState);

    const getProjectTasks = projectId => {
        dispatch({
            type: PROJECT_TASKS,
            payload: projectId
        })
    }

    return (
        <TaskContext.Provider
            value={{
                tasks: state.tasks,
                projectTasks: state.projectTasks,
                getProjectTasks
            }}
        >
            {props.children}
        </TaskContext.Provider>
    )

}

export default TaskState;