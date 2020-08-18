import { PROJECT_TASKS, NEW_TASK, VALIDATE_TASK, DELETE_TASK, TASK_STATUS, ACTUAL_TASK, UPDATE_TASK } from '../../types';

export default (state, action) => {
    switch(action.type) {

        case PROJECT_TASKS:
            return {
                ...state,
                projectTasks: state.tasks.filter( task => task.projectId === action.payload)
            }

        case NEW_TASK:
            return {
                ...state,
                tasks: [action.payload, ...state.tasks],
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
                tasks : state.tasks.filter( task => task.id !== action.payload)
            }
        
        case UPDATE_TASK:
        case TASK_STATUS:
            return {
                ...state,
                tasks: state.tasks.map( task => task.id === action.payload.id ? action.payload : task),
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