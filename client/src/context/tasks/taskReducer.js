import { PROJECT_TASKS, NEW_TASK, VALIDATE_TASK, DELETE_TASK, ACTUAL_TASK, UPDATE_TASK } from '../../types';

export default (state, action) => {
    switch(action.type) {

        case PROJECT_TASKS:
            console.log(action.payload);
            return {
                ...state,
                projectTasks: action.payload
            }

        case NEW_TASK:
            return {
                ...state,
                projectTasks: [...state.projectTasks, action.payload],
                taskError: false
            }

        case VALIDATE_TASK:
            return {
                ...state,
                taskError: true
            }

        case DELETE_TASK:
            return {
                ...state,
                projectTasks : state.projectTasks.filter( task => task._id !== action.payload)
            }
        
        case UPDATE_TASK:
            return {
                ...state,
                projectTasks: state.projectTasks.map( task => task._id === action.payload._id ? action.payload : task),
                actualTask: null
            }

        case ACTUAL_TASK:
            return {
                ...state,
                actualTask: action.payload
            }
        
        default:
            return state;
    }
}