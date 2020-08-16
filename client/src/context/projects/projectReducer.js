import { FORM_PROJECT, GET_PROJECTS, NEW_PROJECT, VALIDATE_FORM, ACTUAL_PROJECT, DELETE_PROJECT } from '../../types';


export default (state, action) => {
    switch(action.type) {
        case FORM_PROJECT:
            return {
                ...state,
                form: action.payload
            }
        case GET_PROJECTS:

            return {
                ...state,
                projects: action.payload
            }

        case NEW_PROJECT:
            return {
                ...state,
                projects: [...state.projects, action.payload],
                form: false,
                error: false
            }

        case VALIDATE_FORM:
            return {
                ...state,
                error: true
            }
        
        case ACTUAL_PROJECT:
            return {
                ...state,
                actualProject: state.projects.filter( project => project.id === action.payload)
            }

        case DELETE_PROJECT:
            return {
                ...state,
                projects: state.projects.filter( project => project.id !== action.payload),
                actualProject: null
            }
        default:
            return state;
    }
}