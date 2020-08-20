import React, {useReducer} from 'react';
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
import axiosClient from '../../config/axios';

const TaskState = props => {
    
    const initialState = {
        projectTasks: [],
        taskError: false, 
        actualTask: null
    }

    const [state, dispatch] = useReducer(TaskReducer, initialState);

    const getProjectTasks = async project => {
        try {
            const response = await axiosClient.get('api/tasks', { params: { project }})
            dispatch({
                type: PROJECT_TASKS,
                payload: response.data.tasks
            })
        } catch (error) {
            console.log(error);
        }
    }

    const newTask = async task => {
        try {
            const response = await axiosClient.post('/api/tasks', task);
            dispatch({
                type: NEW_TASK,
                payload: response.data
            })
        } catch (error) {
            console.log(error);
        }
    }

    const validateTask = () => {
        dispatch({
            type: VALIDATE_TASK
        })
    }

    const deleteTask = async (id, project) => {
        try {
            await axiosClient.delete(`/api/tasks/${id}`, { params: { project }});
            dispatch({
                type: DELETE_TASK,
                payload: id
            })
        } catch (error) {
            console.log(error);
        }
    }

    const updateTask = async task => {
        try {
            const response = await axiosClient.put(`/api/tasks/${task._id}`, task);
            console.log(response.data);
            dispatch({
                type: UPDATE_TASK,
                payload: response.data.taskExists
            })
        } catch (error) {
            console.log(error);
        }
    }

    const getActualTask = task => {
        dispatch({
            type: ACTUAL_TASK,
            payload: task
        })
    }



    return (
        <TaskContext.Provider
            value={{
                projectTasks: state.projectTasks,
                taskError: state.taskError,
                actualTask: state.actualTask,
                getProjectTasks,
                newTask,
                validateTask,
                deleteTask,
                getActualTask,
                updateTask
            }}
        >
            {props.children}
        </TaskContext.Provider>
    )

}

export default TaskState;